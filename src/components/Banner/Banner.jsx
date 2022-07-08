import "./banner.css";


const Banner = ({image, textWelcome}) => (
  <div className="banner_background">
    <img src={image} className="banner_image" alt="banner_image" />
    <div className="banner_items_position">
        <label className="banner_item_position">{textWelcome}</label>
    </div>
  </div>
);

export default Banner;
