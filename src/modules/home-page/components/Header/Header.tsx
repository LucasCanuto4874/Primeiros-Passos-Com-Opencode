import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import './Header.css';

const navLinks = [
  'Sunglasses',
  'Glasses',
  'Collections',
  'Visions Tech',
  'Find Us',
  'The Beast',
];

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="header__link">
            {link}
          </a>
        ))}
      </nav>

      <div className="header__brand">Gentle Beast</div>

      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Pesquisar">
          <FiSearch size={20} />
        </button>
        <button className="header__icon-btn" aria-label="Minha conta">
          <FiUser size={20} />
        </button>
        <button className="header__icon-btn" aria-label="Sacola de compras">
          <FiShoppingBag size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
