import React from "react";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Button,
} from "reactstrap";
import PortfolioCardDetail from "./PortfolioCardDetail";

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("kkkkkj", this.state.isOpen);
  };

  render() {
    const { p, children } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <span onClick={() => this.handleToggle()}>
          <PortfolioCardDetail
    
            isOpen={isOpen}
            toggle={this.handleToggle}
            portofolio={p}
          />
          <Card className="portfolio-card">
            <CardHeader className="portfolio-card-header">
              {p.position}
            </CardHeader>
            <CardBody>
              <p className="portfolio-card-city"> {p.location}</p>
              <CardTitle className="portfolio-card-title">
                {p.company}
              </CardTitle>
              <CardText className="portfolio-card-text">
                {p.description}
              </CardText>
              <div className="readMore">{children}</div>
            </CardBody>
          </Card>
        </span>
      </React.Fragment>
    );
  }
}
