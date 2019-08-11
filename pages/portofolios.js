import React, { Component } from "react";
import BaseLayout from "./components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";

class Portofolios extends Component {
  static async getInitialProps() {
    let posts = {};
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (error) {
      console.log(error);
    }

    return { posts: posts.slice(0, 10) };
  }

  render() {
    console.log("posts", this.props.posts);
    const postsList = this.props.posts.map(p => (
      <li key={p.id}>
        <Link as={`/portofolio/${p.id}`} href="/portofolio/[id]">
          <a> {p.title}</a>
        </Link>
      </li>
    ));
    return (
      <BaseLayout>
        <h1>I am Portofolios page.</h1>
        <ul>{postsList}</ul>
      </BaseLayout>
    );
  }
}
export default Portofolios;
