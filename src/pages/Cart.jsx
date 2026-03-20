import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({
  cart,
  increaseQty,
  decreaseQty,
  removeFromCart,
}) => {
  const navigate = useNavigate();

  // ✅ Coupon States
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // ✅ total price with quantity
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // ✅ Apply Coupon Function
  const applyCoupon = () => {
    const formattedCoupon = coupon.trim().toUpperCase();
    if (formattedCoupon === "SAVE10") {
      setDiscountPercent(10);
    } else if (formattedCoupon === "SAVE20") {
      setDiscountPercent(20);
    } else if (formattedCoupon === "SAVE30") {
      setDiscountPercent(30);
    } else {
      alert("Invalid Coupon Code");
      setDiscountPercent(0);
    }
  };

  // ✅ Discount Calculation
  const discountAmount =
    (totalPrice * discountPercent) / 100;

  const finalAmount =
    totalPrice - discountAmount;

  const gst = finalAmount * 0.18;
  const grandTotal = finalAmount + gst;

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        totalPrice,
        discountAmount,
        gst,
        grandTotal
      }
    });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <h3 className="cart-empty">Cart is Empty 😔</h3>
      ) : (
        <div className="cart-content">
          {/* ================= ITEMS SECTION ================= */}
          <div className="cart-left-section">
            <div className="cart-items-list">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />

                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.name}</h3>
                    <p className="cart-item-price">₹ {item.price}</p>
                  </div>

                  <div className="cart-qty-wrapper">
                    <button
                      className="cart-qty-btn"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <span className="cart-qty-text">
                      {item.quantity}
                    </span>

                    <button
                      className="cart-qty-btn"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="cart-remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SUMMARY SECTION ================= */}
          <div className="cart-summary-section">

            {/* ================= COUPON SECTION ================= */}
            <div className="cart-coupon-box">
              <h3 className="cart-box-title">Apply Coupon 🎟️</h3>

              <input
                type="text"
                className="cart-coupon-input"
                placeholder="Enter Coupon Code (e.g. SAVE20)"
                value={coupon}
                onChange={(e) =>
                  setCoupon(e.target.value)
                }
              />

              <button className="cart-coupon-btn" onClick={applyCoupon}>
                Apply
              </button>
            </div>

            {/* ================= BILL SUMMARY ================= */}
            <div className="cart-bill-box">
              <h3 className="cart-box-title">Bill Summary 🧾</h3>

              <div className="cart-bill-row">
                <span>Total:</span>
                <span>₹ {totalPrice}</span>
              </div>

              {discountPercent > 0 && (
                <div className="cart-bill-row" style={{ color: "#40c057", fontWeight: "600" }}>
                  <span>Discount ({discountPercent}%):</span>
                  <span>- ₹ {discountAmount}</span>
                </div>
              )}

              <div className="cart-bill-total">
                <span>Net Amount:</span>
                <span>₹ {finalAmount}</span>
              </div>

              <div className="cart-bill-row">
                <span>GST (18%):</span>
                <span>₹ {gst.toFixed(2)}</span>
              </div>

              <div className="cart-bill-total">
                <span>Grand Total:</span>
                <span>₹ {grandTotal.toFixed(2)}</span>
              </div>

              {/* ✅ Checkout Button */}
              <button
                onClick={handleCheckout}
                className="cart-checkout-btn"
                style={{ marginTop: "15px", width: "100%", padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#ff922b", color: "#fff", fontWeight: "bold", fontSize: "16px", cursor: "pointer", transition: "0.2s" }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
