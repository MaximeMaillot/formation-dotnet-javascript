import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from '../../views/HomeView/Home';
import About from '../../views/AboutView/About';
import "./NavBar.css";
import FormationList from '../../views/FormationList/FormationList';
import Formulaire from '../../views/FormulaireView/Formulaire';

const NavBar = ({ cart, updateCart }) => {
    return (
        <div>
            <BrowserRouter>
                <div id="navbar">
                    <button className='bouton'>
                        <Link to="/" >Home</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/cours">Cours</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/form">Formulaire</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/about">About</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/form' element={<Formulaire />}></Route>
                    <Route path='/cours' element={<FormationList cart={cart} updateCart={updateCart} />}></Route>
                    <Route path='/*' element={<Home />}></Route>
                </Routes>
                <div className='container'>
                    <Outlet />
                </div>
            </BrowserRouter>
        </div >
    );
};

export default NavBar;