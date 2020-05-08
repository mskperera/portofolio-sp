import React, { Component } from "react";
import { Router } from "../routes";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";

import withAuth from "../components/hoc/withAuth";
import { Row, Col } from "reactstrap";

import { updatePortfolio, getPortfolioById } from "../actions";

class PortfolioEdit extends Component {
  static async getInitialProps({ query }) {
    let portfolio = {};

    try {
      portfolio = await getPortfolioById(query.id);
    } catch (err) {
      console.error(err);
    }


    return { portfolio };
  }

  state = {
    error: undefined,
  };

  updatePortfolio = (portfolioData, actions) => {
    actions.setSubmitting(true);

    updatePortfolio(portfolioData)
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
    // alert(JSON.stringify(portfolioData, null, 2));
  };

  render() {
    const { error } = this.state;
    const { portfolio } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Update Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                initialValues={portfolio}
                error={error}
                onSubmit={this.updatePortfolio}
              />
            </Col>{" "}
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default withAuth("siteOwner")(PortfolioEdit);
