import {
  ShoppingCart,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className='fixed top-0 left-0 w-full bg-white backdrop-blur-md z-40 transition-all duration-300 border-b border-gray-300'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-1'>
            {/* Logo */}
            <Link to='/' className='flex items-center space-x-2'>
              <img
                src='https://res.cloudinary.com/dpt0bztac/image/upload/v1756927789/SparkZkart-logo_rzwcf3.png'
                alt='SparkZkart Logo'
                className='h-16 w-auto pl-2 sm:pl-10'
              />
            </Link>

            {/* Hamburger Button */}
            <button
              className='md:hidden text-gray-700 hover:text-black'
              onClick={toggleMenu}
            >
              <Menu size={28} />
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex md:items-center md:space-x-4'>
              <Link
                to={"/"}
                className='text-gray-700 w-20 text-center py-2 rounded-full hover:bg-gray-200 border border-gray-500/20 transition duration-300 ease-in-out'
              >
                Home
              </Link>

              {user && (
                <Link
                  to={"/cart"}
                  className='relative group text-gray-500 w-20 text-center py-2 rounded-full hover:bg-gray-200 border border-gray-500/20 transition duration-300 ease-in-out'
                >
                  <ShoppingCart
                    className='inline-block mr-1 group-hover:text-black'
                    size={20}
                  />
                  <span className='hidden sm:inline'>Cart</span>
                  {cart.length > 0 && (
                    <span
                      className='absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out'
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
              )}

              {isAdmin && (
                <Link
                  className='bg-orange-400 hover:bg-orange-600 text-gray-100 px-3 py-2 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
                  to={"/secret-dashboard"}
                >
                  <Lock className='inline-block mr-1' size={18} />
                  <span className='hidden sm:inline'>Dashboard</span>
                </Link>
              )}

              {user ? (
                <button
                  className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                  onClick={logout}
                >
                  <LogOut size={18} />
                  <span className='hidden sm:inline ml-2'>Log Out</span>
                </button>
              ) : (
                <>
                  <Link
                    to={"/signup"}
                    className='bg-orange-400 hover:bg-orange-600 text-gray-100 py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                  >
                    <UserPlus className='mr-2' size={18} />
                    Sign Up
                  </Link>
                  <Link
                    to={"/login"}
                    className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                  >
                    <LogIn className='mr-2' size={18} />
                    Login
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar + Backdrop */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className='fixed inset-0 bg-black bg-opacity-40 z-40'
            onClick={closeMenu}
          />

          {/* Drawer Menu */}
          <div className='fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg p-6 flex flex-col space-y-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold'>Menu</h2>
              <button
                className='text-gray-700 hover:text-black'
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>

            <Link to='/' className='text-gray-700 text-center py-2 rounded-full hover:bg-gray-200 border border-gray-500/20' onClick={closeMenu}>
              Home
            </Link>

            {user && (
              <Link
                to='/cart'
                className='text-gray-700 text-base text-center py-2 rounded-full hover:bg-gray-200 border border-gray-500/20'
                onClick={closeMenu}
              >
                <ShoppingCart className='inline mr-2' size={18} />
                Cart ({cart.length})
              </Link>
            )}

            {isAdmin && (
              <Link
                to='/secret-dashboard'
                className='bg-orange-400 text-white px-3 py-2 rounded-md text-base'
                onClick={closeMenu}
              >
                <Lock className='inline mr-2' size={16} />
                Dashboard
              </Link>
            )}

            {user ? (
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className='bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-base flex items-center'
              >
                <LogOut className='mr-2' size={18} />
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to='/signup'
                  className='bg-orange-400 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-base flex items-center'
                  onClick={closeMenu}
                >
                  <UserPlus className='mr-2' size={18} />
                  Sign Up
                </Link>
                <Link
                  to='/login'
                  className='bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-base flex items-center'
                  onClick={closeMenu}
                >
                  <LogIn className='mr-2' size={18} />
                  Login
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
