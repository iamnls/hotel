import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderConfirmation from './pages/OrderConfirmation';
import Navbar from './components/Navbar';
import OrderManagement from './components/OrderManagement';
import MenuManagement from './components/MenuManagement';
import OrderHistory from './components/OrderHistory';
import Settings from './components/Settings';
import Signup from './pages/Signup';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/menu/table/:tableId" element={<MenuPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/dashboard" element={
          <>
            <OrderManagement />
            <MenuManagement />
            <OrderHistory />
            <Settings />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;