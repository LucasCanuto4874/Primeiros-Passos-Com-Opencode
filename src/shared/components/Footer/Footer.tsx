import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h3 className="footer__title">Gentle Beast</h3>
          <nav className="footer__nav">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/cart" className="footer__link">Cart</Link>
            <Link to="/faq" className="footer__link">FAQ</Link>
          </nav>
        </div>
        <p className="footer__copyright">© 2026 Gentle Beast. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;