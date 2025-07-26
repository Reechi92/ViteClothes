import React from "react"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import PromoSection from "./PromoSection";
import BurgerMenu from "./Burger/BurgerMenu";

export default function Header() {



    return (
        <>
        <div className="homePromo flex d-flex">
            <div className="container">
                <p>Sign up and get 20% off to your first order. <span style={{fontWeight: '600'}}>Sign Up Now</span></p>
                <img style={{width: 20, height: 20, cursor: 'pointer'}} src="img/closePromo.svg" alt="closeButton" />
            </div>
        </div>
        <div className="header">
            <div className="container">
                <BurgerMenu/>
                <img className="logo" style={{cursor: 'pointer'}} src="/img/logo/logo.svg" alt="logo" />
                <ul>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
                <div className="SearchWith">
                    <input style={{}} className="searchInput" type="text" placeholder="Search for products..."/>
                    <img className="imgInput" src="img/search.svg" alt="search" />
                </div>
                <img className="searchMobile" src="img/searchMobile.svg" alt="searchMobile" />
                <img style={{cursor: 'pointer'}} src="img/cart.svg" alt="cart" />
                <img style={{cursor: 'pointer'}} src="img/profile.svg" alt="profile" />
            </div>
        </div>
        <PromoSection></PromoSection>
        <div className="sponsors">
            <img className="versace"  src="../public/img/sponsors/versace.svg" alt="versace" />
            <img className="zara" src="../public/img/sponsors/zara.svg" alt="zara" />
            <img className="gucci"  src="../public/img/sponsors/gucci.svg" alt="gucci" />
            <div>
            <img className="prada "  src="../public/img/sponsors/prada.svg" alt="prada" />
            <img className="klein"  src="../public/img/sponsors/klein.svg" alt="klein" />
            </div>
        </div>
        </>
    )
}