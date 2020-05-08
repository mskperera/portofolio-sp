import React from "react";

class Test extends React.Component {
  static getInitialProps({ query }) {
    const id = query.id;
    return { id };
  }
  state = {};
  render() {
    return <h1>Test page id is {this.props.id}</h1>;
  }
}

export default Test;
