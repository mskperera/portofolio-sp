import React from "react";
import Link from "next/link";
import "../../../styles/main.scss";
import { Link as NextLink } from "../../../routes";

const header = props => {
  return (
    <React.Fragment>
      <p className="CustomFormatFromFile">i am blue styled element</p>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/portofolios">
        <a>Portofolios</a>
      </Link>
      <Link href="/cv">
        <a>CV</a>
      </Link>
      <NextLink route="test" params={{ id: "2" }}>
        <a>Test2</a>
      </NextLink>
      <NextLink route="/test/5">
        <a>Test5</a>
      </NextLink>
      <style jsx>
        {`
          a {
            font-size: 20px;
            margin: 10px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default header;
