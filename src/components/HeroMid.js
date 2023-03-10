import "../css/HeroStyle.css";

function HeroMid(props) {
  return (
    <section>
      <div className={props.className}>
        <img alt="HerpImg" src={props.heroImg} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClassName}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroMid;
