import { useContext, useEffect, useState } from "react";
import { MenuContext } from "./MenuContext";
import { FaShoppingCart, FaRegEye } from "react-icons/fa";
import Modal from "./Modal.jsx";
import CartModal from "./CartModal.jsx";
import { CartContext } from "./CartContext.jsx";
import AOS from "aos";

const Menu = () => {
  const menuData = useContext(MenuContext);
  const [openModal, setOpenModal] = useState(null);
  const { openCartModal, setCartModal } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      setTimeout(() => {
        AOS.refresh();
      }, 0);
      return updated;
    });
  };

 
  const categoriesToShow = menuData
    .filter((c) => selectedCategories.length === 0 || selectedCategories.includes(c.id))
    .map((c) => ({
      ...c,
      items: c.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((c) => c.items.length > 0); 

  return (
    <div id="menu" className="p-4 lg:w-[85%] w-[95%] mt-44 mx-auto">
      <h1
        data-aos="fade-up"
        className="text-myash font-extrabold text-center text-3xl border-3 p-2 rounded-2xl max-w-100 font-quicksand mx-auto lg:mb-20 whitetext"
      >
        Our Menu
      </h1>

     
      <div data-aos="fade-up" className="my-6 flex justify-center">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-2/3 whitetext md:mb-8 px-4 py-2 rounded-xl bg-bgdark/90 lg:mt-0 mt-8 -mb-4 text-txt outline-none border border-bgdark focus:border-mybutter"
        />
      </div>

      
      <div data-aos="fade-up" className="hidden lg:flex gap-4 mb-6">
        <button
          onClick={() => {
            setSelectedCategories([]);
            setTimeout(() => AOS.refresh(), 0);
          }}
          className={`px-3 py-2 rounded-xl transition ${selectedCategories.length === 0
              ? "bg-bgdark text-txt"
              : "bg-mybutter text-myash hover:bg-bgdark hover:text-txt"
            }`}
        >
          Show All
        </button>

        {menuData.map((items) => (
          <button
            key={items.id}
            onClick={() => toggleCategory(items.id)}
            className={`transition-transform duration-300 transform hover:-translate-y-1 px-3 py-2 rounded-xl ${selectedCategories.includes(items.id)
                ? "bg-bgdark text-txt"
                : "bg-mybutter text-myash"
              }`}
          >
            {items.category}
          </button>
        ))}
      </div>

     
      {categoriesToShow.map((category) => (
        <div key={category.id} id={category.id} className="mb-8 scroll-mt-28">
          <h2
            data-aos="fade-up"
            className="whitetext lg:w-2/5 w-full mt-20 text-2xl text-myash font-bold mb-8"
          >
            {category.category}
          </h2>

         
          <div data-aos="fade-up" className="hide-scrollbar flex overflow-x-auto gap-6 lg:hidden pb-2">
            {category.items.map((item, idx) => (
              <div
                key={idx} onClick={() => setOpenModal(item)}
                className="min-w-60 rounded p-2 transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-xl bg-bgdark/80 rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 whitetext w-full object-cover rounded mb-4 w-auto"
                />
                <div className="flex justify-between mb-6">
                  <span className="text-md max-w-[80%]">{item.name}</span>
                  <span className="text-md text-txt/80">₹{item.price}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <button
                    onClick={(e) => { e.stopPropagation(); setOpenModal(item); }}
                    className="flex justify-center items-center text-lg border px-2 rounded w-[20%] hover:text-mybutter hover:border-mybutter"
                  >
                    <FaRegEye />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCartModal({ item, category: category.category }); }}
                    className="button bg-mybutter px-2 text-myash/90 w-[30%] rounded flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    <span>Add</span>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCartModal({ item, category: category.category }); }}
                    className="button bg-mygreen px-2 w-[30%] rounded"
                  >
                    Buy <span className="hidden md:block">Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        
          <div data-aos="fade-up" className="hidden lg:grid grid-cols-3 gap-12">
            {category.items.map((item, idx) => (
              <div
                key={idx} onClick={() => setOpenModal(item)}
                className="transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-xl bg-bgdark/80 rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full whitetext h-48 object-cover rounded mb-6"
                />
                <div className="flex justify-between mb-6">
                  <span className="text-lg max-w-[80%] largewhite">{item.name}</span>
                  <span className="largewhite text-lg text-txt/80">₹{item.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <button
                    onClick={(e) => { e.stopPropagation(); setOpenModal(item) }}
                    className="text-lg border border-txt px-2 rounded w-[20%] hover:text-mybutter hover:border-mybutter flex items-center justify-center"
                  >
                    <FaRegEye />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCartModal({ item, category: category.category }); }}
                    className="button bg-mybutter px-2 text-myash/90 w-[30%] rounded flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    <span>Add</span>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCartModal({ item, category: category.category }); }}
                    className="button bg-mygreen px-2 w-[30%] rounded"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Modal open={openModal} item={openModal} onClose={() => setOpenModal(null)} />
      <CartModal
        item={openCartModal.item}
        category={openCartModal.category}
        onClose={() => setCartModal({ item: null, category: null })}
      />
    </div>
  );
};

export default Menu;