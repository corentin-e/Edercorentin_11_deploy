import "./footer.css";
import FooterIcon from "../../assets/copyright-regular-24.png";
import FooterLogo from "../../assets/Logo_kasa_footer.JPG";

const Footer = () => (
  <div className="footer_background">
      <img src={FooterLogo} className="footer_logo" alt="logo_footer" />
      <div className="footer_text_items_position">
        <img src={FooterIcon} className="footer_icon" alt="icon_footer" />
        <label>2020 Kasa. All rights reserved</label>  
      </div>
      
  </div>
);

export default Footer;
