import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useSelector } from "react-redux";


const App = () => {
  const lightMode = useSelector((state) => state.theme.lightMode);
  return (
  <div  className ={` ${lightMode ? 'bg-white' : 'bg-gray-900'}`}>
        <div className="bg-gray-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App;
