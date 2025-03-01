import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "@/pages/About";
import CreateRestaurant from "@/pages/CreateRestaurant";
import EditRestaurant from "@/pages/EditRestaurant";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import RestaurantDetail from "@/pages/RestaurantDetail";
import Restaurants from "@/pages/Restaurants";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/restaurants"
          element={
            <>
              <Header />
              <Restaurants />
              <Footer />
            </>
          }
        />
        <Route
          path="/restaurants/create"
          element={
            <>
              <Header />
              <CreateRestaurant />
              <Footer />
            </>
          }
        />
        <Route
          path="/restaurants/:id"
          element={
            <>
              <Header />
              <RestaurantDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/restaurants/:id/edit"
          element={
            <>
              <Header />
              <EditRestaurant />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
