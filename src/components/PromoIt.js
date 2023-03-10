import "../css/PromoStyle.css";
import PromoData from "../data/PromoData";

const PromoIt = ({ data }) => {
  return (
    <div className="promo">
      <section className="promo-boxes">
        {data.map((item) => (
          <PromoData
            key={item.id}
            singleBox={item.singleBox}
            desTitle={item.desTitle}
            paragraphDes={item.paragraphDes}
            btnPromo={item.btnPromo}
            price={item.price}
          />
        ))}
      </section>
    </div>
  );
};

export default PromoIt;

/*import "../css/PromoStyle.css";
import PromoData from "../data/PromoData";
const PromoIt = () => {
  return (
    <div className="promo">
      <section className="promo-boxes">
        <PromoData
          singleBox="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
          singleBox="https://images.pexels.com/photos/5857863/pexels-photo-5857863.jpeg?auto=compress&cs=tinysrgb&w=1600"
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

export default PromoIt;*/
