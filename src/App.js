import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Header';
import OurServices from './Components/OurServices/OurServices';
import Portfolio from './Components/portfolio/portfolio';
import Test from './Components/testimonials/testimonials';
import Products from './Components/products/products';
import Newletter from './Components/newsletter/newsletter';
import Footer from './Components/foder/foder';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <OurServices/>
      <Portfolio/>
      <Test/>
      <Products/>
      <Newletter/>
      <Footer/>
    </>
  );
}

export default App;
