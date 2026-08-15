import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
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
