import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './App.css';
import Banner from './components/BannerComponent/Banner';
import Footer from './components/FooterComponent/Footer';
import NavBar from './components/NavBarComponent/NavBar';

function App() {
  const [cart, updateCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Banner></Banner>
      <NavBar cart={cart} updateCart={updateCart}></NavBar>
      <Footer></Footer>
    </div>
  );
};

export default App;
