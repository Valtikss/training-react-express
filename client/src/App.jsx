import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantDetail from './pages/RestaurantDetail';
import AddRestaurant from './pages/AddRestaurant';
import EditRestaurant from './pages/EditRestaurant';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetail />} />
            <Route path="/add" element={<AddRestaurant />} />
            <Route path="/edit/:id" element={<EditRestaurant />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
