import { useState, useRef, useEffect } from 'react';
import './CartQuantityDropdown.css';

interface CartQuantityDropdownProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

function CartQuantityDropdown({
  value,
  onChange,
  min = 1,
  max = 5,
}: CartQuantityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: number) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="cart-quantity-dropdown" ref={dropdownRef}>
      <button
        className="cart-quantity-dropdown__trigger"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="cart-quantity-dropdown__value">{value}</span>
        <svg
          className={`cart-quantity-dropdown__arrow ${isOpen ? 'cart-quantity-dropdown__arrow--open' : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={`cart-quantity-dropdown__menu ${isOpen ? 'cart-quantity-dropdown__menu--open' : ''}`}>
        {options.map((option) => (
          <button
            key={option}
            className={`cart-quantity-dropdown__option ${option === value ? 'cart-quantity-dropdown__option--selected' : ''}`}
            onClick={() => handleSelect(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CartQuantityDropdown;
