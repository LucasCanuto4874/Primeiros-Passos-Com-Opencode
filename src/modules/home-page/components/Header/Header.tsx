import { useState, useEffect } from 'react';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import './Header.css';

interface NavItem {
  label: string;
  subItems?: string[];
}

const navLinks: NavItem[] = [
  {
    label: 'Sunglasses',
    subItems: ['Aviator', 'Wayfarer', 'Round', 'Cat Eye', 'Sport'],
  },
  {
    label: 'Glasses',
    subItems: ['Classic', 'Modern', 'Minimalist', 'Bold'],
  },
  {
    label: 'Collections',
    subItems: ['Midnight Savage', 'Urban Beast', 'Gentle Force', 'Wild Elegance', 'Shadow Vision', 'Pure Instinct'],
  },
  {
    label: 'Visions Tech',
    subItems: ['Blue Light', 'Photochromic', 'Polarized', 'Progressive'],
  },
  {
    label: 'Find Us',
    subItems: ['Stores', 'Online Partners', 'Contact'],
  },
  {
    label: 'The Beast',
    subItems: ['Our Story', 'Sustainability', 'Careers'],
  },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
        {navLinks.map((item) => (
          <div
            key={item.label}
            className="header__nav-item"
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={`#${item.label.toLowerCase().replace(/\s/g, '-')}`}
              className="header__link"
            >
              {item.label}
            </a>
            {item.subItems && (
              <div className={`header__dropdown ${activeDropdown === item.label ? 'header__dropdown--active' : ''}`}>
                {item.subItems.map((subItem, index) => (
                  <a
                    key={subItem}
                    href={`#${subItem.toLowerCase().replace(/\s/g, '-')}`}
                    className="header__dropdown-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="header__brand">Gentle Beast</div>

      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Search">
          <FiSearch size={20} />
        </button>
        <button className="header__icon-btn" aria-label="My account">
          <FiUser size={20} />
        </button>
        <button className="header__icon-btn" aria-label="Shopping bag">
          <FiShoppingBag size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
