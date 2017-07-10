import React from "react";
import Notification from "nukleus/dist/components/Notification";

export default class AboutPage extends React.Component {

  constructor () {
    super();
    this.state = {
      infoVisible: false
    };
  }

  onChange () {
    console.log("noop");
    this.setState(
      {
        infoVisible: true
      }
    );
  }

  render() {

      return (
        <main class="main">

          <div className="container-fluid">
            <h1>About Page</h1>
            <p>This page is only for representing Client-side routing.</p>

            <h3>Tasks:</h3>
            <ul>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> UI libraries like React or Elm <span className="text-muted">- React used</span></li>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> Client-side state management and synchronization</li>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> Client-side routing <span className="text-muted">- react-router used</span></li>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> Use ES2015 promises or ES2017 async/await <span className="text-muted">- Axios promise used</span></li>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> Use a module bundler <span className="text-muted">- Webpack used</span></li>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> Build the interface using flexbox or CSS grid layout <span className="text-muted">- Tiny example added for the city-matcher module</span></li>
              <li><input type="checkbox" checked="checked" onChange={this.onChange.bind(this)}/> Add polyfills for older browsers <span className="text-muted">- Autoprefixer, babel-polyfill, axios used</span></li>
              <li><input type="checkbox" onChange={this.onChange.bind(this)}/> Universal (isomorphic) JavaScript</li>
            </ul>
          </div>

          <Notification
            message="This is only for representation. Can not be changed..."
            icon={<i className="nerd-face-emoji">🤓</i>}
            visible={this.state.infoVisible}
          />
        </main>
      )
  }
}
