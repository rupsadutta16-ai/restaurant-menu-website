import { createContext } from "react";

export const MenuContext = createContext([]);
export const MenuProvider = ({ children }) => {
    const menuData = [
        // 1️⃣ Momos & Dumplings
        {
            category: "Momos & Dumplings",
            id: "momos",
            items: [
                {
                    name: "Veg Steamed Momo",
                    price: 120,
                    image: "https://media.istockphoto.com/photos/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-picture-id1292635321?k=20&m=1292635321&s=612x612&w=0&h=pV3-hV9U_0QVuXJ9xq4u7KRurF-9fQWMYYmDTVlBzgE=",
                    description: "6 soft and plump steamed dumplings filled with a vibrant mix of finely chopped fresh vegetables, infused with mild spices, herbs, and a hint of sesame. Each bite melts in your mouth, perfectly complemented by a tangy and flavorful sesame dipping sauce that elevates the natural taste of the veggies.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 180
                },
                {
                    name: "Paneer Momo",
                    price: 140,
                    image: "https://5.imimg.com/data5/QG/BM/XQ/SELLER-21740637/momo-blog-500x500.jpg",
                    description: "6 steamed dumplings stuffed with smooth and creamy paneer blended with aromatic herbs, finely diced vegetables, and a subtle hint of spices. The texture is soft and delicate, giving a satisfying bite every time, served with a slightly tangy dipping sauce to enhance the flavors.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 200
                },
                {
                    name: "Chicken Momo",
                    price: 160,
                    image: "https://maryzkitchen.com/wp-content/uploads/2022/04/IMG-20220417-WA0069.jpg",
                    description: "6 juicy dumplings generously filled with tender minced chicken, flavored with fresh ginger, garlic, and light spices. Steamed to perfection to retain juiciness, these momos offer a savory and wholesome experience in every bite, served with a mild dipping sauce to balance the richness of the meat.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 220
                },
                {
                    name: "Schezwan Veg Momo",
                    price: 150,
                    image: "https://tse1.mm.bing.net/th/id/OIP.e2MqLBJFwEWyyqqyWwWUWwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "6 steamed dumplings packed with a medley of vegetables tossed in bold and spicy Schezwan sauce. The fiery sauce coats each momo perfectly, offering a spicy kick while still letting the freshness of the vegetables shine through, creating a vibrant flavor experience for spice lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "spicy",
                    calories: 190
                },
                {
                    name: "Schezwan Chicken Momo",
                    price: 170,
                    image: "https://tse3.mm.bing.net/th/id/OIP.ypP1MnwqG0MU6tZ36ZhlOQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "6 succulent chicken dumplings enveloped in a fiery Schezwan sauce, perfectly balancing heat and flavor. The tender chicken filling combined with the bold sauce gives a rich, spicy, and tantalizing bite that excites the palate with every mouthful.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "spicy",
                    calories: 230
                },
                {
                    name: "Tandoori Momos",
                    price: 180,
                    image: "https://www.bigbasket.com/media/uploads/recipe/w-l/4389_2_1.jpg",
                    description: "6 dumplings marinated in a smoky tandoori spice mix, then grilled to perfection. The smoky aroma and slightly charred exterior give a delightful flavor contrast to the juicy filling, making each momo savory, tangy, and irresistible.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 240
                },
                {
                    name: "Cheese Veg Momo",
                    price: 160,
                    image: "https://hungryq.com/wp-content/uploads/2025/07/Veg-Cheese-Momos-1-1024x683.png",
                    description: "6 steamed dumplings filled with a luscious mix of melted cheese and fresh vegetables, perfectly spiced to create a creamy, flavorful bite. Each momo is soft, gooey, and extremely satisfying, complemented by a light dipping sauce.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 200
                },
                {
                    name: "Fried Veg Momo",
                    price: 150,
                    image: "https://www.vegandietfood.com/wp-content/uploads/2023/09/veg-fried-momos-recipe.jpg",
                    description: "6 golden fried dumplings with a crispy outer layer and a savory vegetable filling. The combination of crunch and soft interior provides a delightful texture contrast, accompanied by a tangy sauce to enhance the flavor profile.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 210
                },
                {
                    name: "Fried Chicken Momo",
                    price: 170,
                    image: "https://th.bing.com/th/id/R.8ec0bb2704f76f369f154c83a402360e?rik=yE%2fZawgSwaDpWg&riu=http%3a%2f%2fsalasdaily.com%2fcdn%2fshop%2fproducts%2fchicken_fried_momos_1200x1200.webp%3fv%3d1667534046&ehk=vcSS2ke6a88IEfuR1fAhDDTERfOAkijf82lk0dyBVvk%3d&risl=&pid=ImgRaw&r=0",
                    description: "6 fried dumplings filled with tender, spiced chicken. Crispy outside with juicy, flavorful filling inside, perfect for those who love the crunch combined with succulent chicken, served with a complementary dipping sauce.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 230
                },
                
                {
                    name: "Corn & Cheese Momos",
                    price: 160,
                    image: "https://s3-ap-southeast-1.amazonaws.com/asia.urbanpiper.com/media/bizmedia/l/2020/02/11/Steamed_Corn_Cheese_Momos_1_COMPRESSED.jpg",
                    description: "6 steamed dumplings filled with sweet corn kernels and melted cheese, offering a delightful creamy and slightly sweet bite. Soft, flavorful, and satisfying, these momos are perfect for cheese lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 210
                },
                {
                    name: "Spinach & Paneer Momos",
                    price: 160,
                    image: "https://i.ytimg.com/vi/K59LVktExvQ/maxresdefault.jpg",
                    description: "6 dumplings stuffed with a combination of fresh spinach and soft paneer, lightly seasoned to highlight the natural flavors. Steamed to retain freshness, these momos are wholesome, tasty, and satisfying in every bite.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 200
                },
                {
                    name: "Spicy Chicken Momo Platter",
                    price: 250,
                    image: "https://img.freepik.com/premium-photo/closeup-spicy-chicken-momos-white-background-momos-picture_1020697-137266.jpg",
                    description: "A generous platter of 12 spicy chicken momos, marinated in bold spices and steamed to perfection. Each momo bursts with flavor, offering a perfect balance of heat, tenderness, and juiciness.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "spicy",
                    calories: 450
                },
                {
                    name: "Mixed Veg Momo Platter",
                    price: 220,
                    image: "https://img.freepik.com/premium-photo/tasty-mixed-veg-momos-momos-dumplings-picture-photography_1020697-136989.jpg",
                    description: "A delightful assortment of 12 assorted steamed vegetable momos, combining different fillings like paneer, corn, cheese, and spinach. Served with tangy dipping sauces for a flavorful experience.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 400
                },
                {
                    name: "Mushroom & Cheese Momos",
                    price: 170,
                    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/HA/GO/HH/139615941/frozen-mushroom-cheese-momo-1000x1000.jpg",
                    description: "6 steamed dumplings filled with earthy mushrooms and creamy melted cheese, seasoned lightly for a rich and balanced taste. Soft, aromatic, and deeply satisfying.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 220
                }
            ]
        },

        // 2️⃣ Street Rolls & Wraps
        {
            category: "Street Rolls",
            id: "rolls",
            items: [
                {
                    name: "Veg Roll",
                    price: 120,
                    image: "https://tse4.mm.bing.net/th/id/OIP.uVpF0clfwHhzcNb2N_gm6wHaFN?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "A soft, warm flatbread rolled with fresh vegetables, shredded lettuce, tangy sauces, and mild spices. Each bite is crunchy, juicy, and perfectly balanced, making it a wholesome snack for any time of the day.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 250
                },
                {
                    name: "Paneer Tikka Roll",
                    price: 140,
                    image: "https://firsttimercook.com/wp-content/uploads/2017/02/Paneer2Btikka2Bkathi2Broll2B3.jpg",
                    description: "Grilled cubes of spiced paneer wrapped in soft flatbread along with onions, capsicum, and a smoky tikka marinade. Each bite offers a smoky, savory, and aromatic experience.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 300
                },
                {
                    name: "Chicken Roll",
                    price: 160,
                    image: "https://www.cafecoffeeday.com/sites/default/files/Peppy-Chicken-Roll_1.jpg",
                    description: "Succulent pieces of chicken marinated in spices, grilled, and rolled with fresh vegetables and sauces in soft flatbread. A perfect combination of tender meat, spice, and crunch in every bite.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 350
                },
                {
                    name: "Egg Roll",
                    price: 130,
                    image: "https://i.ytimg.com/vi/Mi-QbKaGDPE/maxresdefault.jpg",
                    description: "Soft flatbread filled with fluffy scrambled eggs, fresh vegetables, and mild seasonings. Nutritious, soft, and packed with flavor, perfect for breakfast or a light snack.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "mild",
                    calories: 280
                },
                {
                    name: "Cheese Corn Roll",
                    price: 150,
                    image: "https://wbcdn.in/assets/img/uploads/mywb/uploads/img_44c15b4eec6898693ccf5c2e58e2eece47f06385.jpg",
                    description: "A soft flatbread stuffed with sweet corn, gooey melted cheese, and mild spices. Each bite is creamy, slightly sweet, and utterly satisfying.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 320
                },
                {
                    name: "Spicy Chicken Roll",
                    price: 170,
                    image: "https://www.cafecoffeeday.com/sites/default/files/Peppy-Chicken-Roll_1.jpg",
                    description: "Soft flatbread wrapped around juicy chicken pieces, coated in spicy sauce, with onions and capsicum for crunch. Bursting with heat and flavor in every bite.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "spicy",
                    calories: 360
                },
                {
                    name: "Schezwan Veg Roll",
                    price: 150,
                    image: "https://i.ytimg.com/vi/TVMw0d1m9kM/maxresdefault.jpg",
                    description: "Flatbread filled with stir-fried vegetables tossed in fiery Schezwan sauce. Each bite delivers a punch of spice with the crunch of fresh vegetables.",
                    vegNonVeg: "veg",
                    spiceLevel: "spicy",
                    calories: 310
                },
                {
                    name: "Schezwan Chicken Roll",
                    price: 170,
                    image: "https://tse2.mm.bing.net/th/id/OIP.0c1Mz_Bhp5PudgcWncSgTwHaER?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Juicy chicken pieces stir-fried in Schezwan sauce, wrapped with fresh veggies in soft flatbread. Bold, spicy, and satisfying for spice lovers.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "spicy",
                    calories: 370
                }
                
            ]
        },

        // 3️⃣ Burgers & Sandwiches
        {
            category: "Burgers & Sandwiches",
            id: "breads",
            items: [
                {
                    name: "Veg Burger",
                    price: 120,
                    image: "https://tse1.mm.bing.net/th/id/OIP.b12Vgm9PXpoLhlmHWXF5swHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "A soft bun layered with fresh lettuce, juicy tomato slices, cucumber, and a house special patty made from vegetables and grains. Mildly seasoned and grilled to perfection for a wholesome and filling bite.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 350
                },
                {
                    name: "Paneer Burger",
                    price: 140,
                    image: "https://i.cdn.newsbytesapp.com/images/l54520240701175306.jpeg",
                    description: "Grilled paneer patty seasoned with aromatic spices, sandwiched between soft buns with lettuce, tomato, and onion. Each bite offers a rich, creamy, and flavorful vegetarian delight.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 380
                },
                {
                    name: "Chicken Burger",
                    price: 160,
                    image: "https://th.bing.com/th/id/R.63698cc97cc5c4fe1d1ce5dddcaac706?rik=19xJWmE1imMFog&riu=http%3a%2f%2ftrentapizza.co.uk%2fwp-content%2fuploads%2f2016%2f07%2fBuffalo-Chicken-Burger.jpg&ehk=BVBG0sEaYZL43o1vFYn1wOIJeiw%2fnBXyQgEctHI3xU0%3d&risl=&pid=ImgRaw&r=0",
                    description: "Juicy grilled chicken patty layered with lettuce, tomato, and sauce in a soft bun. A classic favorite with tender chicken and balanced flavors in every bite.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 420
                },
                
                {
                    name: "Grilled Veg Sandwich",
                    price: 130,
                    image: "https://tse4.mm.bing.net/th/id/OIP.NlQIRN_WAezc-y5TVtPNBwHaFa?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Grilled slices of bread filled with fresh vegetables, lettuce, tomato, cucumber, and mild spices. Crispy outside, soft inside, making it a light yet satisfying option.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 320
                },
                {
                    name: "Grilled Chicken Sandwich",
                    price: 160,
                    image: "https://tse3.mm.bing.net/th/id/OIP.4kbJ24hOkkedh9mSn1aLGwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Grilled chicken breast layered with fresh veggies, lettuce, and sauces in perfectly toasted bread. Balanced flavors and textures for a wholesome sandwich experience.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 400
                },
                {
                    name: "Cheese Burger",
                    price: 150,
                    image: "https://tse2.mm.bing.net/th/id/OIP.JGigDSijh-lKRw6YaZQGVwHaDs?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Juicy patty with melted cheese, fresh vegetables, and sauces sandwiched between soft buns. Creamy, cheesy, and highly satisfying for cheese lovers.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 420
                },
                {
                    name: "Spicy Paneer Burger",
                    price: 150,
                    image: "https://th.bing.com/th/id/R.a2720bfce46f31bced7f173917fb62a5?rik=s4mrShL1o%2fwvzQ&riu=http%3a%2f%2fwww.cookingfromheart.com%2fwp-content%2fuploads%2f2015%2f12%2fch_dsc_0363_4.jpg&ehk=1RTS1C6tohxT65PdK8OmOYGaoVUR5%2fob50dEiOOShD0%3d&risl=&pid=ImgRaw&r=0",
                    description: "Grilled paneer patty marinated with spices, combined with fresh vegetables, sauces, and soft buns. A bold and flavorful vegetarian burger with a kick of heat.",
                    vegNonVeg: "veg",
                    spiceLevel: "spicy",
                    calories: 380
                },
                {
                    name: "Classic Egg Burger",
                    price: 140,
                    image: "https://bakeitwithlove.com/wp-content/uploads/2023/01/egg-burger-h.jpg.webp",
                    description: "A soft bun with a perfectly fried egg, lettuce, tomato, and sauces. Simple, classic, and flavorful, offering a protein-rich bite in every mouthful.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "mild",
                    calories: 360
                },
                {
                    name: "Mushroom Swiss Burger",
                    price: 160,
                    image: "https://insanelygoodrecipes.com/wp-content/uploads/2024/08/Mushroom-Swiss-Burger-Featured.jpg",
                    description: "Juicy patty with sautéed mushrooms, Swiss cheese, fresh veggies, and sauces, served on a soft bun. Rich, earthy, and deeply satisfying flavors in every bite.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 420
                },
                {
                    name: "BBQ Chicken Burger",
                    price: 170,
                    image: "https://tse4.mm.bing.net/th/id/OIP.k42OCwUzZ3MLezuzgQ2tLAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Grilled chicken patty glazed with smoky BBQ sauce, topped with lettuce, onion, and tomato, served in a soft bun. Sweet, smoky, and savory all at once.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 450
                },
                {
                    name: "Veggie Delight Sandwich",
                    price: 130,
                    image: "https://subwaymenuprices.org/wp-content/uploads/2023/12/Subway-Veggie-Delight-Sandwich-1024x585.jpg",
                    description: "Freshly baked bread filled with crisp vegetables, cheese, and flavorful sauces. Light, wholesome, and satisfying with each bite.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 320
                },
            ]
        },

        // 4️⃣ Fried & Snack Zone
        {
            category: "Fried & Snack Zone",
            id: "snacks",
            items: [
                {
                    name: "French Fries",
                    price: 100,
                    image: "https://www.thestatesman.com/wp-content/uploads/2019/05/french-fries.jpg",
                    description: "Golden, crispy French fries, perfectly salted and lightly seasoned. Each fry has a satisfying crunch outside while remaining soft and fluffy inside. Perfect as a snack or side with any meal.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 300
                },
                {
                    name: "Cheese Fries",
                    price: 150,
                    image: "https://www.foodrepublic.com/wp-content/uploads/2016/03/cheesefries_anchor.jpg",
                    description: "Crispy golden fries smothered in rich, melted cheese sauce, garnished with herbs and a hint of spices. Each bite is indulgent, cheesy, and satisfying for comfort food lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 400
                },
                {
                    name: "Chilli Potato",
                    price: 130,
                    image: "https://tse4.mm.bing.net/th/id/OIP.Djzliw9pzSH7imnrkKJzTAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Crunchy fried potato strips tossed in a sweet and spicy chilli sauce, garnished with fresh herbs. A flavorful and zesty snack that combines heat, tang, and crunch in every bite.",
                    vegNonVeg: "veg",
                    spiceLevel: "spicy",
                    calories: 350
                },
                {
                    name: "Spring Rolls",
                    price: 120,
                    image: "https://b2b.chickenofthesea.com/wp-content/uploads/2022/06/food-service-recipes-Crispy-Fried-Crab-Spring-Rolls.jpg",
                    description: "2 Crispy golden spring rolls filled with fresh vegetables and mild seasoning. Each roll offers a perfect crunch and a burst of flavor, served with a tangy dipping sauce.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 280
                },
               
                {
                    name: "Popcorn Chicken",
                    price: 180,
                    image: "https://thatwasfresh.com/wp-content/uploads/2023/05/Popcorn-Chicken-1024x683.jpg",
                    description: "Juicy chicken pieces, coated in a flavorful batter and deep-fried to golden perfection. Bite-sized, crunchy, and packed with tender, savory meat inside.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 400
                },
                {
                    name: "Paneer Tikka Bites",
                    price: 160,
                    image: "https://img.freepik.com/premium-photo/succulent-paneer-tikka-bites-best-indian-fast-food-paneer-tikka-picture-photography_1020697-118929.jpg",
                    description: "8 Soft paneer cubes marinated in aromatic spices and grilled until golden. Tender, smoky, and bursting with flavor in every bite.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 350
                },
               
                {
                    name: "Chicken Nuggets",
                    price: 160,
                    image: "https://thetoastedpinenut.com/wp-content/uploads/2017/08/IMG_5288.jpg",
                    description: "Juicy chicken pieces coated in a crispy batter, fried to perfection. Each nugget is tender, flavorful, and packed with protein, served with your favorite dipping sauce.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 380
                },
                {
                    name: "Corn Balls",
                    price: 150,
                    image: "https://tse2.mm.bing.net/th/id/OIP.c1s_jI7r3uWsigwTuusJCQHaFj?w=1000&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Golden-fried balls filled with sweet corn, mashed potatoes, and mild spices. Crispy outside with a soft, creamy, and sweet interior, perfect for snacking.",
                    vegNonVeg: "veg",
                    spiceLevel: "mild",
                    calories: 350
                },
                {
                    name: "Masala French Fries",
                    price: 140,
                    image: "https://i.ytimg.com/vi/LViCPSQJjUQ/maxresdefault.jpg",
                    description: "Crispy fries tossed in a tangy and spicy masala seasoning, delivering bold flavors with every crunchy bite. A perfect snack to spice up your day.",
                    vegNonVeg: "veg",
                    spiceLevel: "spicy",
                    calories: 320
                },
               
                {
                    name: "Paneer Pakora",
                    price: 150,
                    image: "https://img-global.cpcdn.com/recipes/db4cbfb7e42c6c8d/680x482cq70/paneer-pakoda-recipe-main-photo.jpg",
                    description: "Soft paneer cubes dipped in spiced gram flour batter and deep-fried to golden perfection. Crispy outside with soft, cheesy inside, ideal for tea-time snacks.",
                    vegNonVeg: "veg",
                    spiceLevel: "medium",
                    calories: 350
                },
                {
                    name: "Chicken Pakora",
                    price: 160,
                    image: "https://i.ytimg.com/vi/xlszcRPKDqk/maxresdefault.jpg",
                    description: "Tender chicken pieces coated in spiced batter and deep-fried to crispy perfection. Crunchy exterior and juicy interior make it a flavorful snack.",
                    vegNonVeg: "non-veg",
                    spiceLevel: "medium",
                    calories: 380
                }
            ]
        },

        // 5️⃣ Drinks & Coolers
        {
            category: "Drinks & Coolers",
            id: "drinks",
            items: [
               
                {
                    name: "Lemonade",
                    price: 70,
                    image: "https://tse2.mm.bing.net/th/id/OIP.O4-BlwnK5XddkVPnAKuEVQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
                    description: "Freshly squeezed lemonade with a perfect balance of tangy and sweet flavors. Refreshing, zesty, and cooling for hot days.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 120
                },
                {
                    name: "Mojito Mocktail",
                    price: 120,
                    image: "https://lizoncall.com/wp-content/uploads/2020/07/mojito-mocktail-3.jpg",
                    description: "Refreshing blend of mint leaves, lime juice, and soda water with subtle sweetness. A non-alcoholic delight that is cooling and invigorating.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 100
                },
                {
                    name: "Iced Tea",
                    price: 80,
                    image: "https://th.bing.com/th/id/R.cae305bd573c95cf3911d92d8bef29f0?rik=fu5eZOAgt5P%2bZg&riu=http%3a%2f%2fwww.blog.sagmart.com%2fwp-content%2fuploads%2f2015%2f06%2fIced-Tea.jpg&ehk=wIDFA4VYaJyx5tKUUJrDeRRmqJ5QP3IwhmsyROvvNtE%3d&risl=&pid=ImgRaw&r=0",
                    description: "Chilled brewed tea served with a hint of lemon and sweetener. Refreshing and perfect for a light, thirst-quenching drink.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 90
                },
                {
                    name: "Strawberry Milkshake",
                    price: 120,
                    image: "https://img.freepik.com/premium-photo/strawberry-milkshake-ai-generated_859483-5063.jpg?w=996",
                    description: "Creamy milkshake blended with fresh strawberries and chilled milk. Sweet, fruity, and indulgent for dessert or a refreshing treat.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 250
                },
                {
                    name: "Chocolate Milkshake",
                    price: 120,
                    image: "https://images8.alphacoders.com/133/thumb-1920-1330416.png",
                    description: "Rich and creamy chocolate milkshake made with chilled milk and chocolate syrup. Sweet, indulgent, and satisfying for chocolate lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 280
                },
                {
                    name: "Vanilla Milkshake",
                    price: 120,
                    image: "https://i.ytimg.com/vi/e0XQvuVPmOU/maxresdefault.jpg",
                    description: "Smooth and creamy vanilla milkshake made with chilled milk and vanilla essence. Sweet, aromatic, and indulgent for a delightful treat.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 260
                },
                {
                    name: "Cold Coffee",
                    price: 140,
                    image: "https://imgix.bustle.com/mic/xswq175l7mxxfk7fibcwhlhch1t0ygtcu7mhzbzpifjxgqc5ycgxkayyage7rujp.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
                    description: "Chilled coffee blended with milk, ice, and sugar, topped with cream. Refreshing, rich, and full-bodied, perfect for coffee lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 300
                }
            ]
        },

        // 6️⃣ Desserts & Sweets
        {
            category: "Desserts & Sweets",
            id: "desserts",
            items: [
                {
                    name: "Chocolate Brownie",
                    price: 120,
                    image: "https://www.wholesomebellies.com.au/app/uploads/2024/07/Chocolate-Brownie.jpg",
                    description: "Rich, fudgy chocolate brownie with a soft, moist interior and a slightly crisp exterior. Bursting with chocolate flavor, perfect for dessert lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 350
                },
                {
                    name: "Chocolate Lava Cake",
                    price: 150,
                    image: "https://simplyhomecooked.com/wp-content/uploads/2015/02/Chocolate-lava-cake-14.jpg",
                    description: "Warm chocolate cake with molten chocolate center, soft outer layer, and rich, indulgent flavor. Perfect for a decadent dessert experience",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 400
                },
                {
                    name: "Chocolate Ice Cream",
                    price: 100,
                    image: "https://www.thespruceeats.com/thmb/BYOHKcXhja-ez7Fr9obgBrDHJ1Y=/3064x2042/filters:fill(auto,1)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg",
                    description: "Smooth, creamy chocolate ice cream made from rich cocoa and milk. Sweet, indulgent, and perfect for cooling off on a hot day.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 220
                },
                {
                    name: "Vanilla Ice Cream",
                    price: 100,
                    image: "https://www.biggerbolderbaking.com/wp-content/uploads/2018/05/Vanilla-2-Ingredient-Ice-cream-scaled.jpg",
                    description: "Classic vanilla ice cream made with fresh milk and real vanilla essence. Smooth, creamy, and lightly sweet for a timeless dessert treat.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 210
                },
                {
                    name: "Strawberry Ice Cream",
                    price: 100,
                    image: "https://i2.wp.com/trinakrug.com/wp-content/uploads/2020/06/DSC_1416-1080x720.jpg",
                    description: "Fresh strawberry ice cream, creamy and fruity, made with real strawberry puree. Sweet, refreshing, and indulgent for fruity dessert lovers.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 220
                },
                {
                    name: "Gulab Jamun",
                    price: 120,
                    image: "https://theartisticcook.com/wp-content/uploads/2024/10/Gulab-Jamun-with-Milk-Powder.jpg",
                    description: "8 Soft, spongy sweet dumplings soaked in fragrant sugar syrup. Warm, sugary, and melt-in-your-mouth delightful, a classic Indian dessert.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 300
                },
                {
                    name: "Rasgulla",
                    price: 100,
                    image: "https://recipes.timesofindia.com/photo/52743612.cms?imgsize=700158",
                    description: "8 Soft, spongy cheese balls soaked in light sugar syrup. Sweet, light, and refreshing, perfect to conclude a meal or enjoy anytime.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 250
                },
                {
                    name: "Falooda",
                    price: 150,
                    image: "https://www.cookwithkushi.com/wp-content/uploads/2019/06/best_falooda_ice_cream_Dessert_drink_Indian.jpg",
                    description: "A layered dessert beverage made with vermicelli, sweet basil seeds, rose syrup, milk, and ice cream. Creamy, sweet, and refreshing with a variety of textures.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 350
                },
                {
                    name: "Kulfi",
                    price: 80,
                    image: "https://www.masala.tv/wp-content/uploads/2017/05/Kesar_Pista_Kulfi_Recipe_Indian_Ice_Cream-1-2.jpg",
                    description: "Traditional Indian frozen dessert made with thickened milk, flavored with cardamom or pistachio. Creamy, dense, and richly flavored for a luxurious treat.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 300
                },
                {
                    name: "Chocolate Pastry",
                    price: 100,
                    image: "https://thecookbook.pk/wp-content/uploads/2019/07/Chocolate-Pastry-Recipe.jpg",
                    description: "Rich, velvety layers of chocolate sponge filled with silky ganache. Finished with a glossy glaze for a decadent bite.",
                    vegNonVeg: "veg",
                    spiceLevel: "none",
                    calories: 250
                }
            ]
        }
    ]


return (
    <MenuContext.Provider value={menuData}>
        {children}
    </MenuContext.Provider>
);
};

