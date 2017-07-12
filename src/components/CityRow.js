import React from "react";
import Autocomplete from "nukleus/dist/components/Autocomplete";

import style from "./cityRow.scss";

export default class CityRow extends React.Component {

  onSelectSuggestion (e) {
    this.props.onSelectSuggestion(this.props.name, e);
  }

  render() {
    return (
      <div className={`${style.cityRow}`}>
        <div className={`${style.cityRow__city}`}>
          <p className={`${style.cityRow__cityName}`}
             dangerouslySetInnerHTML={{__html: `${this.props.name} <small class="text-muted">(${this.props.admin_area})</small>`}}></p>
        </div>
        <div className={`${style.cityRow__autocomplete}`}>
          <Autocomplete
            data={this.props.countryList}
            id={`autocomplete_${this.props.name}`}
            label="Select Country"
            name="autocomplete"
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
  };
};
