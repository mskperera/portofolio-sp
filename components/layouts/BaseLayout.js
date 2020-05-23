import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const layout = (props) => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title,
    cannonical,
  } = props;

  const headerType = props.headerType || "default";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Susantha Perera and I am an experienced software
                  engineer and freelance developer.   I have a Master's degree in Artificial Intelligence and
                  serveral years of experience working on a wide range of
                  technologies and projects from C++ development for ultrasound
                  deviece to modern mobile and web applications in React and
                  Angular. Throughout my career, I have acquired advanced technical
                  knowlage and the ability to explain programming topics clearly
                  and in detail to a broad audience. I invite you to take my
                  course, where I have put a lot of effort to explain web and
                  software engineering concept in a detailed, hands-on and
                  understandable way."
        />
        <meta
          name="keywords"
          content="sp portfolio, sp developer, sp freelanceing, sp programming"
        />
        <meta
          property="og:title"
          content="SP - programmer, developer, blogger"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />{" "}
        {/* <meta property="og:url" content="http://localhost:3000" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Susantha Perera and I am an experienced software engineer and freelance developer. "
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          /> // <link rel="cannonical" href={`http://localhost:3000${cannonical}`} />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default layout;
