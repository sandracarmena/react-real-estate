import "../css/HeroStyle.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Hero(props) {
  const slideImages = [
    {
      image:
        "https://images.pexels.com/photos/15031960/pexels-photo-15031960.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      image:
        "https://images.pexels.com/photos/2088282/pexels-photo-2088282.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      image:
        "https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      image:
        "https://images.pexels.com/photos/2112008/pexels-photo-2112008.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const slideProperties = {
    infinite: true,
    duration: 2000,
    indicators: false,
    arrows: false,
  };

  return (
    <section>
      <div className={props.className}>
        <Slide {...slideProperties}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="each-slide">
              <img alt="HeroImg" src={slideImage.image} />
            </div>
          ))}
        </Slide>
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
export default Hero;

/*import "../css/HeroStyle.css";

function Hero(props) {
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

export default Hero;*/
