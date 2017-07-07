import React from "react";
import {Autocomplete} from 'nukleus';

export default class HomePage extends React.Component {
  render() {

      return (
        <main className="main">
          <div className="container-fluid">
            <h1>HomePage</h1>

            <h3>Under development</h3>

            <Autocomplete
              data={{
                items: [
                  {item: 'apple', itemInfo: 'US'},
                  {item: 'alpha', itemInfo: 'Vienna'},
                  {item: 'IBM', itemInfo: 'US'},
                  {item: 'kununu', itemInfo: 'Vienna'},
                  {item: 'kununu', itemInfo: 'US'}
                ]
              }}
              id="autocompletes"
              label="Autocomplete"
              name="autocomplete"
              placeholder="Type something..."
              scrollOffset={70}
              scrollTo />
          </div>
        </main>
      )
  }
}
