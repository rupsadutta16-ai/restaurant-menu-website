
import { XMarkIcon } from "@heroicons/react/24/outline"; 
import { useState } from "react";
import { FaPepperHot, FaFire, FaShoppingCart } from 'react-icons/fa'; 
const Modal = ({ item, onClose }) => {

    
  if (!item) return null;
  const [count, setCount] = useState(1);
const isVeg = item.vegNonVeg === "veg";
const isSpice = item.spiceLevel != "none" ;
const isHot = item.spiceLevel === "spicy" ;
const isMed = item.spiceLevel === "medium" ;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      
      
      <div className="bg-bgmed py-10 px-6 w-[90%] lg:w-[35%] rounded-lg shadow-xl md:py-6 relative animate-fadeIn">
        
      
        <button
          onClick={onClose}
          className="absolute largewhite top-1 right-1 text-3xl text-myash hover:text-bgdark"
        >
          <XMarkIcon className="h-8 w-8"/>
        </button>

     
        <img
          src={item.image}
          alt={item.name}
          className="whitetext w-[95%] mx-auto h-56 object-cover rounded-lg mb-6"
        />

       
        <div className="flex justify-between mb-3">
          <h2 className="whitetext text-xl text-myash font-bold">{item.name}</h2>
          <span className="whitetext text-xl text-myash/80 font-bold">₹{item.price}</span>
        </div>

        <div className="flex items-center  text-myash/90 gap-4 mb-5">

   
          <div className="flex whitetext gap-2 items-center justify-center">
          <div
            className={`w-5 h-5 border ${
              isVeg ? "border-green-600" : "border-red-600"
            } flex items-center justify-center`}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                isVeg ? "bg-green-600" : "bg-red-600"
              }`}
            ></div>
          </div>
          {item.vegNonVeg}
        </div>
      
          {isSpice && <span className="whitetext flex items-center gap-2">
            <FaPepperHot className={`text-[20px] ${isHot? "text-red-700" : isMed?"text-yellow-500": "text-mygreen"}`}/> <span>{item.spiceLevel}</span>
          </span>}


          <span className="whitetext flex items-center gap-2">
            <FaFire className="text-[20px] text-bgdark"/> <span>{item.calories} kcal</span>
          </span>
        </div>


 
        <p className="whitetext text-myash/80 text-sm mb-6">{item.description}</p>

       {/* <div className="w-full flex justify-between">
        <div className="bg-gray-100/80 flex items-center justify-center w-[24%]">
            <button onClick={()=>setCount(prev => Math.max(1, prev - 1))} className={ `rounded ${count === 1? "bg-gray-500/90" : "bg-myash/90 button"} h-full  w-[30%]`}>-</button>
            <span className=" w-[40%] text-myash px-3">{count}</span>
            <button onClick={()=>setCount(count + 1)} className="button bg-myash/90 rounded  h-full w-[30%]">+</button>

        </div> */}
        {/* <button className="w-[33%] bg-mybutter px-3 py-1 flex text-myash/80 items-center justify-center gap-2 rounded-md button"> <FaShoppingCart /> <span>Add</span></button>
        <button className="w-[33%] bg-mygreen px-3 py-1 rounded-md button">Buy Now</button>
       </div> */}
       <button onClick={onClose} className=" bg-mygreen px-3 py-1  w-full   gap-2 rounded-md button"> OK</button>
      </div>
    </div>
  );
};

export default Modal;