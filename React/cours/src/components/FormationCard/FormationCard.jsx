import React from 'react';
import CarScale from '../CardScaleComponent/CardScale';
import "./FormationCard.css";

const FormationCard = ({ addToCart, formation }) => {
    return (
        <div className='card'>
            <div className='card-title'>
                {formation.name}
            </div>
            <div>
                <img className="logo-image" src={formation.logo} alt={`logo ${formation.name}`} onClick={() => {
                    console.log(formation.name);
                }}></img>
            </div>
            <div className='category'>
                <span>Categorie : <b>{formation.category}</b></span>
            </div>
            <div className='difficulte'>
                <span className='diff-label'>Difficulté : {formation.difficulte}</span>
                <CarScale scaleValue={formation.difficulte} />
            </div>
            <div className='price'>
                <span>Prix : <b>{formation.price}€</b></span>
            </div>
            <button onClick={() => { addToCart(formation.name, formation.price); }}>Ajouter au panier</button>
        </div>
    );
};

export default FormationCard;