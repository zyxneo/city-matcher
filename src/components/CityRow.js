import React from "react";
import Autocomplete from "nukleus/dist/components/Autocomplete";
import PropTypes from "prop-types";

import style from "./cityRow.scss";

export default class CityRow extends React.Component {

  onSelectSuggestion (e) {
    this.props.onSelectSuggestion(this.props.item, e, this.props.index);
  }

  render() {

    let item = this.props.item;
    let value = null;
    // if the value for autocomplete was already set, than use it
    if (item.selected) {
      value = item.selected.item || null;
    }
    let name = item.name;
    let admin_area = item.admin_area;

    return (
      <div className={`${style.cityRow}`}>
        <div className={`${style.cityRow__city}`}>
          <p className={`${style.cityRow__cityName}`}
            dangerouslySetInnerHTML={{__html: `${name} <small class="text-muted">(${admin_area})</small>`}}></p>
        </div>
        <div className={`${style.cityRow__autocomplete}`}>
          <Autocomplete
            data={this.props.countryList}
            id={`autocomplete_${name}`}
            label="Select Country"
            name="autocomplete"
            value={value}
            placeholder="Type 'a', 'ab' or 'ac'..."
            scrollOffset={70}
            scrollTo
            autoFocus={false}
            labelHidden={true}
            onGetSuggestions={this.props.onGetSuggestions}
            onSelectSuggestion={this.onSelectSuggestion.bind(this)}/>
        </div>
      </div>
    );
  }
}

CityRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  countryList: PropTypes.object.isRequired,
  onSelectSuggestion: PropTypes.func.isRequired,
  onGetSuggestions: PropTypes.func
};
