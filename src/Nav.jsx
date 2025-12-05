import { MenuContext } from './MenuContext.jsx'
import ImageUrl from './assets/bgimg.png'
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import { useContext, useState } from 'react';
import { CartContext } from './CartContext.jsx';
import CartDrawer from './CartDrawer.jsx';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const { cartDrawer, setCartDrawer } = useContext(CartContext)
  const links = [
    { name: 'Home', link: '#home' },
    { name: 'Menu', link: '#menu' },
    { name: 'Contact', link: '#contact' },
  ];
  return (
    <>

      <section className='w-full bg-bgmed md:h-25 h-21 fixed top-0 z-40 left-0'>
        <div className='w-full md:h-29 h-25 fixed -top-4 z-45 left-0' style={{ backgroundImage: `url(${ImageUrl})`, opacity: 0.1, backgroundPosition: 'top' }}></div>
        <nav
          style={{
            background: `linear-gradient(to right,
      #b03320 0%,
      #ddb0a9ff 25%,
      #f4e6d2 50%,
      #ddb0a9ff 75%,
       #b03320 100%
      )`
          }}
          className="
    fixed left-1/2 top-4 -translate-x-1/2 z-50
    md:w-[70%] w-[87%]
    mx-auto
    md:px-6 px-3 md:py-3 py-2
    rounded-2xl
    shadow-lg
    flex items-center justify-between
    border-bgdark/30 border-2
  "
        >
          <div className="largewhite font-pacifico text-mybutter text-lg md:text-2xl">
            Bite <span className="text-myash font-quicksand font-bold tracking-tight">Street</span>
          </div>


          <div className="md:flex hidden gap-6 text-myash font-semibold">
            <a href="#home" className="hover:text-bgdark">Home</a>
            <a href="#menu" className="hover:text-bgdark">Menu</a>
            <a href="#contact" className="hover:text-bgdark">Contact</a>
          </div>
          <div className='flex gap-4'>
            <button onClick={() => setCartDrawer(true)} className="bg-mybutter text-myash/90  md:px-4 px-3 py-2 rounded-lg font-semibold flex items-center md:text-md text-sm gap-2 button">
              <FaShoppingCart /> <span className='hidden md:block'>View Cart</span>
            </button>

            <button onClick={() => setOpenMenu(!openMenu)} className="bg-mybutter text-sm text-myash/90 px-3 py-2 rounded-lg font-semibold flex items-center gap-2 button md:hidden">
              {openMenu ? <FaTimes /> : <FaBars />}
            </button>
            {openMenu && (
              <div className="absolute top-full right-0 mt-1 w-36 bg-mybutter text-myash/90  rounded shadow p-2">
                <ul className='flex rounded-lg flex-col gap-4 p-2'>
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <a className="border-b-1  pl-1 block w-4/5 border-myash/80" href={link.link}>
                        {link.name}
                      </a>
                    </li>
                  ))}

                </ul>
              </div>
            )}
          </div>
        </nav>
        <CartDrawer isOpen={cartDrawer} onClose={() => setCartDrawer(false)} />
      </section>
    </>
  )
}

export default Nav