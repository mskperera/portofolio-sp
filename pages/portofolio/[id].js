import React, { Component } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";
import BasePage from "../../components/BasePage";

class Portofolio extends Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = res.data;
    } catch (error) {
      console.log(error);
    }

    return { post: post };
  }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <h1>{this.props.post.title}</h1>
        <h2>{this.props.post.body}</h2>
        <p>{this.props.post.id}</p>
      </BaseLayout>
    );
  }
}
export default withRouter(Portofolio);
