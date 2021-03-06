import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Paginator from "nukleus/dist/components/Paginator";
import Notification from "nukleus/dist/components/Notification";
import { Link } from "react-router";
import CityRow from "../components/CityRow";

import style from "./homePage.scss";

export default class HomePage extends React.Component {

  constructor () {
    super();
    this.state = {
      allCountries: [], // data from "cities" API
      requestedCountries: [], // data from "autocomplete" API
      countryList: { // for the autocomplete
        items: []
      },
      countriesPerPage: 10,
      onGetSuggestions: this.onGetSuggestions.bind(this),
      onSelectSuggestion: this.onSelectSuggestion.bind(this),
      lastSelection: {},
      infoVisible: false
    };
  }

  processCountries (res) {
    // process the promise data
    let data = res.data;
    // prepare the data for the dropdown list
    let items = [];
    for (let i = 0; i < data.length; i++) {
      let item = {
        "id": data[i].id,
        "item": data[i].name,
        "itemInfo": data[i].admin_area,
        "country": data[i].country
      };
      items.push(item);
    }
    console.log("processCountries",items);
    this.setState(
      {
        requestedCountries: data,
        countryList: {
          items: items
        }
      }
    );
  }

  getCountries (query) {
    axios
      .get(`/api/${query}.json`)
      .then(res => this.processCountries(res, query))
      .catch(err => console.log(err));
  }

  componentDidMount () {
    // I assume that the list of countries is always necessary, so I get it and don't count with concurrent requests
    axios
      .get("/api/all.json")
      .then(res => this.setState(
        {
          allCountries: res.data,
        }
      ))
      .catch(err => console.log(err));
  }

  onGetSuggestions (e) {
    console.log("onGetSuggestions",e);
    /*
    alternatively the dropdown can be cleared on user input
    this.setState(
      {
        countryList: {
          items: []
        }
      }
    );
    */
    this.getCountries(e.toLowerCase()); // lowercase search string
  }

  onSelectSuggestion (country, countryList, index) {
    console.log("onSelectSuggestion",country.name, countryList, index);
    let allCountries = this.state.allCountries;
    allCountries[index].selected = countryList;

    let lastSelection = {};
    lastSelection.city = country.name;
    lastSelection.selected = countryList;
    this.setState(
      {
        allCountries,
        lastSelection,
        infoVisible: true
      }
    );


    console.clear();
    // On selection of a result in the autocomplete fields, console.log() the full objects corresponding with both:
    // - the city in the left column
    // - the selected item from the dropdown
    // Wichtig ist das Ergebnis als kombiniertes Objekt entweder in der console - oder im UI selbst bei “bestätigung” des Autosuggest Items.
    console.log("%c lastSelection: ", "background: #18242b; color: #99c613", lastSelection);

    return lastSelection;

  }

  render() {

    let { allCountries, countriesPerPage, countryList, onGetSuggestions, onSelectSuggestion } = this.state;
    // Logic for displaying Countries

    // This is probably hacky, but I have not found any documentation how to use the Paginator component
    let currentPage = this.props.location.query.page || 1;
    let indexOfLastCountries = currentPage * countriesPerPage;
    let indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
    let currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries);
    let totalPages = Math.ceil(allCountries.length / countriesPerPage);

    return (
      <main className="main">
        <div className="container-fluid">
          <h1>City-matcher tool</h1>

          <div className="alert alert-info" role="alert">
            <strong>Please note</strong> Since this is only a mock API, autocomplete data will only be returned for the autocomplete endpoint with the queries `a`, `ab` or `ac`.
          </div>

          <section className={`${style.countrySection}`}>
            {
              currentCountries.map(function(item, index) {
                return <CityRow
                  key={item.id}
                  item={item}
                  index={(currentPage - 1) * countriesPerPage + index}
                  countryList={countryList}
                  onGetSuggestions={onGetSuggestions}
                  onSelectSuggestion={onSelectSuggestion}
                />;
              })
            }

            <div className={style.paginator}>
              <Paginator
                totalPages={totalPages}
                pathname="/home"
                query={{"page": currentPage}}
                baseLink={<Link to={{pathname: "/home"}}>1</Link>} />
            </div>
          </section>

        </div>
        <Notification
          message={`Last Selection: ${JSON.stringify(this.state.lastSelection, null, "\t")}`}
          visible={this.state.infoVisible}
        />
      </main>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object
};
