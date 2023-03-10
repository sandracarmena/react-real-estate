import "../css/PromoStyle.css";
import { Component } from "react";

class PromoData extends Component {
  render() {
    return (
      <div className="promo-single">
        <div className="img-hotel">
          <img alt="" src={this.props.singleBox} />
        </div>

        <div className="promo-des">
          <h4>{this.props.desTitle}</h4>
          <p> {this.props.paragraphDes}</p>
          <button className="btn-promo"> {this.props.btnPromo} </button>
        </div>
        <div className="promo-price">{this.props.price}</div>
      </div>
    );
  }
}

export default PromoData;

/* <section className="promo-boxes">
        <div className="promo-single">
          <div className="img-hotel">
            <img
              alt=""
              src="https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>

          <div className="promo-des">
            <h4>Discover Rome </h4>
            <p>
              It was the most beautiful travel i've done in my life I will
              definitively redo it if i have the opportunity I really recommand
              Wander Lust
            </p>
            <button className="btn-promo"> Learn more </button>
          </div>
          <div className="promo-price">$100</div>
        </div>
      </section>*/
