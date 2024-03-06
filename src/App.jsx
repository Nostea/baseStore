import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Detail from "./pages/Detail/Detail";
import Test from "./components/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* Name nach dem : ist der key im Object was wir uns rausziehen könnne  von useParams*/}
          {/* Wie der Name nach dem : heißt ist uns überlassen (sollte sinn machen) */}
          {/* : muss sein, damit sagen wir es kommt nun eine dynamische route */}
          <Route path="/products/details/:id" element={<Detail />} />
          <Route path="/products/details/:id/:foo/:bar" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
