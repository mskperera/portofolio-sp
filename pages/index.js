import React from "react";
import BaseLayout from "./components/layouts/BaseLayout";
import axios from "axios";

class Index extends React.Component {
  static async getInitialProps() {
    let userData = {};
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      userData = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    return { initialData: [1, 2, 3, 4], userData: userData };
  }

  constructor() {
    super();
    console.log("constructor");
  }

  state = {
    title: "i am index page"
  };

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      <BaseLayout>
        <h1>Index Page from class component</h1>
        <h1>{this.props.userData.title}</h1>
        <p>{this.state.title}</p>
        <button
          onClick={() => {
            this.setState({ title: "i am updated index page" });
          }}
        >
          change
        </button>
      </BaseLayout>
    );
  }
}
export default Index;
