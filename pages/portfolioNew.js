import React, { Component } from "react";
import { Router } from "../routes";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";

import withAuth from "../components/hoc/withAuth";
import { Row, Col } from "reactstrap";

import { createPortfolio } from "../actions";

import moment from "moment";

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: "",
  startDate: moment(),
  endDate: moment(),
};

class PortfolioNew extends Component {
  state = {
    error: undefined,
  };

  savePortfolio = (portfolioData, actions) => {
    actions.setSubmitting(true);

    createPortfolio(portfolioData)
      .then((portfolio) => {
        actions.setSubmitting(false);
        this.setState({ error: undefined });
        Router.push("/portfolios");
      })
      .catch((err) => {
        const error = err.message || "Server error";
        actions.setSubmitting(false);
        this.setState({ error });
      });
    //alert(JSON.stringify(portfolioData, null, 2));
  };

  render() {
    const { error } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create new Portfolio"
        >
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                initialValues={INITIAL_VALUES}
                error={error}
                onSubmit={this.savePortfolio}
              />
            </Col>{" "}
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default withAuth("siteOwner")(PortfolioNew);
