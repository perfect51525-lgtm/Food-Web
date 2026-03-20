import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sendOrderEmail } from "../emailService";
import { QRCodeCanvas } from "qrcode.react";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [paymentMethod, setPaymentMethod] = useState("qr");
  const [email, setEmail] = useState("");

  // YOUR UPI ID
  const merchantUpi = "7488463313@upi";

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const {
    totalPrice = subtotal,
    discountAmount = 0,
    gst = subtotal * 0.18,
    grandTotal = subtotal * 1.18
  } = location.state || {};

  const totalAmount = parseFloat(grandTotal).toFixed(2);

  const handlePayment = () => {

    if (!email || cart.length === 0) return;

    // Send email using our new service
    sendOrderEmail(cart, totalPrice, discountAmount, gst, totalAmount, email);

    setCart([]);

    navigate("/success");
  };

  return (
    <div className="checkout-container">

      <h2 className="checkout-title">Checkout 💳</h2>

      <div className="checkout-total">
        Total Payable Quantity: ₹ {totalAmount}
      </div>

      {/* EMAIL */}
      <div className="checkout-section">
        <h3 className="checkout-section-title">Contact Information</h3>
        <input
          type="email"
          className="checkout-input"
          placeholder="Enter your email to receive receipt"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* PAYMENT METHOD */}
      <div className="checkout-section">

        <h3 className="checkout-section-title">Select Payment Method</h3>

        <div className="checkout-radio-group">
          <label className={`checkout-radio-label ${paymentMethod === 'qr' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="qr"
              checked={paymentMethod === "qr"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI Payment
          </label>

          <label className={`checkout-radio-label ${paymentMethod === 'card' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card Payment
          </label>
        </div>

      </div>

      {/* QR PAYMENT */}

      {paymentMethod === "qr" && (

        <div className="checkout-section checkout-qr-box">

          <h4 className="checkout-section-title" style={{ borderBottom: "none", marginBottom: 0 }}>Scan QR to Pay</h4>

          <QRCodeCanvas
            value={`upi://pay?pa=${merchantUpi}&pn=FoodWeb&am=${totalAmount}&cu=INR`}
            size={220}
            level="H"
          />

          <div style={{ textAlign: "center" }}>
            <p className="checkout-qr-text">UPI ID: <strong>{merchantUpi}</strong></p>
            <p className="checkout-qr-amount">Amount: ₹ {totalAmount}</p>
          </div>

        </div>

      )}

      {/* CARD PAYMENT */}

      {paymentMethod === "card" && (

        <div className="checkout-section">

          <h4 className="checkout-section-title">Enter Card Details</h4>

          <input
            type="text"
            className="checkout-input"
            placeholder="Card Number"
          />

          <input
            type="text"
            className="checkout-input"
            placeholder="Card Holder Name"
          />

          <div style={{ display: "flex", gap: "15px" }}>
            <input
              type="text"
              className="checkout-input"
              placeholder="Expiry Date (MM/YY)"
            />

            <input
              type="text"
              className="checkout-input"
              placeholder="CVV"
            />
          </div>

        </div>

      )}

      {/* CONFIRM BUTTON */}

      <button
        onClick={handlePayment}
        className="checkout-btn"
      >
        Confirm Payment
      </button>

    </div>
  );
};

export default Checkout;