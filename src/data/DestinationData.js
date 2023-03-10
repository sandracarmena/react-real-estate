import "../css/DestinationStyle.css";
import React, { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.desTextTitle}</h2>
          <p>{this.props.desTextParagraph}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.image1}></img>
          <img alt="img" src={this.props.image2}></img>
        </div>
      </div>
    );
  }
}

export default DestinationData;
