import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Feedback from "../components/Feedback";
import Promo from "../components/PromoCaroussel";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero"
        heroImg="https://images.pexels.com/photos/931911/pexels-photo-931911.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="See the World, Discover Yourself"
        text="Choose Your Destination"
        buttonText="Your Travel Journey"
        btnClassName="show"
        url="/"
      />
      <Destination />
      <Feedback />
      <Promo />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
