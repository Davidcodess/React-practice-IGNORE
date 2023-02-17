import React from 'react';

class Item extends React.Component {
    clickMe() {

            // click event based on name proerty set in app.js //
        console.log("You clicked:", this.props.name)
    }

    render() {
      return (
        <h1 onClick={() => this.clickMe ()}>Hello from {this.props.name} I'm learning React  </h1>
      )
    }
  }

  export default Item;

  