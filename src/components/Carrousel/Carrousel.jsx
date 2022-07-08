import "./carrousel.css";
import ArrowRightIcon from "../../assets/icons/arrowRight.png";
import ArrowLeftIcon from "../../assets/icons/arrowLeft.png";
import {useState} from "react";



const Carrousel = ({pictures}) => {
    const [imgPos, setImgPos] = useState(0)

    const next = () => {
        if(imgPos < pictures.length - 1) {
            setImgPos(imgPos + 1)
        } else {
            setImgPos(0)
        }
    }

    const prev = () => {
        if(imgPos > 0) {
            setImgPos(imgPos - 1)
        } else {
            setImgPos(pictures.length - 1)
        }
    }

    return (
        <div className="carrousel_background">
            <img type="jpg" src={pictures[imgPos]} className="carrousel_image" alt="housing_image" />
            <div className="carrousel_items_position">
                <div className="carrousel_position_buttons">
                    <div className="carrousel_button_previous" onClick={prev}>
                        <img src={ArrowLeftIcon} alt="arrow left" />
                    </div>
                    <div className="carrousel_button_next" onClick={next}> 
                        <img src={ArrowRightIcon} alt="arrow right" />
                    </div>
                </div>
                <div className="carrousel_info_position_housing_image">{imgPos+1}/{pictures.length}</div>
            </div>
        </div>
    );
}



export default Carrousel;
