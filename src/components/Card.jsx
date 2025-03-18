import React from 'react';
import './Card.css';
import productImageDesktop from '../assets/image-product-desktop.jpg';
import productImageMobile from '../assets/image-product-mobile.jpg';
import iconBuy from '../assets/icon-cart.svg'

export function Card() {
    return (
        <main>
            <img src={productImageMobile} alt="Perfume" className="img-mobile" />
            <img src={productImageDesktop} className="img-desktop" alt="Gabrielle Essence Eau De Parfum"/>
            <div className="card-content">
                <p className="tag">Perfume</p>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p className="description">Uma interpretação floral, solar e voluptuosa composta por Olivier Polge, Perfumista-Criador da Maison CHANEL.</p>
                <div className="price">
                    <p>R$149.99</p>
                    <p>R$169.99</p>
                </div>
                <button><img src={iconBuy} alt="Card Icon" /> adicionar ao carrinho</button>
            </div>
        </main>
    );
};