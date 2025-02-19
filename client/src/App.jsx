import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          <div className="text-center text-3xl text-blue-500 my-4">
            wsh mgl
          </div>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
              </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
