import React from "react";
import { Editor } from "slate-react";
import { Value } from "slate";

//Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A line of text in a paragraph.",
              },
            ],
          },
        ],
      },
    ],
  },
});

//Define React component render for our code blocks.
function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

//Define our app...
export default class SlateEditor extends React.Component {
  //Set the initial value when the app is first constructed.
  state = {
    value: initialValue,
    isLoaded: false,
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  //On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value });
  };

  onKeyDown = (event, editor, next) => {
    //Return with no changes if it's not the "*" key with ctrl pressed.
    if (event.key !== "x" || event.ctrlKey) return next();

    //Prevent the "*" from beign inserted by defalut.
    event.preventDefault();

    //Determine whether any of the current selected blocks are code blocks.
    const isCode = editor.value.blocks.some((block) => block.type == "code");

    //Toggle the block type depending on 'isCode'.
    editor.setBlocks(isCode ? "paragraph" : "code");
  };

  // Add a 'renderNode' method to render a "CodeNode" for code blocks.
  renderNode = (props, editor, next) => {
    switch (props.node.type) {
      case "code":
        return <CodeNode {...props} />;
      case "paragraph":
        return <p {...props.attributes}>{props.children}</p>;
      default:
        return next();
    }
  };
  //Render the editor.
  render() {
    const { isLoaded } = this.state;
    return (
      <React.Fragment>
        <pre>
          <code>dfjdkfljsdkl</code>
        </pre>
        {isLoaded && (
          <Editor
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderNode={this.renderNode}
          />
        )}
      </React.Fragment>
    );
  }
}
