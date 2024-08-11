import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import lwsLogo from './images/logo.png'
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartTotal from './components/Cart/CartTotal';

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  const handleCurrentPage = (page) => {
        setCurrentPage(page)
  }


  return (
  
    <Provider store={store}>
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar" >
        <a role="button" onClick={() => handleCurrentPage('home')}>
          {/* <img src={lwsLogo} alt="LWS" className="max-w-[140px]" /> */}
        </a>

        <div className="flex gap-4">
          <a className="navHome" role="button" id="lws-home" onClick={() => handleCurrentPage('home')}> Home </a>
          <a className="navCart" role="button" id="lws-cart" onClick={() => handleCurrentPage('cart')}>
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <CartTotal></CartTotal>
          </a>
        </div>
      </div>
    </nav>
   
    {currentPage === 'home' ? <Home></Home> : <Cart></Cart>}


    </Provider>
  );
}

export default App;
