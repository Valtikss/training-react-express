import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import RestaurantPage from './pages/RestaurantPage';
import CreateRestaurant from './pages/CreateRestaurant';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/create" element={<CreateRestaurant />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
