import React from "react";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

const App = () => {
  return(
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' elements={<Home/>} />
        <Route path='/cart' elements={<Cart/>} />
      </Routes>
    </div>

  )
};

export default App;
