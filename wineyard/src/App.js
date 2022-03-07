import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Components/Homepage";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./Components/CartPage";
import { WishlistPage } from "./Components/WishlistPage";
import { Summary } from "./Components/Summary";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
