import FeedbackData from "../data/FeedbackData";
const Feedback = () => {
  return (
    <div className="feedback">
      <h1>Our Wanderluster's Feedbacks</h1>
      <p>Learn more about the feedbacks of our Wanderlusters</p>

      <div className="feedback-boxes">
        <FeedbackData
          feedbackTitle="My journey in Island"
          image="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=800"
          feedbackText="It was the most beautiful travel i've done in my life I will
    definitively redo it if i have the opportunity I really
    recommand Wander Lust"
        />
        <FeedbackData
          feedbackTitle="My journey at Copenhagen"
          image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
          feedbackText="It was the most beautiful travel i've done in my life I will
    definitively redo it if i have the opportunity I really
    recommand Wander Lust"
        />
        <FeedbackData
          feedbackTitle="My journey in Morocco"
          image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
          feedbackText="It was the most beautiful travel i've done in my life I will
    definitively redo it if i have the opportunity I really
    recommand Wander Lust"
        />
        <FeedbackData
          feedbackTitle="My journey at Milano"
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
          feedbackText="It was the most beautiful travel i've done in my life I will
    definitively redo it if i have the opportunity I really
    recommand Wander Lust"
        />
        <FeedbackData
          feedbackTitle="My journey in Greece"
          image="https://images.pexels.com/photos/302355/pexels-photo-302355.jpeg?auto=compress&cs=tinysrgb&w=300"
          feedbackText="It was the most beautiful travel i've done in my life I will
    definitively redo it if i have the opportunity I really
    recommand Wander Lust"
        />
        <FeedbackData
          feedbackTitle="My journey at Zanzibar"
          image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
          feedbackText="It was the most beautiful travel i've done in my life I will
    definitively redo it if i have the opportunity I really
    recommand Wander Lust"
        />
      </div>
    </div>
  );
};

export default Feedback;
