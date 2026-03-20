import React, { useState } from "react";
import "./FoodMenu.css";

const foods = [
  {
    id: 1,
    name: "Burger",
    price: 120,
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 2,
    name: "Pizza",
    price: 250,
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
  },
  {
    id: 3,
    name: "Pasta",
    price: 180,
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
  },
  {
    id: 4,
    name: "Fries",
    price: 100,
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
  },
  {
    id: 5,
    name: "Sandwich",
    price: 150,
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
  },
  {
    id: 6,
    name: "Chicken Biryani",
    price: 220,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
  },
  {
    id: 7,
    name: "Cold Drink",
    price: 50,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500",
  },
  {
    id: 8,
    name: "Ice Cream",
    price: 90,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500",
  },
  {
    id: 9,
    name: "Fried Chicken",
    price: 200,
    category: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
  },
  {
    id: 10,
    name: "Noodles",
    price: 160,
    category: "Fast Food",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: 11,
    name: "Tacos",
    price: 180,
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
  },
  {
    id: 12,
    name: "Paneer Tikka",
    price: 210,
    category: "Veg",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500",
  },
  {
    id: 13,
    name: "Chocolate Cake",
    price: 130,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    id: 14,
    name: "Milkshake",
    price: 110,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
];

const FoodMenu = ({ addToCart }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  /* FILTER LOGIC */
  const filteredFoods = foods.filter((food) => {
    const matchSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || food.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px"
        }}
      />

      {/* CATEGORY FILTER */}
      <div className="category-buttons">
        {["All", "Veg", "Non-Veg", "Fast Food", "Drinks", "Desserts"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MARQUEE FOOD LIST */}
      <div className="marquee-container">
        <div className={`marquee-content ${filteredFoods.length < 5 ? 'no-animation' : ''}`}>
          {filteredFoods.length > 0 ? (
            /* Combine list twice so that endless scroll has enough element runway */
            [...filteredFoods, ...filteredFoods].map((food, index) => (
              <div className="marquee-item" key={index} title={food.name}>
                <img src={food.image} alt={food.name} />
              </div>
            ))
          ) : (
            <p style={{ width: "100%", textAlign: "center", fontSize: "18px", color: "#666" }}>
              No foods found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;