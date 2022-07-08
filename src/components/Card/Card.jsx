import { Link } from "react-router-dom";
import "./card.css";

const Card = ({title, image_source, id}) => (
    <Link to={`/housing/${id}`} className="card_background">
        <img className="card_image" src={image_source} alt="Housing_image"/>
        <div className="card_items_position">
            <label className="card_text_position">{title}</label>
        </div>
    </Link>

);

export default Card;
