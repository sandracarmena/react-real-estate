import "../css/AboutUsStyle.css";
import AboutUsData from "../data/AboutUsData";
import Feedback from "./Feedback";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us">
        <AboutUsData
          subtitle="Wander Lust Travel : Discover the World"
          paragraph=" At Wanderlust, we believe that travel has the power to transform both individuals and the world. Our company was founded on the idea that exploring new places, immersing oneself in different cultures, and meeting people from all walks of life can broaden our horizons, deepen our understanding of ourselves and others, and ultimately make the world a better place.

      We specialize in crafting personalized travel experiences that cater to our clients' unique interests, preferences, and budgets. Whether you're looking to go on a luxury safari in Africa, backpack through Southeast Asia, or unwind on a tropical beach in the Caribbean, our team of experienced travel experts will work with you to create a customized itinerary that fulfills your wanderlust dreams.
      
      We're also committed to responsible and sustainable travel practices. We strive to minimize our environmental impact, support local communities, and promote cultural preservation and understanding through our tours and partnerships with ethical suppliers."
          AboutImg="https://cdni.iconscout.com/illustration/premium/thumb/traveling-route-3862322-3213893.png"
        />
      </div>
      <Feedback />
      <Footer />
    </div>
  );
};

export default AboutUs;

/* <div className="about-us">
        <div className="about-text">
          <h2>Wander Lust Travel : Discover the World</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <img
          className="abt-img"
          alt=""
          src="https://cdni.iconscout.com/illustration/premium/thumb/traveling-route-3862322-3213893.png"
        ></img>
      </div> */
