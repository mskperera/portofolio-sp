import React from "react";
import { Container } from "reactstrap";
import propTypes from "prop-types";

const basePage = (props) => {
  const { className, title } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {title && (
          <div className="page-header">
            <h1 className="page-header-title">{title}</h1>
          </div>
        )}
        {props.children}
      </Container>
    </div>
  );
};

basePage.defalutProps = {
  className: "",
};

export default basePage;
