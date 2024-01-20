import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext)
  

  const handleLogOut = () =>{
    logOut()
    console.log('okkkk')
  }


  const [carts , setCarts] = useState([])


  useEffect(() => {
      fetch('https://brand-shop-server-a2tw.onrender.com/cart')
      .then(res => res.json())
      .then(data => setCarts(data))
  },[carts])


    const navLinks = <>

        <li className="mx-1"><NavLink to={'/'}>Home</NavLink></li>
        <li className="mx-1"><NavLink to={'/addProduct'}>Add Product</NavLink></li>
        <li className="mx-1"><NavLink to={'/addBrands'}>Add Brands</NavLink></li>
        <li className="mx-1"><NavLink to={'/login'}>Login</NavLink></li>
        <li className="mx-1"><NavLink to={'/signup'}>Sign Up</NavLink></li>
        <li className="flex relative w-28 mx-1"><NavLink to={'/cart'}>My Cart</NavLink>
        <div className="indicator absolute -right-0 hover:bg-transparent">
        <FaShoppingCart className=" text-xl" />
          <span className="badge badge-sm indicator-item">{carts.length}</span>
        </div>
        </li>
        
    </>
    const [toggle, setToggle] = useState(false)


    const handleToggle = () => {
        // if(toggle){
            
        // }
    }


  return (
    <div className="bg-slate-200 z-50 sticky top-0 w-full">
      <div className='navbar  container mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                {
                    navLinks
                }
                <div className='navbar-end'>
                <button>{user?.email}</button>
                {
                  user ? <button className='btn mx-3' onClick={handleLogOut}>LogOut</button>: <Link to={'/login'} className="btn mx-3">Login</Link>
                }



          <input type="checkbox" value="synthwave" onClick={() => handleToggle(setToggle(!toggle))} className="toggle theme-controller"/>
        </div>
            </ul>
            
          </div>
          <a className='btn btn-ghost text-xl lg:flex hidden'>Brand <span className="text-red-400">Shop</span></a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 '>
            {
                navLinks
            }
          </ul>
        </div>
        <div className='navbar-end lg:flex hidden'>
        <button>{user?.email}</button>
        {
          user ? <button className='btn mx-3' onClick={handleLogOut}>LogOut</button>: <Link to={'/login'} className="btn mx-3">Login</Link>
        }



          <input type="checkbox" value="synthwave" onClick={() => handleToggle(setToggle(!toggle))} className="toggle theme-controller"/>
        </div>
        <a className='btn btn-ghost text-xl navbar-end lg:hidden'>daisyUI</a>
      </div>
    </div>
  )
}

export default NavBar
