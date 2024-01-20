import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4 ">
            <Link to={'/'} className="link link-hover">Home</Link>
            <Link to={'/addProduct'} className="link link-hover">Add Product</Link>
            <Link to={'/login'} className="link link-hover">Login</Link>
            <Link to={'/signUp'} className="link link-hover">Sign Up</Link>
        </nav> 
        <nav>
            <div className="grid grid-flow-col gap-4">
            <a href=""></a>
            <a href="https://www.facebook.com"><FaFacebook className="text-4xl text-red-500"/></a>
            <a href="https://www.youtube.com"><FaYoutube className="text-4xl text-red-500"/></a>
            <a href="https://www.instagram.com"><FaInstagram className="text-4xl text-red-500"/></a>
            </div>
        </nav> 
        <aside>
            <p>Copyright © 2023 - All right reserved by Brand Shop</p>
        </aside>
    </footer>
    </div>
  )
}

export default Footer
