
// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import FoodMenu from "./components/FoodMenu";
// import Footer from "./components/Footer";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Success from "./pages/Success";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import PrivateRoute from "./components/PrivateRoute";
// import Landing from "./pages/Landing";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// function App() {

//   /* ================= CART STATE ================= */
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   /* ================= SAVE LOCAL STORAGE ================= */
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   /* ================= ADD TO CART ================= */
//   const addToCart = (food) => {

//     setCart((prevCart) => {

//       const itemIndex = prevCart.findIndex(
//         (item) => item.id === food.id
//       );

//       // ✅ already exists → increase qty
//       if (itemIndex !== -1) {
//         const updatedCart = [...prevCart];

//         updatedCart[itemIndex] = {
//           ...updatedCart[itemIndex],
//           quantity:
//             updatedCart[itemIndex].quantity + 1,
//         };

//         return updatedCart;
//       }

//       // ✅ new item
//       return [...prevCart, { ...food, quantity: 1 }];
//     });

//     // ✅ toast message
//     toast.success(`${food.name} added to cart`);
//   };

//   /* ================= INCREASE ================= */
//   const increaseQty = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   /* ================= DECREASE ================= */
//   const decreaseQty = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   /* ================= REMOVE ================= */
//   const removeFromCart = (id) => {
//     setCart((prevCart) =>
//       prevCart.filter((item) => item.id !== id)
//     );
//   };

//   return (
//     <>
//       {/* ✅ NAVBAR */}
//       <Navbar
//         cartCount={
//           cart.reduce(
//             (total, item) =>
//               total + item.quantity,
//             0
//           )
//         }
//       />

//       {/* ✅ ROUTES */}
//       <Routes>

//         <Route path="/login" element={<Login />} />

//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <FoodMenu addToCart={addToCart} />
//             </>
//           }
//         />

//         <Route
//           path="/cart"
//           element={
//             <Cart
//               cart={cart}
//               increaseQty={increaseQty}
//               decreaseQty={decreaseQty}
//               removeFromCart={removeFromCart}
//             />
//           }
//         />

//         <Route
//           path="/checkout"
//           element={
//             <Checkout
//               cart={cart}
//               setCart={setCart}
//             />
//           }
//         />

//         <Route
//           path="/success"
//           element={<Success />}
//         />

//          <Route
//             path="/menu"
//             element={<Menu addToCart={addToCart} />}
//           />

//          <Route
//             path="/about"
//             element={<About />}
//           />

//           <Route
//               path="/contact"
//               element={<Contact />}
//             />

//             <Route path="/success" element={<Success />} />



//       </Routes>

//       {/* ✅ TOAST CONTAINER */}
//       <ToastContainer position="top-right" autoClose={1500} />

//       {/* ✅ FOOTER */}
//       <Footer />
//     </>
//   );
// }

// export default App;




import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodMenu from "./components/FoodMenu";
import HomeExtras from "./components/HomeExtras";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const location = useLocation();

  /* ================= CART STATE ================= */
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  /* ================= SAVE CART ================= */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ================= ADD TO CART ================= */
  const addToCart = (food) => {

    setCart((prevCart) => {

      const itemIndex = prevCart.findIndex(
        (item) => item.id === food.id
      );

      if (itemIndex !== -1) {

        const updatedCart = [...prevCart];

        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };

        return updatedCart;
      }

      return [...prevCart, { ...food, quantity: 1 }];

    });

    toast.success(`${food.name} added to cart`);
  };

  /* ================= INCREASE ================= */
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* ================= DECREASE ================= */
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* ================= REMOVE ================= */
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  /* ================= HIDE NAVBAR ================= */
  const hideNavbar =
    location.pathname === "/login";

  return (
    <>

      {!hideNavbar && (
        <Navbar
          cartCount={
            cart.reduce(
              (total, item) => total + item.quantity,
              0
            )
          }
        />
      )}

      {/* ================= ROUTES ================= */}

      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FoodMenu addToCart={addToCart} />
              <HomeExtras />
            </>
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Success */}
        <Route path="/success" element={<Success />} />

        {/* Menu */}
        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <ToastContainer position="top-right" autoClose={1500} />

      {!hideNavbar && <Footer />}

    </>
  );
}

export default App;