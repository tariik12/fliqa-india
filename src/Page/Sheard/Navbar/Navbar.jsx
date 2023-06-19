
import {  Link } from "react-router-dom";
// import { FaBahai } from "react-icons/fa";
import fliqaNavLogo from '../../../assets/fliqaNavLogo.png'
// import { useContext } from "react";
// import { AuthContext } from "../../../../provider/AuthProvider";
// import { toast } from "react-toastify";


const Navbar = () => {

   


  const navLinkItem =
    <>
    <Link className="me-8 font-bold " to='/'>Home</Link>
    <Link className="me-8 font-bold " to="/">Service</Link>
    <Link className="me-8 font-bold " to='/'>Portfolio</Link>
    <Link className="me-8 font-bold " to='/'>Community</Link>
    <Link className="me-8 font-bold " to='/'>blog</Link>
</>

    return (
        <div className="navbar bg-[#000000]  text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navLinkItem}
            </ul>
          </div>
          <img className="w-24 h-10 ms-5 my-5" src={fliqaNavLogo} alt="" />
        <div className="navbar-center hidden lg:flex ms-10">
          <ul className="menu menu-horizontal px-1">
            {navLinkItem}
          </ul>
        </div>
        </div>
        <div className="navbar-end">
        <Link className="me-4 font-bold " to='/'>Login</Link>
        <Link className="me-4 font-bold " to='/'>SingIn</Link>
        </div>
      </div>
      );
};

      export default Navbar;