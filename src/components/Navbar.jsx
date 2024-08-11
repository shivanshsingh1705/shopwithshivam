import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../redux/Slices/themeSlice";


const Navbar = () => {

  const {cart} = useSelector((state) => state);
  const lightMode = useSelector((state) => state.theme.lightMode);
  const dispatch = useDispatch();

console.log(lightMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5" flex>
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
                 <p>Switch to</p>
                 <button onClick={handleThemeToggle}
                 className="w-20 h-10 text-white font-semibold uppercase text-center leading-40 transition duration-300 hover:bg-green-700 hover:text-black rounded-full">
                 {lightMode ? ' Dark' : 'Light'}
                 </button>
                 
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
