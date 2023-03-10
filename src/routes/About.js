import AboutUs from "../components/AboutUs";
import HeroMid from "../components/HeroMid";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <HeroMid
        className="hero-mid"
        heroImg="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="About Travel Junkies"
      />
      <AboutUs />
    </div>
  );
}

export default About;
