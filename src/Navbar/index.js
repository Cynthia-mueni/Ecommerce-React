import "./index.css";
import j4 from "../Image/j4.jpg";
import brown from "../Image/brown.jpg"
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h4>Bert'ooz</h4>
        <div className="navbar">
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">KIDS</a>
          <a href="#">SALE</a>
        </div>
      </div>
      <div></div>
      <img id="shoe" src={j4} />
      <div>
      <img src={brown} />
      </div>
      <FiShoppingCart />
    </>
  );
};
export default Navbar;
