import "../css/FooterStyle.css";
import React, { useState } from "react";

const Footer = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "WanderLust",
      content: [
        "Our Policy",
        "Vison & Mission",
        "Privacy and Use of data",
        "Get in Touch",
      ],
      isVisible: false,
    },
    {
      id: 2,
      title: "FAQ",
      content: [
        "Confirmation Mail",
        "Promo Destinations ",
        "Cancel my Trip",
        "Add travellers",
      ],
      isVisible: false,
    },
    {
      id: 3,
      title: "Our Community",
      content: [
        "Learn more about my travel",
        "Feedback of Wanderlusters",
        "Discord Group",
        "Socials",
      ],
      isVisible: false,
    },
    {
      id: 4,
      title: "My Account",
      content: ["Reductions", "My last trips", "Followers", "Favourites"],
      isVisible: false,
    },
  ]);

  const handleArticleClick = (id) => {
    const updatedArticles = articles.map((article) =>
      article.id === id
        ? { ...article, isVisible: !article.isVisible }
        : article
    );
    setArticles(updatedArticles);
  };

  return (
    <div className="footer">
      <div className="payment-methods">
        <img
          className="payments"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
        ></img>
        <img
          className="payments"
          alt=""
          src="https://static-00.iconduck.com/assets.00/amex-icon-512x329-615em17t.png"
        ></img>
        <img
          className="payments"
          alt=""
          src="https://static-00.iconduck.com/assets.00/mastercard-icon-512x307-fhmp0pqx.png"
        ></img>
        <img
          className="payments"
          alt=""
          src="https://static-00.iconduck.com/assets.00/paypal-icon-512x329-iizij0nu.png"
        ></img>
        <img
          className="payments"
          alt=""
          src="https://static-00.iconduck.com/assets.00/maestro-icon-512x329-fxtf8tjr.png"
        ></img>
      </div>
      <div className="articles">
        {articles.map((article) => (
          <div className="single-article" key={article.id}>
            <i
              className="fa-solid fa-angle-down"
              onClick={() => handleArticleClick(article.id)}
            ></i>
            <div className="text-articles">
              <h3>{article.title}</h3>
              <div
                className={
                  article.isVisible ? "faq-article" : "faq-article hidden"
                }
              >
                {article.content.map((content, index) => (
                  <p key={index} className="faq-article">
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
