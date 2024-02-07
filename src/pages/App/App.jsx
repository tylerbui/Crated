import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Cart from '../Cart/cart';
import Product from '../Product/Product';
import NavBar from '../../components/NavBar/NavBar';
import CartHistory from '../CartHistory/CartHistory';

export default function App() {
  //everytime you refresh the page its right here where you check the localstorage in your dev tools 
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/products" element={<Product />} />
              <Route path="/carts" element={<Cart user={user} setUser={setUser}/>} />
              <Route path="/cartHistory" element={<CartHistory />} />
              <Route path="/*" element={<Navigate to="/cartHistory" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
