import React from "react";
import App, { Container } from "next/app";
import Fonts from "../helpers/Fonts";

import auth0 from "../services/auth0";

//styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

const namespace = process.env.NAMESPACE; //"http://localhost:3000";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    const user = process.browser
      ? await auth0.clientAuth()
      : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    console.log("process.env.NODE_ENV Running on", process.env.NODE_ENV);
    //////////////////
    // let isAuthenticated=false;    //   isAuthenticated:!!user   short form
    // if(user){
    //   isAuthenticated=true;
    // }

    //////////////////

    const isSiteOwner = user && user[namespace + "/role"] === "siteOwner";

    const auth = { user, isAuthenticated: !!user, isSiteOwner };

    return { pageProps, auth };
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    const { Component, pageProps, auth } = this.props;

    return <Component {...pageProps} auth={auth} />;
  }
}

export default MyApp;
