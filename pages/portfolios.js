import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Col, Row, Button } from "reactstrap";

import { getPortfolios, deletePortfolio } from "../actions";
import { Router } from "../routes";
import PortfolioCard from "../components/portfolios/PortfolioCard";

class Portofolios extends React.Component {
  static async getInitialProps() {
    //let portofolios = [];

    // try {
    //   const res = await axios.get("http://localhost:3000/api/v1/portfolios");
    //   portofolios = res.data;
    // } catch (error) {
    //   console.log(error);
    // }

    // return { portofolios };

    let portofolios = [];
    try {
      portofolios = await getPortfolios();
    } catch (err) {
      console.error(err);
    }
    return { portofolios };
  }
  navigatetoEdit(portfolioId, e) {
    e.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`);
  }
  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConfirm = confirm(
      "Are you sure you want to delete this portfolio???"
    );
    if (isConfirm) {
      this.delPortfolio(portfolioId);
    }
  }

  delPortfolio = (portfolioId) => {
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute("/portfolios");
      })
      .catch((err) => console.error(err));
  };

  renderPortofolios(portofolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return portofolios.map((p, index) => (
      <Col md="4" key={p._id}>
        <PortfolioCard p={p}>
          {isAuthenticated && isSiteOwner && (
            <React.Fragment>
              <Button
                color="warning"
                onClick={(e) => this.navigatetoEdit(p._id, e)}
              >
                Edit
              </Button>{" "}
              <Button
                color="danger"
                onClick={(e) => this.displayDeleteWarning(p._id, e)}
              >
                Delete
              </Button>
            </React.Fragment>
          )}
        </PortfolioCard>
      </Col>

      // <li key={p.id}>
      //   <Link as={`/portofolio/${p.id}`} href="/portofolio/[id]">
      //     <a> {p.title}</a>
      //   </Link>
      // </li>
    ));
  }

  render() {
    const { portofolios, req } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout title="SP - Learn About My Experience" {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          {isAuthenticated && isSiteOwner && (
            <Button
              color="success"
              className="create-port-btn"
              onClick={() => Router.pushRoute("/portfolios/new")}
            >
              Create Portfolio
            </Button>
          )}
          <Row>{this.renderPortofolios(portofolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default Portofolios;
