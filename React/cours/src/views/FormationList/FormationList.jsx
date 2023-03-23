import React, { Fragment, useState } from 'react';
import "./FormationList.css";
import { coursList } from "../../datas/CoursList";
import FormationCard from '../../components/FormationCard/FormationCard';
import Category from '../../components/CategoryComponent/Category';
import Cart from '../../components/CartComponent/Cart';

const FormationList = ({ cart, updateCart }) => {
    const [activeCategory, setActiveCategory] = useState('');

    const categoryList = coursList.reduce((acc = [], cours) => {
        return acc.includes(cours.category)
            ? acc
            : acc.concat(cours.category);
    }, []);
    // const categoryList = []
    // coursList.forEach((cours) => {
    //     if (!categoryList.includes(cours.category)) {
    //         categoryList.push(cours.category)
    //     }
    // })

    function addToCart(name, price) {
        const formationAdded = cart.find((cours) => {
            return cours.name === name;
        });
        if (formationAdded) {
            const filteredCart = cart.filter((cours) => {
                if (cours.name !== name) {
                    return cours;
                }
            });
            filteredCart.push({ name, price, amount: formationAdded.amount + 1 });
            updateCart(filteredCart);
            //updateCart(...filteredCart, { name, price, amount: formationAdded.amount + 1 });
        } else {
            cart.push({ name, price, amount: 1 });
            updateCart(cart);
            //updateCart(...cart, { name, price, amount: 1 });
        }
        alert(`La formation ${name} a été ajouté`);
    }

    return (
        <div className='formation-list'>
            <h2>Nos formations</h2>
            <div className='row'>
                <div className="col-7">
                    <Category
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        categoryList={categoryList}
                    />
                </div>
                <div className='col-1'>
                    <button className="btn btn-secondary" onClick={() => { setActiveCategory(""); }}>Reset</button>
                </div>
                <div className="col-4">
                    <Cart cart={cart} updateCart={updateCart} />
                </div>
            </div>
            <div className='card-container d-flex flex-wrap justify-content-around'>
                {coursList.map((cours, index) => {
                    if (!activeCategory || activeCategory === cours.category) {
                        return (
                            <Fragment key={index}>
                                <FormationCard addToCart={addToCart} formation={cours} />
                            </Fragment>
                        );
                    };
                    return null;
                })}
            </div>
        </div>
    );
};

export default FormationList;