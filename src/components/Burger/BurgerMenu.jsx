import React, { useState } from "react";
import "./BurgerMenu.module.scss";

export default function BurgerMenu() {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
};

    return (
    <>
    
    <div className="burger-menu">
      <button className="burger-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Shop</a></li>
          <li><a href="/products">On Sale</a></li>
          <li><a href="/about">New Arrivals</a></li>
          <li><a href="/contact">Brands</a></li>
        </ul>
      </nav>
    </div>

    </>
    )
}