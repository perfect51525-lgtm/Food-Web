// import "./Contact.css";

// const Contact = () => {
//   return (
//     <div className="contact">

//       {/* HERO */}
//       <div className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>We would love to hear from you</p>
//       </div>

//       <div className="contact-container">

//         {/* CONTACT INFO */}
//         <div className="contact-info">

//           <h2>Get In Touch</h2>

//           <p>
//             Have questions about your order or our services?
//             Our team is here to help you.
//           </p>

//           <div className="info-box">
//             📧 Email  
//             <p>support@foodweb.com</p>
//           </div>

//           <div className="info-box">
//             📞 Phone  
//             <p>+91 9876543210</p>
//           </div>

//           <div className="info-box">
//             📍 Location  
//             <p>Hyderabad, India</p>
//           </div>

//         </div>

//         {/* CONTACT FORM */}

//         <div className="contact-form">

//           <h2>Send Message</h2>

//           <form>

//             <input
//               type="text"
//               placeholder="Your Name"
//               required
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               required
//             />

//             <textarea
//               placeholder="Your Message"
//               rows="5"
//             />

//             <button type="submit">
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message
    };

    emailjs.send(
      "service_tql4szk",
      "template_jxq8xpb",
      templateParams,
      "HTRp0_zvu3GgyQbVz"
    )
    .then(() => {
      alert("Message Sent Successfully ✅");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    })
    .catch((error) => {
      console.log(error);
      alert("Message Failed ❌");
    });
  };

  return (
    <div className="contact-page">

      {/* HERO */}

      <div className="contact-hero">
        <h1>Contact FoodWeb</h1>
        <p>We are here to help you anytime</p>
      </div>

      {/* CONTACT SECTION */}

      <div className="contact-container">

        {/* LEFT SIDE INFO */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions about your order or food delivery?
            Our support team is always ready to help.
          </p>

          <div className="info-card">
            📧 Email
            <p>support@foodweb.com</p>
          </div>

          <div className="info-card">
            📞 Phone
            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            📍 Location
            <p>Hyderabad, India</p>
          </div>

        </div>

        {/* CONTACT FORM */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <form onSubmit={sendMessage}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* GOOGLE MAP */}

      <div className="map-section">

        <h2>Find Us Here</h2>

        <iframe
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          title="Google Map"
        ></iframe>

      </div>

    </div>
  );
};

export default Contact;