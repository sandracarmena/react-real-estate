import Footer from "../components/Footer";
import HeroMid from "../components/HeroMid";
import Navbar from "../components/Navbar";
import PromoIt from "../components/PromoIt";

function Service() {
  const promoData1 = [
    {
      id: 1,
      singleBox:
        "https://images.pexels.com/photos/4125993/pexels-photo-4125993.jpeg?auto=compress&cs=tinysrgb&w=600",
      desTitle: "Discover Rome",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$100",
    },
    {
      id: 2,
      singleBox:
        "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600",
      desTitle: "Discover Paris",
      paragraphDes:
        "It was the most beautiful inner travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$190",
    },
    {
      id: 3,
      singleBox:
        "https://images.pexels.com/photos/2249780/pexels-photo-2249780.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desTitle: "Discover Turin",
      paragraphDes:
        "It was the most wander beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$170",
    },
    {
      id: 4,
      singleBox:
        "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=600",
      desTitle: "Discover London",
      paragraphDes:
        "It was the most handsome travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$250",
    },
    {
      id: 5,
      singleBox:
        "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desTitle: "Discover Napoli",
      paragraphDes:
        "It was the most beautiful journey i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$160",
    },
    {
      id: 6,
      singleBox:
        "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=600",
      desTitle: "Discover Toulouse",
      paragraphDes:
        "It was the most beautiful travel i've done in my entire life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$150",
    },
  ];

  const promoData2 = [
    {
      id: 1,
      singleBox:
        "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desTitle: "Discover London",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$200",
    },
    {
      id: 2,
      singleBox:
        "https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=800",
      desTitle: "Discover Tokyo",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$250",
    },
    {
      id: 3,
      singleBox:
        "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
      desTitle: "Discover Paris",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$150",
    },
    {
      id: 4,
      singleBox:
        "https://images.pexels.com/photos/5857863/pexels-photo-5857863.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desTitle: "Discover Paris",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$150",
    },
    {
      id: 5,
      singleBox:
        "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
      desTitle: "Discover Paris",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$150",
    },
    {
      id: 6,
      singleBox:
        "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=600",
      desTitle: "Discover Paris",
      paragraphDes:
        "It was the most beautiful travel i've done in my life. I will definitively redo it if i have the opportunity. I really recommend Wander Lust.",
      btnPromo: "Learn more",
      price: "$150",
    },
  ];
  return (
    <div>
      <Navbar />
      <HeroMid
        className="hero-mid"
        heroImg="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Our Services"
      />
      <PromoIt data={promoData1} />
      <PromoIt data={promoData2} />
      <Footer />
    </div>
  );
}

export default Service;
