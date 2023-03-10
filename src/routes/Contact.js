import Footer from "../components/Footer";
import HeroMid from "../components/HeroMid";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroMid
        className="hero-mid"
        heroImg="https://images.pexels.com/photos/4555341/pexels-photo-4555341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Contact Us"
      />
      <Footer />
    </div>
  );
}

export default Contact;
