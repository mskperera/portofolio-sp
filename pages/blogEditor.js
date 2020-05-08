import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";

import SlateEditor from "../components/slate-editor/Editor";

class BlogEditor extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-pate" title="Write you story">
          <SlateEditor />
        </BasePage>
      </BaseLayout>
    );
  }
}
export default withAuth("siteOwner")(BlogEditor);
