import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import BuyModal from "./BuyModal";
import toast from "react-hot-toast";
const CartDrawer = ({ isOpen, onClose}) => {
  if (!isOpen) return null;
  const [buyModal, setBuyModal] = useState(false)
  const { cartItems, removeFromCart, setEditItem } = useContext(CartContext)
  const [tip, settip] = useState(0)
  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const gst = Math.round(subtotal * 0.05);
  const shipping = subtotal === 0 ? 0 : 20;
  function handleCheckout() {
    if (cartItems.length === 0) {
         toast.custom(()=> (
        <div className="bg-bgdark text-txt/90 px-4 py-2 md:w-100 h-12 md:text-lg flex justify-center items-center rounded-lg shadow-lg  text-md ">Cart is empty! Cannot proceed.</div> ));
        return;
    }
    
    
    setBuyModal(true)
    
  }
  return (
    <div className="fixed inset-0 z-55 flex">

    
      <div 
        className="flex-1"
        onClick={onClose}
      />

 
      <div className="w-[85%] sm:w-[43%] bg-bgmed h-full shadow-xl p-4 flex flex-col">
        
     
        <div className="flex justify-between items-center mb-4">
          <h2 className="whitetext flex justify-center items-center gap-3 text-2xl text-myash font-bold"><FaShoppingCart/><span>Your Cart</span></h2>

          <button className="absolute largewhite md:right-6 right-5" onClick={onClose}><div className="  items-center"><XMarkIcon className="largewhite h-8 hover:text-bgdark w-8 font-light text-myash/90" /></div></button>
        </div>

  
        <div className="flex-1 hide-scrollbar overflow-y-auto pr-1">

          {cartItems.length === 0 ? (
            <p className="text-myash/70 text-center mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div 
                key={index}
                className="relative flex gap-3 bg-bgdark/30 p-3 rounded-lg mb-3"
              >
             
                <img 
                  src={item.image}
                  alt=""
                  className="whitetext w-30 h-25 object-cover rounded-md"
                />
               <button className="absolute largewhite right-2" onClick={()=> removeFromCart(index)}><div className="md:hidden  items-center"><XMarkIcon className="largewhite h-6 hover:text-bgdark w-6 font-light text-myash/90" /></div></button>

                <div className="flex-1 ">
                  <div className="flex justify-center  flex-col">
                    <span className="whitetext text-lg max-w-[30vw] sm:max-w-[45vw] md:max-w-999 font-bold text-myash mb-1">
                      <span className="">{item.name}</span>
                      
                      
                    </span>
                    <span className="whitetext font-bold text-myash/85 mb-1">
                      ₹{item.total}
                    </span>
                  </div>

             
                  <div className="overflow-x-scroll md:max-w-999 sm:max-w-[40vw] max-w-[35vw] flex md:flex-wrap gap-1 md:gap-2 mt-1 hide-scrollbar">
                    <span className="hover:-translate-y-[1px] duration-300 px-2 py-1 text-xs rounded bg-bgmed border border-myash/40 text-myash/90">
                      Qty:⠀{item.count}
                    </span>

                    {!item.isSimple && (
                      <span className="hover:-translate-y-[1px] duration-300 px-2 py-1 text-xs rounded bg-bgmed border border-myash/40 text-myash/90">
                        {item.size}
                      </span>
                    )}

                    {item.addons.map((a) => (
                      <span
                        key={a}
                        className="hover:-translate-y-[1px] duration-300 px-2 py-1 text-xs rounded bg-bgmed border border-myash/40 text-myash/90"
                      >
                        {a}
                      </span>
                    ))}
                    
                     {/* <button 
                      className="flex-1 bg-red-600/80 hover:bg-red-700 text-myash py-1 rounded button"
                     onClick={}
                    >
                      Remove
                    </button> */}
                  </div>

                  
                  
                </div>
                <button onClick={()=> removeFromCart(index)}><div className=" flex largewhite hidden md:flex items-center"><XMarkIcon className="h-12 hover:text-bgdark w-12 font-light text-myash/90" /></div></button>
              </div>
            ))
          )}
        </div>

     
        <div className="mt-4 p-4 text-sm bg-bgdark/50 rounded-lg">
          <h3 className="w-3/5 whitetext text-lg font-bold text-myash mb-2">Bill Details</h3>

          <div className="flex justify-between text-myash mb-1">
            <span className="whitetext">Subtotal</span>  
            <span className="whitetext">₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-myash mb-1">
            <span className="whitetext">GST (5%)</span>  
            <span>₹{gst}</span>
          </div>

          <div className="flex justify-between text-myash mb-1">
            <span className="whitetext">Shipping Charge</span>  
            <span className="whitetext">₹{shipping}</span>
          </div>

        
          <div className="z-100 flex justify-between items-center text-myash mb-1">
            <span>Tips</span>

            <select onChange={(e)=>settip(Number(e.target.value))}
              className="bg-bgmed border border-myash/30 rounded px-2 py-1 text-myash text-sm"
              defaultValue="0"
            >
              <option value= "0">Choose</option>
              <option value="10">₹10</option>
              <option value="20">₹20</option>
              <option value="30">₹30</option>
            </select>
          </div>

          <hr className="border-myash/40 my-3" />

          <div className="flex justify-between text-myash font-bold text-[17px] mb-3">
            <span className="whitetext">Grand Total</span>
            <span className="whitetext">₹{subtotal + gst + shipping + tip}</span>
          </div>

          <button onClick={handleCheckout} className="text-[17px] bg-mybutter text-myash/80 py-2 rounded w-full button">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <BuyModal isOpen = {buyModal} onClose = {()=> setBuyModal(false)} />
    </div>
  );
};

export default CartDrawer;