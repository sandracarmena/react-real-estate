import DestinationData from "../data/DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Discover Our Best Destinations</h1>
      <p>Discover the Feedbacks of our Wanderlusters </p>

      <DestinationData
        className="first-des"
        desTextTitle="Visit of Rome Cathedra"
        desTextParagraph=" Also known as the Coliseum or Colosseo in 
        Italian, is an ancient amphitheater located in the center of Rome, 
        Italy. It is considered one of the greatest architectural and engineering 
        feats of the Roman Empire and remains a iconic symbol of the city."
        image1="https://images.pexels.com/photos/1853373/pexels-photo-1853373.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        image2="https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <DestinationData
        className="first-des-reverse"
        desTextTitle="Visit of Rome Cathedra"
        desTextParagraph=" Also known as the Coliseum or Colosseo in 
      Italian, is an ancient amphitheater located in the center of Rome, 
      Italy. It is considered one of the greatest architectural and engineering 
      feats of the Roman Empire and remains a iconic symbol of the city."
        image1="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800"
        image2="https://images.pexels.com/photos/625409/pexels-photo-625409.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </div>
  );
};

export default Destination;
