import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FanMadeline from "./pages/FanMadeline";
import FanHelydia from "./pages/FanHelydia";
import FanQueen from "./pages/FanQueen";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fanmadeline" element={<FanMadeline />} />
        <Route path="/fanHelydia" element={<FanHelydia />} />
        <Route path="/archeeQueen" element={<FanQueen />} />
        {/* on peut ajouter d'autres routes plus tard */}
      </Routes>
      <Footer />
    </Router>
  

  )
}

export default App;
