import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";
import { Row, Col } from "reactstrap";

class About extends Component {
  render() {
    return (
      // title should be under 70 characters
      <BaseLayout title="SP - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Susantha Perera and I am an experienced software
                  engineer and freelance developer.
                </p>
                <p>
                  I have a Master's degree in Artificial Intelligence and
                  serveral years of experience working on a wide range of
                  technologies and projects from C++ development for ultrasound
                  deviece to modern mobile and web applications in React and
                  Angular.
                </p>
                <p>
                  Throughout my career, I have acquired advanced technical
                  knowlage and the ability to explain programming topics clearly
                  and in detail to a broad audience. I invite you to take my
                  course, where I have put a lot of effort to explain web and
                  software engineering concept in a detailed, hands-on and
                  understandable way.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default About;
