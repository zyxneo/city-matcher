import React from "react";
import axios from "axios";
import {Autocomplete} from "nukleus";

export default class HomePage extends React.Component {

  constructor () {
    super();
    this.state = {
      allCountries: [], // data from "cities" API
      requestedCountries: [], // data from "autocomplete" API
      countryQuery: "", // the user input
      countryList: { // for the autocomplete
        items: []
      },
      countryMatch: "<city name>" // whenever the two city name match [string]
    };
  }

  processCountries (res, query) {
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
        countryQuery: query,
        countryList: {
          items: items
        }
      }
    );
  }

  getCountries (query) {
    if (query !== this.state.countryQuery &&
      (query === "a" || query === "ab" || query === "ac") // only for mock data now
    ) {
      axios
        .get(`/api/${query}.json`)
        .then(res => this.processCountries(res, query))
        .catch(err => console.log(err));
    }
  }

  componentDidMount () {
    // I assume that the list of countries is always necessary, so I get it and don't count with concurrent requests
    axios
      .get(`/api/all.json`)
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

  onSelectSuggestion (e) {
    console.log("onSelectSuggestion",e.item);
    let selectedCountry = e.item;
    let allCountries = this.state.allCountries;

    if (typeof(selectedCountry) !== "undefined" && selectedCountry.length) {
      for (let i = 0; i < allCountries.length; i++) {
        if (allCountries[i].name.lastIndexOf(selectedCountry) !== -1) {
          console.clear();
          // On selection of a result in the autocomplete fields, console.log() the full objects corresponding with both:
          // - the city in the left column
          // - the selected item from the dropdown
          console.log("%c Found!", "background: #18242b; color: #99c613", allCountries[i], e);
          let countryMatch = allCountries[i].name;
          let countryQuery = countryMatch;
          this.setState({countryMatch, countryQuery});
          return;
        }
      }
      let countryMatch = "Nothing found...";
      this.setState({countryMatch});
      console.clear();
      console.log("%c Nothing found..." , "background: #18242b; color: #f6363f");
      return;
    }

  }

  render() {

      return (
        <main className="main">
          <div className="container-fluid">
            <h1>City-matcher tool</h1>

            <div class="alert alert-info" role="alert">
              <strong>Please note</strong> Since this is only a mock API, autocomplete data will only be returned for the autocomplete endpoint with the queries `a`, `ab` or `ac`.
            </div>

            <div class="row">
              <div class="col-sm-12 col-lg-6">
                {this.state.countryMatch}
              </div>
              <div class="col-sm-12 col-lg-6">
                <Autocomplete
                  data={this.state.countryList}
                  id="autocompletes"
                  label="Select Countries"
                  name="autocomplete"
                  placeholder="Type 'a', 'ab' or 'ac'..."
                  scrollOffset={70}
                  scrollTo
                  autoFocus={true}
                  onGetSuggestions={this.onGetSuggestions.bind(this)}
                  onSelectSuggestion={this.onSelectSuggestion.bind(this)}/>
              </div>
            </div>
          </div>
        </main>
      )
  }
}
