import "../css/AboutUsStyle.css";
import "../css/AboutUsStyle.css";
import React, { Component } from "react";

class AboutUsData extends Component {
  render() {
    return (
      <div>
        <div className="about-us">
          <div className="about-text">
            <h2>{this.props.subtitle}</h2>
            <p> {this.props.paragraph} </p>
          </div>
          <div className="abt-img">
            <img alt="" src={this.props.AboutImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsData;
