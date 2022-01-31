import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LibrosPage from "./pages/LibrosPage";
import Footer from "./components/Footer/Footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="libros">
            <Route index element={<LibrosPage />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="products" element={<ProductsPage />} />
          <Route path='*' element={<NotFoundPage />}/>
          </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
);
}

export default App;
