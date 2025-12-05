import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {  CartContext } from  "./CartContext.jsx"
import toast from "react-hot-toast";
import { div } from "framer-motion/client";

const CartModal = ({ item, category, onClose }) => {
 
  const {addToCart, editItem, cartDrawer, setCartDrawer} = useContext(CartContext)
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Regular");
  const [addons, setAddons] = useState([]);
  

  const pricehike = [{ name: "cheese", price: 20 }, { name: "mayo", price: 20 }, { name: "sauce", price: 10 }, { name: "pepsi", price: 60 }, { name: "fanta", price: 60 }]

  useEffect(() => {

      setCount(1);
      setSize("Regular");
      setAddons([]);
    
  }, [item]);

 


  const isSimple = category === "Desserts & Sweets" || category === "Drinks & Coolers";


  const toggleAddon = (addon) => setAddons(prev => prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]);

  const calculatePrice = () => {
    const basePrice = Number(item?.price || editItem?.price) || 0;
    
    let base = basePrice;
    if (!isSimple && size === "Large") base = Math.round(base * 1.7);

  
    const addonTotal = addons.reduce((sum, name) => {
      const a = pricehike.find(p => p.name === name);
      return sum + (a ? a.price : 0);
    }, 0);

    
    const total = base * count + addonTotal;
    return Math.round(total);
  };

  function handleConfirm() {
     const itemToAdd = {
      id: item.id,
      name: item.name ,
      image: item.image,
      count,
      size,
      addons,
      total: calculatePrice(),
      isSimple
    };

    
      addToCart(itemToAdd);
      onClose()
      toast.custom(()=> (
        <div className="md:w-100 h-12 md:text-lg flex justify-center items-center bg-mybutter text-myash/90 px-4 py-2 rounded-lg shadow-lg">Added to cart!</div>
      )) 
    }

   function handleBuy() {
    handleConfirm();
    onClose();
    setCartDrawer(true)
   }

   if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-bgmed rounded-lg w-[90%] max-w-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute p-2 largewhite  top-2 right-3 text-3xl text-myash hover:text-bgdark"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <h2 className=" text-center text-2xl text-myash font-bold mb-6">{item.name}</h2>


       
        {/* <div className="text-myash flex items-center gap-4 mb-4">
          <span>Set Quantity:</span>
          <div className="bg-gray-100/80 flex items-center justify-center ">
            <button onClick={()=>setCount(prev => Math.max(1, prev - 1))} className={ `text-txt px-2 rounded ${count === 1? "bg-gray-500/90" : "bg-myash/90 button"} h-full  w-[30%]`}>-</button>
            <span className=" w-[40%] text-myash px-3">{count}</span>
            <button onClick={()=>setCount(count + 1)} className="button px-2 text-txt bg-myash/90 rounded  h-full w-[30%]">+</button>

        </div>
        </div> */}

        {!isSimple && (
          <>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-myash whitetext text-lg"><span className="hidden md:inline-block">Select</span> Size:</span>
              <div className="flex gap-2">
                <label className={`px-2 py-1 rounded cursor-pointer border ${size === 'Regular' ? 'bg-mybutter text-myash' : 'bg-bgdark text-txt/90 hover:-translate-y-[2px] transition-tranform duration-300'}`}>
                  <input
                    type="radio"
                    name="size"
                    value="Regular"
                    checked={size === 'Regular'}
                    onChange={() => setSize('Regular')}
                    className="sr-only"
                  />
                  Regular
                </label>

                <label className={`px-2 py-1 rounded cursor-pointer border  ${size === 'Large' ? 'bg-mybutter text-myash ' : 'bg-bgdark text-txt/90 hover:-translate-y-[2px] transition-tranform duration-300'}`}>
                  <input
                    type="radio"
                    name="size"
                    value="Large"
                    checked={size === 'Large'}
                    onChange={() => setSize('Large')}
                    className="sr-only"
                  />
                  Large (+70%)
                </label>
              </div>

            </div>

         
            <div className="mb-4">
              <span className="block mb-2 text-lg text-myash whitetext max-w-50"><span className="hidden md:inline-block">Select</span> Add-ons:</span>
              <div className="flex flex-wrap gap-2">
                {pricehike.map(add => (
                  <button
                    key={add.name}
                    onClick={() => toggleAddon(add.name)}
                    className={`px-2 hover:-translate-y-[2px] transition-tranform duration-300 py-1 rounded border 
      ${addons.includes(add.name) ? "bg-mybutter text-myash" : "bg-bgdark border-myash"}
    `}
                  >
                    {add.name} (+₹{add.price})
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="text-myash font-bold whitetext max-w-50 mb-4">Total: ₹{calculatePrice()}</div>

        <div className="flex mb-2 justify-between">


          <div className="bg-gray-100/80 w-[26%] md:w-[20%] flex items-center justify-center ">
            <button onClick={() => setCount(prev => Math.max(1, prev - 1))} className={`flex justify-center items-center text-txt px-2 rounded ${count === 1 ? "bg-gray-500/90" : "bg-myash/90 button"} h-full  w-[30%]`}>-</button>
            <span className="flex justify-center items-center text-center md:text-lg w-[40%] text-myash px-3">{count}</span>
            <button onClick={() => setCount(count + 1)} className="flex justify-center items-center button px-2 text-txt bg-myash/90 rounded  h-full w-[30%]">+</button>


          </div>

          <button onClick={handleConfirm} className="bg-mybutter text-myash/80 md:px-4 md:py-2 py-1 rounded w-[32%] md:w-[35%] flex items-center justify-center gap-2 button"><FaShoppingCart /> <span><span className="hidden md:inline-block">Confirm</span> Add</span></button>
          <button onClick={handleBuy} className="bg-mygreen text-txt md:px-4 md:py-2 rounded w-[32%] md:w-[35%] button "><span className="hidden md:inline-block">Confirm Purchase</span><span className="md:hidden">Buy</span></button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;