import { useEffect, useState } from "react";
import "../css/PromoStyle.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    singleBox:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Rome",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$100",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
];
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Promo = () => {
  const [numBoxes, setNumBoxes] = useState(3);
  const [boxWidth, setBoxWidth] = useState("32%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1090) {
        setNumBoxes(3);
        setBoxWidth("32%");
      } else if (window.innerWidth >= 700 && window.innerWidth < 1090) {
        setNumBoxes(2);
        setBoxWidth("48%");
      } else {
        setNumBoxes(1);
        setBoxWidth("80%");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="promo">
      <h1>Our Latest Promo</h1>
      <div className="slide-container">
        <Slide autoplay={false}>
          {chunk(slideImages, numBoxes).map((chunk, index) => (
            <div className="each-slide" key={index}>
              {chunk.map((slideImage, index) => (
                <div
                  key={index}
                  className="promo-single"
                  style={{ width: boxWidth }}
                >
                  <div className="img-hotel">
                    <img alt="" src={slideImage.singleBox} />
                  </div>

                  <div className="promo-des">
                    <h4>{slideImage.desTitle}</h4>
                    <p>{slideImage.paragraphDes}</p>
                    <button className="btn-promo">{slideImage.btnPromo}</button>
                  </div>

                  <div className="promo-price">{slideImage.price}</div>
                </div>
              ))}
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Promo;

/*import "../css/PromoStyle.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    singleBox:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Rome",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$100",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
  {
    singleBox:
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
    desTitle: "Discover Paris",
    paragraphDes:
      "It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust",
    btnPromo: "Learn more",
    price: "$200",
  },
];

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Promo = () => {
  return (
    <div className="promo">
      <h1>Our Latest Promo</h1>
      <div className="slide-container">
        <Slide autoplay={false}>
          {chunk(slideImages, window.innerWidth < 850 ? 2 : 3).map(
            (chunk, index) => (
              <div className="each-slide" key={index}>
                {chunk.map((slideImage, index) => (
                  <div key={index} className="promo-single">
                    <div className="img-hotel">
                      <img alt="" src={slideImage.singleBox} />
                    </div>

                    <div className="promo-des">
                      <h4>{slideImage.desTitle}</h4>
                      <p>{slideImage.paragraphDes}</p>
                      <button className="btn-promo">
                        {slideImage.btnPromo}
                      </button>
                    </div>

                    <div className="promo-price">{slideImage.price}</div>
                  </div>
                ))}
              </div>
            )
          )}
        </Slide>
      </div>
    </div>
  );
};

export default Promo;*/
/* <Slide easing="ease">*/
/* const Promo = () => {
  return (
    <div className="promo">
      <h1> Our Latest Promo </h1>
      <section className="promo-boxes">
        <PromoData
          singleBox="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
          desTitle="Discover Rome "
          paragraphDes=" It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust "
          btnPromo="Learn more"
          price="$100"
        />
        <PromoData
          singleBox="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=800"
          desTitle="Discover Rome "
          paragraphDes=" It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust "
          btnPromo="Learn more"
          price="$100"
        />
        <PromoData
          singleBox="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
          desTitle="Discover Rome "
          paragraphDes=" It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust "
          btnPromo="Learn more"
          price="$100"
        />
        <PromoData
          singleBox="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=800"
          desTitle="Discover Rome "
          paragraphDes=" It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust "
          btnPromo="Learn more"
          price="$100"
        />
        <PromoData
          singleBox="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800"
          desTitle="Discover Rome "
          paragraphDes=" It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust "
          btnPromo="Learn more"
          price="$100"
        />
        <PromoData
          singleBox="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800"
          desTitle="Discover Rome "
          paragraphDes=" It was the most beautiful travel i've done in my life I will definitively redo it if i have the opportunity I really recommand Wander Lust "
          btnPromo="Learn more"
          price="$100"
        />
      </section>
    </div>
  );
};

export default Promo;*/
