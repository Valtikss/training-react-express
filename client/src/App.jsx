import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; // Nouvelle page
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantsList from './components/RestaurantsList';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/restaurants" element={<RestaurantsList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
