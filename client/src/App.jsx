import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantsList from './components/RestaurantsList';


function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Bienvenue sur notre application de restaurants</h1>
            <RestaurantsList />
        </div>
        <Footer />
    </Router>
  );
}

export default App;
