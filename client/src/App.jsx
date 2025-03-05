import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import RestaurantPage from './pages/RestaurantPage';
import CommandePage from './pages/CommandePage';
import CreateRestaurant from './pages/CreateRestaurant';
import EditRestaurant from './pages/EditRestaurant';
import CreatePlat from './pages/CreatePlat';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants/:id" element={<RestaurantPage />} />
          <Route path="/create" element={<CreateRestaurant />} />
          <Route path="/restaurants/:id/edit" element={<EditRestaurant />} />
          <Route path="/plats/:restaurantId/create" element={<CreatePlat />} />
          <Route path="/commande" element={<CommandePage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App
