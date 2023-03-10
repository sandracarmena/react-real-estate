import "../css/NewsletterStyle.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <p>
        <span>Subscribe</span> to Wander Lust Newsletter
      </p>

      <input placeholder="E-mail Adress"></input>
      <button className="btn-news"> Subscribe</button>
    </div>
  );
};

export default Newsletter;
