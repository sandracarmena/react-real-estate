import { Component } from "react";
import "../css/FeedbackStyle.css";

class FeedbackData extends Component {
  render() {
    return (
      <div className="single-box">
        <div className="feedback-title">
          <h4>{this.props.feedbackTitle}</h4>
        </div>
        <div className="feedback-des">
          <div className="feedback-image">
            <img alt="" src={this.props.image} />
          </div>

          <div className="feedback-text">
            <p>{this.props.feedbackText}</p>
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackData;
