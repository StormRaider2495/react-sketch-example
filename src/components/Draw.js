import React from "react";
import { SketchField, Tools } from "react-sketch";

export default class Draw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      initialX: 0,
      initialY: 0
    };
  }

  clearSignature = e => {
    this.drawRef.clear();
    console.log(this.drawRef);
  };
  handleSubmit = e => {
    e.preventDefault();

    const saved = this.drawRef.toDataURL();
    this.setState({
      saved
    });
  };
  render() {
    console.log(this.state.saved);
    return (
      <div>
        <SketchField
          ref={node => (this.drawRef = node)}
          width="100%"
          height="100%"
          style={{ border: "1px solid #333" }}
          tool={Tools.Pencil}
          lineColor="black"
          lineWidth={2}
        />
        <button onClick={this.handleSubmit}>Save</button>
        <button onClick={this.clearSignature}>Clear</button>
      </div>
    );
  }
}
