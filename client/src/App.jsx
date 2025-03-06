import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantDetail from './pages/RestaurantDetail';
import AddRestaurant from './pages/AddRestaurant';
import EditRestaurant from './pages/EditRestaurant';
import Cart from './components/Cart';
import OrderPage from './pages/OrderPage';

function App() {

  return (
    <StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/edit/:id" element={<EditRestaurant />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <div className="container mx-auto p-5">
          <Cart />
        </div>
        <Footer />
      </Router>
    </StrictMode>
  );
}

export default App;
