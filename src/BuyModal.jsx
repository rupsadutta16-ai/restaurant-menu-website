import { useContext, useState } from "react";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import { CartContext } from "./CartContext";

const BuyModal = ({ isOpen, onClose }) => {
    const { setCartItems, setCartDrawer } = useContext(CartContext)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false)

    if (!isOpen) return null;


    const fetchLocation = () => {
        setErrorMsg("");
        setLoading(true);

        if (!navigator.geolocation) {
            setErrorMsg("Geolocation is not supported in your browser.");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;

                try {
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
                        {
                            headers: {
                                "User-Agent": "RestaurantMenuApp/1.0"
                            }
                        }
                    );

                    if (!res.ok) {
                        throw new Error(`API error: ${res.status}`);
                    }

                    const data = await res.json();


                    if (data?.display_name) {
                        setAddress(data.display_name);
                    } else if (data?.address) {

                        const { road, suburb, village, city, county, state, postcode } = data.address;
                        const shortAddr = [road, village || suburb, city, county, state, postcode]
                            .filter(Boolean)
                            .join(", ");
                        setAddress(shortAddr || `${latitude}, ${longitude}`);
                    } else {
                        setAddress(`${latitude}, ${longitude}`);
                    }
                } catch (e) {
                    console.error("Geocoding error:", e);
                    setErrorMsg("Couldn't decode address, but location saved!");
                    setAddress(`${latitude}, ${longitude}`);
                }

                setLoading(false);
            },
            () => {
                setErrorMsg("Couldn't fetch location.");
                setLoading(false);
            },
            { enableHighAccuracy: true }
        );
    };

    const handleSubmit = () => {
        if (!name.trim() || !phone.trim() || !address.trim()) {
            setErrorMsg("Please fill all fields.");
            return;
        }
        if (!/^\d{10}$/.test(phone)) {
            setErrorMsg("Phone number must be 10 digits!")
            return;
        }
        setCartItems([])
        setSuccess(true);

    };

    const closeSuccess = () => {
        setSuccess(false);
        onClose();
        setCartDrawer(false)
        // Optionally, reset fields
        setName("");
        setPhone("");
        setAddress("");
        setErrorMsg("");
    };


    return (
        <div className="text-myash fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="bg-white w-[90%] max-w-md rounded-xl p-5 relative shadow-xl animate-scaleIn">


                <button onClick={onClose} className="whitetext hover:text-bgdark absolute top-3 right-3 text-2xl">
                    <IoClose />
                </button>

                <h2 className="text-2xl text-center font-bold mb-4">Checkout</h2>


                <button
                    onClick={fetchLocation}
                    className="flex items-center justify-center gap-3 bg-mybutter button text-myash/90 px-3 py-2 rounded-md w-full mb-6"
                >
                    {loading ? ("Fetching...") : (<> <IoLocationSharp className="text-lg" /> Fetch My Location </>)}
                </button>

                {errorMsg && (
                    <p className="text-red-600 text-sm mb-2">{errorMsg}</p>
                )}


                <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full p-2 shadow-sm border-myash/70 border rounded mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <input
                    type="tel"
                    placeholder="Enter your Phone No."
                    className="w-full p-2 border shadow-sm border-myash/70 shadow-sm rounded mb-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />


                <textarea
                    placeholder="Enter your Address"
                    className="w-full p-2 shadow-sm border-myash/70 border rounded h-24 mb-4"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />


                <button
                    onClick={handleSubmit}
                    className="bg-mygreen text-white button px-4 py-2 rounded-lg w-full"
                >
                    Submit Order
                </button>
            </div>
            {success && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
                    <div className="bg-white w-[90%] max-w-md rounded-xl p-5 relative shadow-xl animate-scaleIn">
                        <button onClick={closeSuccess} className="whitetext hover:text-bgdark absolute top-3 right-3 text-2xl">
                            <IoClose />
                        </button>

                        <h2 className="text-2xl font-bold mb-3 text-mygreen">Order Placed Successfully!</h2>
                        <p className="mb-1"><strong>Name:</strong> {name}</p>
                        <p className="mb-1"><strong>Phone:</strong> {phone}</p>
                        <p className="mb-3"><strong>Address:</strong> {address}</p>
                        <p className="mb-5">Thank you for purchasing! You'll receive your order soon.</p>
                        <button
                            onClick={closeSuccess}
                            className="bg-mybutter text-myash/90 px-4 py-2 rounded-lg w-full button"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}

        </div>

    );
};

export default BuyModal;