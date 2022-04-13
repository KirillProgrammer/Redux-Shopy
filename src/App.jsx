import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './components/pages/main/Main';
import './app.scss';
import Cart from './components/pages/cart/Cart';
import Favorite from './components/pages/favorite/favorite';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
