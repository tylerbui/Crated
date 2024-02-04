import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Order from '../Order/order';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Product from '../Product/Product';
import NavBar from '../../components/NavBar/NavBar';

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
              <Route path="/product" element={<Product />} />
              <Route path="/orders/new" element={<Order user={user} setUser={setUser}/>} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
