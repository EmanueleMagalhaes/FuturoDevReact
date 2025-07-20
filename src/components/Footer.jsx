import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <p className="footer-text">© 2023 Energia Solar 365. Todos os direitos reservados. - <a href="mailto:energiasolar365@energia.com">energiasolar365@energia.com</a></p>
        <p className="footer-text">CNPJ 12.345.678/0001-90 | Rua Bonita, 123 - Joinville - SC</p>

        <div className="social-icons">
          
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#E4405F" />
        </a>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp size={24} color="#25D366" /> 
  </a>
        </div>
        </div>


    </footer>
  );
}

export default Footer;