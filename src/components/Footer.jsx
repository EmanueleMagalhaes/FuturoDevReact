import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <p className="footer-text">© 2023 Energia Solar 365. Todos os direitos reservados.</p>
        
        <div className="social-icons">
          
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#E4405F" />
        </a>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp size={24} color="#25D366" /> 
  </a>
        </div>
        <p className="footer-text">Desenvolvido por Emanuele</p>
      </div>

    </footer>
  );
}

export default Footer;