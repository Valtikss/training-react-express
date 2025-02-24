import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantDetail from './pages/RestaurantDetail';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/restaurants/:id" element={<RestaurantDetail />} />
                  <Route path="/about" element={<AboutPage />} />
              </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;