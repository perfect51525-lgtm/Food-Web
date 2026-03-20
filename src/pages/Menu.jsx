import React, { useState, useEffect } from "react";
import "./Menu.css";

const foods = [

  // ================= VEG (1–8) =================
  { id: 1, name: "Veg Burger", price: 120, category: "Veg", image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg" },
  { id: 2, name: "Veg Pizza", price: 250, category: "Veg", image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
  { id: 3, name: "Paneer Tikka", price: 200, category: "Veg", image: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.jpeg" },
  { id: 4, name: "Veg Sandwich", price: 150, category: "Veg", image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg" },
  { id: 5, name: "Veg Biryani", price: 210, category: "Veg", image: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg" },
  { id: 6, name: "Veg Pasta", price: 170, category: "Veg", image: "https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg" },
  { id: 7, name: "Veg Noodles", price: 180, category: "Veg", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg" },
  { id: 8, name: "Veg Momos", price: 110, category: "Veg", image: "https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg" },

  // ================= NON-VEG (9–16) =================
  { id: 9, name: "Chicken Biryani", price: 220, category: "Non-Veg", image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg" },
  { id: 10, name: "Fried Chicken", price: 200, category: "Non-Veg", image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg" },
  { id: 11, name: "Chicken Pizza", price: 270, category: "Non-Veg", image: "https://images.pexels.com/photos/2619086/pexels-photo-2619086.jpeg" },
  { id: 12, name: "Chicken Burger", price: 160, category: "Non-Veg", image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg" },
  { id: 13, name: "Grilled Chicken", price: 240, category: "Non-Veg", image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg" },
  { id: 14, name: "Fish Fry", price: 230, category: "Non-Veg", image: "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg" },
  { id: 15, name: "Mutton Curry", price: 280, category: "Non-Veg", image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg" },
  { id: 16, name: "Chicken Noodles", price: 180, category: "Non-Veg", image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg" },

  // ================= DRINKS (17–22) =================
  { id: 17, name: "Cold Drink", price: 50, category: "Drinks", image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg" },
  { id: 18, name: "Milkshake", price: 110, category: "Drinks", image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg" },
  { id: 19, name: "Coffee", price: 80, category: "Drinks", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" },
  { id: 20, name: "Green Tea", price: 70, category: "Drinks", image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg" },
  { id: 21, name: "Orange Juice", price: 90, category: "Drinks", image: "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg" },
  { id: 22, name: "Chocolate Shake", price: 130, category: "Drinks", image: "https://images.pexels.com/photos/8805047/pexels-photo-8805047.jpeg" },

  // ================= MUNCHIES (23–28) =================
  { id: 23, name: "French Fries", price: 100, category: "Munchies", image: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg" },
  { id: 24, name: "Nachos", price: 120, category: "Munchies", image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg" },
  { id: 25, name: "Spring Rolls", price: 140, category: "Munchies", image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg" },
  { id: 26, name: "Samosa", price: 40, category: "Munchies", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg" },
  { id: 27, name: "Garlic Bread", price: 90, category: "Munchies", image: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg" },
  { id: 28, name: "Onion Rings", price: 110, category: "Munchies", image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg" },

  // ================= DESSERTS (29–36) =================
  { id: 29, name: "Ice Cream", price: 90, category: "Desserts", image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg" },
  { id: 30, name: "Chocolate Cake", price: 130, category: "Desserts", image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg" },
  { id: 31, name: "Brownie", price: 140, category: "Desserts", image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg" },
  { id: 32, name: "Donut", price: 80, category: "Desserts", image: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg" },
  { id: 33, name: "Cupcake", price: 70, category: "Desserts", image: "https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg" },
  { id: 34, name: "Cheesecake", price: 160, category: "Desserts", image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg" },
  { id: 35, name: "Pancakes", price: 150, category: "Desserts", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
  { id: 36, name: "Waffles", price: 170, category: "Desserts", image: "https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg" },

  // ================= SWEET CRAVINGS (37–50) =================
  { id: 37, name: "Gulab Jamun", price: 150, category: "Sweet Cravings", image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg" },
  { id: 38, name: "Rasgulla", price: 140, category: "Sweet Cravings", image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg" },
  { id: 39, name: "Kaju Katli", price: 260, category: "Sweet Cravings", image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg" },
  { id: 40, name: "Motichoor Laddu", price: 180, category: "Sweet Cravings", image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg" },
  { id: 41, name: "Premium Dark Chocolate", price: 220, category: "Sweet Cravings", image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg" },
  { id: 42, name: "Chocolate Truffles", price: 280, category: "Sweet Cravings", image: "https://images.pexels.com/photos/4051661/pexels-photo-4051661.jpeg" },
  { id: 43, name: "Chocolate Lava Cake", price: 210, category: "Sweet Cravings", image: "https://images.pexels.com/photos/2067451/pexels-photo-2067451.jpeg" },
  { id: 44, name: "Brownie Fudge", price: 190, category: "Sweet Cravings", image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg" },
  { id: 45, name: "Strawberry Cake", price: 150, category: "Sweet Cravings", image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg" },
  { id: 46, name: "Luxury Dessert Combo", price: 480, category: "Sweet Cravings", image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg" }

];

const Menu = ({ addToCart }) => {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Carousel State & Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", // food spread
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", // breakfast/pancakes
    "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg" // burger
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter(food => food.category === selectedCategory);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="menu-page">
      
      {/* PROFESSIONAL CAROUSEL */}
      <div className="carousel-container">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${img})` }}
          >
            <div className="carousel-content">
              <h1>Experience the Best Quality</h1>
              <p>Delicious, fresh, and hand-crafted just for you.</p>
            </div>
          </div>
        ))}
        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? "indicator active" : "indicator"}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <h2>Our Menu</h2>

      {/* CATEGORY FILTER */}
      <div className="category-buttons">
        {["All", "Veg", "Non-Veg", "Drinks", "Desserts", "Sweet Cravings", "Munchies", "Cookies"].map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FOOD GRID */}
      <div className="food-grid">
        {currentFoods.length > 0 ? (
          currentFoods.map(food => (
            <div key={food.id} className="food-card">
              <img src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
              <p>₹ {food.price}</p>
              <button onClick={() => addToCart(food)}>
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", fontSize: "18px", color: "#555" }}>No foods found.</p>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="prev-next-btn"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="prev-next-btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;