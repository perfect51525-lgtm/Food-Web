import React, { useState, useEffect, useRef } from "react";
import "./LocationPicker.css";

const LocationPicker = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(
    localStorage.getItem("userLocation") || ""
  );
  const [manualAddress, setManualAddress] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser");
      return;
    }

    setLocation("Fetching location...");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
          const data = await response.json();
          
          let addressName = "";
          if (data && data.display_name) {
            // Use the full proper address provided by the API
            addressName = data.display_name;
          } else {
            addressName = `Lat ${lat.toFixed(2)}, Lon ${lon.toFixed(2)}`;
          }

          setLocation(addressName);
          localStorage.setItem("userLocation", addressName);
        } catch (error) {
          const fallback = `Lat ${lat.toFixed(2)}, Lon ${lon.toFixed(2)}`;
          setLocation(fallback);
          localStorage.setItem("userLocation", fallback);
        }

        setOpen(false);
      },
      () => {
        alert("Failed to fetch location. Please ensure location permissions are enabled.");
        setLocation(localStorage.getItem("userLocation") || "");
      }
    );
  };

  const saveManualAddress = (e) => {
    e.preventDefault();
    if (manualAddress.trim()) {
      setLocation(manualAddress);
      localStorage.setItem("userLocation", manualAddress);
      setManualAddress("");
      setOpen(false);
    }
  };

  const savedAddress = localStorage.getItem("userLocation");

  return (
    <div className="location-wrapper" ref={dropdownRef}>
      
      {/* PROFESSIONAL INPUT BAR */}
      <div
        className={`location-bar ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="pin-icon">📍</span>
        <div className="location-text">
          <span className="title">Delivery to</span>
          <span className="address-value">
            {location || "Select your location"}
          </span>
        </div>
        <span className={`arrow ${open ? "rotate" : ""}`}>▼</span>
      </div>

      {/* DROPDOWN MODAL */}
      {open && (
        <div className="location-dropdown">
          
          <div className="dropdown-header">
            <h3>Add a delivery address</h3>
          </div>

          {/* FETCH CURRENT LOCATION BUTTON */}
          <div className="current-location-btn" onClick={getCurrentLocation}>
            <div className="icon">🎯</div>
            <div className="btn-text">
              <h4>Use Current Location</h4>
              <p>Fetch instantly using GPS</p>
            </div>
          </div>

          <div className="divider"><span>OR</span></div>

          {/* MANUAL SAVE ADDRESS FORM */}
          <form className="manual-address-form" onSubmit={saveManualAddress}>
            <input 
              type="text" 
              placeholder="Enter complete address..." 
              value={manualAddress}
              onChange={(e) => setManualAddress(e.target.value)}
              autoFocus
            />
            <button type="submit">Save Address</button>
          </form>

          {/* SAVED ADDRESSES */}
          {savedAddress && (
            <div className="saved-addresses-section">
              <h4>Saved Addresses</h4>
              <div className="saved-address-card" onClick={() => setOpen(false)}>
                <div className="icon">🏠</div>
                <div className="details">
                  <h5>Home</h5>
                  <p>{savedAddress}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default LocationPicker;