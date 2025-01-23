// /pages/history.js or /pages/history/index.js
import Layout from "@/components/layout/Layout";

import { useState } from "react";

import React from 'react';


import "react-datepicker/dist/react-datepicker.css";

import { FaWifi, FaClock, FaPhoneAlt, FaUtensils } from "react-icons/fa";





const HistoryPage = () => {

  const [childrenCount, setChildrenCount] = useState(0);
  const incrementChildren = () => {
    setChildrenCount(childrenCount + 1);
  };

  const decrementChildren = () => {
    if (childrenCount > 0) setChildrenCount(childrenCount - 1);
  };


  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (index) => {
    setSelectedCard(index);
  };

  const cards = [
    {
      title: "Premium Sedan",
      features: [
        { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
        { icon: <FaClock />, label: "Punctual service" },
        { icon: <FaPhoneAlt />, label: "Cell phone chargers" },
        { icon: <FaUtensils />, label: "Complimentary water" },
      ],
      image: "/img/car1.png",
      price: "0.00 USD",
      badge: "Best price",
      badgeColor: "red",
      
    },
    {
      title: "Premium SUV",
      features: [
        { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
        { icon: <FaClock />, label: "Punctual service" },
      ],
      
      image: "/img/car3.png",
      price: "0.00 USD",
      badge: "Most popular",
      badgeColor: "orange",
     
    },

    {
      title: "Premium Sedan",
      features: [
        { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
        { icon: <FaClock />, label: "Punctual service" },
        { icon: <FaPhoneAlt />, label: "Cell phone chargers" },
        { icon: <FaUtensils />, label: "Complimentary water" },
      ],
      image: "/img/car2.png",
      price: "0.00 USD",
      badge: "Best price",
      badgeColor: "green",
    },
    {
      title: "Premium SUV",
      features: [
        { icon: <FaWifi />, label: "Complimentary Wi-Fi" },
        { icon: <FaClock />, label: "Punctual service" },
      ],
      image: "/img/car1.png",
      price: "0.00 USD",
      badge: "Most popular",
      badgeColor: "blue",
    },
  ];















    const [isOpen, setOpen] = useState(false)

 const [activeTab, setActiveTab] = useState("one-way");
  const [suggestions, setSuggestions] = useState([]);
  const [locationInput, setLocationInput] = useState("");

  const handleLocationChange = (e) => {
    const query = e.target.value;
    setLocationInput(query);

    // Simulating location suggestions (use an API like Google Places in real scenarios)
    const mockLocations = ["New York", "Los Angeles", "San Francisco", "Chicago", "Miami"];
    if (query) {
      setSuggestions(mockLocations.filter((location) => location.toLowerCase().includes(query.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (location) => {
    setLocationInput(location);
    setSuggestions([]);
  };



  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (formType) => {
    setActiveForm(formType); // Set the active form type based on button clicked
  };

  const closeForm = () => {
    setActiveForm(null); // Close the form
  };







  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [fromValue, setFromValue] = useState("");
  const [dropoffValue, setDropoffValue] = useState("");

  // Example list of locations for autocomplete
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "San Francisco",
    "Boston",
    "Las Vegas",
    "Seattle",
    "Miami",
    "Atlanta",
  ];

  // Handle input changes for "From"
  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromValue(value);
    if (value) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setFromSuggestions(filtered);
    } else {
      setFromSuggestions([]);
    }
  };

  // Handle input changes for "Dropoff"
  const handleDropoffChange = (e) => {
    const value = e.target.value;
    setDropoffValue(value);
    if (value) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setDropoffSuggestions(filtered);
    } else {
      setDropoffSuggestions([]);
    }
  };

  // Select a suggestion for "From"
  const selectFromSuggestion = (suggestion) => {
    setFromValue(suggestion);
    setFromSuggestions([]);
  };

  // Select a suggestion for "Dropoff"
  const selectDropoffSuggestion = (suggestion) => {
    setDropoffValue(suggestion);
    setDropoffSuggestions([]);
  };









  const reviews = [
    { id: 1, image: '/img/dip1.png', rating: 4, text: ' The doctor and techs informed me of the medical issue and gave treatment on site including a demonstration of how to administer.' },
    { id: 2, image: '/img/dip2.png', rating: 5, text: ' Incredible place for such a demanding job, handling every pet that I saw with so much love and care.' },
    { id: 3, image: '/img/dip3.png', rating: 3, text: ' The doctor and techs informed me of the medical issue and gave treatment on site including a demonstration of how to administer. ' },
    { id: 4, image: '/img/dip1.png', rating: 4, text: ' Incredible place for such a demanding job, handling every pet that I saw with so much love and care.' },
    { id: 5, image: '/img/dip2.png', rating: 5, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 6, image: '/img/dip3.png', rating: 5, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 7, image: '/img/dip1.png', rating: 4, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 8, image: '/img/dip2.png', rating: 3, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
    { id: 9, image: '/img/dip3.png', rating: 4, text: 'I have been dealing with chronic back and neck pain due to my line of work. Dr. Nathan has been so helpful in treating and helping to maintain my discomfort. He is knowledgeable, polite, courteous and polite' },
  ];







    return (
        <>
             


<Layout>






  <div className="app" >
  {/* Navbar */}

  {/* Hero Section */}
  <main className="hero">
  <div className="top-buttons">
        <button className="top-btn" onClick={() => handleButtonClick("chauffeur")}>
          Chauffeur
        </button>
        <button className="top-btn" onClick={() => handleButtonClick("flight")}>
          Flight
        </button>
        <button className="top-btn" onClick={() => handleButtonClick("hotel")}>
          Hotel
        </button>
        </div>

        {activeForm && (
  <div className="form-container">
    <div className="form-content">
      {/* Picture Section */}
      
      <div className="image-section">
        <img
          src={`/img/seats.png`} // Assuming each form has a related image
         
          className="form-image"
        />
      </div>

      {/* Form Section */}
      <div className="form-section">
        {/* Close Icon */}
        <div className="close-icon" onClick={closeForm}>
          ✖
        </div>

        <h2>Comming Soon</h2>
        <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" > Join us as we expand our services to include Business and First Class tickets across 300+ airlines, as well as bookings for luxury hotels.

Stay tuned and get ready to redefine your travel experience with Bookinglane!{activeForm}</p>
        <input type="email" placeholder="Enter your email" className="form-input" />
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  </div>
)}




 










    <h1>Looking for executive car service?</h1>


    <div className="container"style={{marginBottom:'80px'}}>
  {/* Tabs */}
  <div className="tabs" style={{ background: 'rgba(61, 59, 59, 0.8)', }}>
    <button style={{color:'white'}}
      className={activeTab === "one-way" ? "tab active" : "tab"}
      onClick={() => setActiveTab("one-way")}
    >
      One way
    </button>
    <button style={{color:'white'}}
      className={activeTab === "round-trip" ? "tab active" : "tab"}
      onClick={() => setActiveTab("round-trip")}
    >
      Round trip
    </button>
    <button style={{color:'white'}}
      className={activeTab === "hourly" ? "tab active" : "tab"}
      onClick={() => setActiveTab("hourly")}
    >
      Hourly
    </button>
  </div>

  {/* Search Engine */}
  <div className="search-box">
    <div className="autocomplete">
      <input
        type="text"
        placeholder="From"
        className="input"
        value={fromValue}
        onChange={handleFromChange}
      />
      {fromSuggestions.length > 0 && (
        <ul className="suggestions">
          {fromSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectFromSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Dropoff Input */}
    <div className="autocomplete">
      <input
        type="text"
        placeholder="Dropoff"
        className="input"
        value={dropoffValue}
        onChange={handleDropoffChange}
      />
      {dropoffSuggestions.length > 0 && (
        <ul className="suggestions">
          {dropoffSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => selectDropoffSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="date-picker">
      <input type="date" defaultValue="2025-01-20" />
    </div>
    <div className="time-picker">
      <input type="time" defaultValue="04:40" />
    </div>
    <button className="search-btn">🔍</button>
  </div>
</div>







    {/* Information Section */}
    <div className="info-section">
      <div className="info">
        <span>✔️</span> Trusted by 2,500+ companies for seamless executive and corporate travel management
      </div>
      <div className="info">
        <span>✔️</span> Facilitating 100,000+ luxury transfers across US, UK, Germany, and France with unmatched reliability
      </div>
      <div className="info">
        <span>✔️</span> Dedicated 24/7 concierge support for every journey, from booking to drop-off
      </div>
    </div>
  </main>
</div>




<style jsx>{
  `
  /* Form Container */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
}

.form-content {
  display: flex;
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  flex-wrap: wrap; /* Added flex-wrap for responsiveness */
}

.image-section {
  flex: 1;
  padding-right: 20px;
}

.form-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.form-section {
  flex: 1;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
}

.signup-btn {
  width: 100%;
  padding: 10px;
  background-color:rgb(32, 32, 150);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.signup-btn:hover {
  background-color: #45a049;
}

.close-btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #ff3b3b;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #e63946;
}

/* Top buttons (Chauffeur, Flight, Hotel) */
.top-buttons {
  margin-bottom: 20px;
  margin-left:25px;
  border-radius: 100px;
  width: 30%;
  background-color: rgba(58, 55, 55, 0.8);
  display: flex;
  justify-content: center; /* Center buttons */
  gap: 1rem;
}

.top-btn {
  padding: 10px 20px;
  background-color: rgb(53, 45, 135);
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.top-btn:hover {
  background-color: #45a049;
}

/* Autocomplete Text Fields */
.autocomplete {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
}

.suggestions {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.suggestion {
  padding: 8px;
  cursor: pointer;
}

.suggestion:hover {
  background-color:rgb(6, 6, 6);
}

/* Date and Time Pickers */
.date-picker,
.time-picker {
  flex: 1;
  min-width: 150px;
}

.date-picker input,
.time-picker input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
}

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.search-box {
  display: flex;
  align-items: center; /* Vertically center the items */
  justify-content: space-between; /* Distribute space between items */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

.autocomplete {
  margin-right: 10px; /* Space between the inputs */
}

.date-picker,
.time-picker {
  margin-right: 10px; /* Space between the date/time pickers and other elements */
}

.search-btn {
  border-radius: 20px;
  margin-left: 10px; /* Space between the search button and other inputs */
  padding: 10px;
  background-color: rgb(14, 51, 124);
  color: white;
  border: none;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #45a049;
}

.container {
  margin-left: 250px;
  width: 900px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Tabs */
.tabs {
  margin-bottom: 20px;
}

.tab {
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #ddd;
  margin-right: 10px;
  cursor: pointer;
}

.tab.active {
  background-color: rgb(24, 9, 139);
  color: white;
}

/* Hero Section */
.hero {

  
 
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center;


background-color: rgb(0, 0, 0);




  padding: 2rem;
  
}

.hero h1 {
  margin-left: 250px;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

/* Top Buttons */
.top-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Info Section */
.info-section {
 margin-left:50px;
margin-right:50px;

  background-color: rgba(56, 54, 54, 0.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
  color: white;
  border-radius: 5px;
  gap: 1rem;
}

.info {
  max-width: 300px;
  text-align: left;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
    margin-left: 0; /* Remove left margin for smaller screens */
  }

  .search-box {
    flex-direction: column;
    align-items: stretch;
  }

  .autocomplete {
    margin-right: 0;
  }

  .input,
  .date-picker input,
  .time-picker input {
    width: 100%;
    margin-bottom: 10px;
  }

  .info-section {
    flex-direction: column;
    align-items: center;
  }

  .tabs .tab {
    font-size: 1rem;
  }

  .container {
    margin-left: 0;
    width: 100%;
  }

  .top-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .top-btn {
    width: 100%;
    margin-bottom: 10px;
  }

  .search-btn {
    width: 100%;
    margin-left: 0;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.5rem;
  }

  .tabs .tab {
    font-size: 0.9rem;
  }

  .top-btn {
    padding: 0.5rem 1rem;
    font-size: 14px;
  }

  .form-content {
    flex-direction: column; /* Stack image and form for smaller screens */
    padding: 15px;
    width: 90%;
  }

  .image-section {
    padding-right: 0;
    flex: none;
  }

  .form-section {
    flex: none;
  }
}


  
  
  `}


</style>





<section className="unique-card-section"style={{marginTop:'50px',marginLeft:'120px',marginRight:'150px', 
}}>
      <div className="unique-card">
        <img src="/img/icon1.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Free cancellation</h2>
        <p className="unique-card-description">Free cancel up to 12 hours before pickup</p>
        
      </div>

      <div className="unique-card">
        <img src="/img/icon2.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Personal account</h2>
        <p className="unique-card-description">View or edit your reservation any time. Log in or Sign up.</p>
       
      </div>
      <div className="unique-card">
        <img src="/img/icon1.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Licensed Chauffeurs</h2>
        <p className="unique-card-description">Polite, professional, and well-trained
        </p>
        
      </div>

      <div className="unique-card">
        <img src="/img/icon3.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">24/7 Support
        </h2>
        <p className="unique-card-description">+1 (415) 384-5039
        support@bookinglane.com.</p>
    
      </div>

      <div className="unique-card">
        <img src="/img/icon1.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Instant Quote</h2>
        <p className="unique-card-description">With just a few clicks, get your quote and book instantly.</p>
        
      </div>
      <div className="unique-card">
        <img src="/img/icon1.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Instant Quote</h2>
        <p className="unique-card-description">With just a few clicks, get your quote and book instantly.</p>
        
      </div>
    </section>

<style jsx>{
  `.unique-card-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
}

.unique-card {
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
}

.unique-card-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.unique-card-title {
  font-size: 20px;

}

.unique-card-description {
  font-size: 14px;
  margin: 10px 0;
}

.unique-card-button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.unique-card-button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .unique-card {
    width: 100%; /* Two cards per row on medium screens */
  }
}

@media (max-width: 768px) {
  .unique-card {
    width: 100%; /* One card per row on small screens */
  }
}

  
  `}

</style>



<div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
       
        
      }}
    >
      {/* Cards Section */}
      <div style={{ flex: 2 }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              fontSize:'12px',
              display: "flex",
              position: "relative",
              border: `2px solid ${selectedCard === index ? "blue" : "#ccc"}`,
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              alignItems: "center",
              gap: "1rem",
              transition: "border 0.3s ease",
              marginLeft:'100px',
              marginRight:'140px',
            }}
          >
            {/* Radio Button at Top Right */}
            <input
              type="radio"
              name="card"
              value={index}
              checked={selectedCard === index}
              onChange={() => handleCardSelection(index)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                transform: "scale(1.5)",
              }}
            />

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "10px",
                backgroundColor: card.badgeColor,
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
              fontSize:"10px",
              }}
            >
              {card.badge}
            </div>

            {/* Image */}
            <div>
              <img
                src={card.image}
                alt="Car"
                style={{ borderRadius: "10px", width: "150px" }}
              />
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <h3>{card.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {card.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    {feature.icon}
                    {feature.label}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
                All-in price: {card.price}
              </div>
            </div>
          </div>
        ))}
      </div>

     </div>
     




  <section className="contact-us">
      <h2>Let’s plan your trip</h2>
      <form className="contact-form" >
        <div className="form-group">
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="from" style={{ display: "block", marginBottom: "0.5rem" }}>
            From *
          </label>
          <input
            type="text"
            id="from"
            placeholder="Enter pickup location"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
          />
        </div>
        </div>

        <div className="form-group">
         
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="dropoff" style={{ display: "block", marginBottom: "0.5rem" }}>
            Dropoff *
          </label>
          <input
            type="text"
            id="dropoff"
            placeholder="Enter dropoff location"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
          />
        </div>
        </div>

        <div className="form-group">
        <div style={{ flex: 1 }}>
            <label htmlFor="pickup-time" style={{ display: "block", marginBottom: "0.5rem" }}>
              Pickup time *
            </label>
            <input
              type="time"
              id="pickup-time"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "5px" }}
            />
          </div>
        </div>
         
        

        <div className="form-group">
        <div style={{ marginBottom: "1rem" ,}}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>Children *</label>
            <div
              style={{
               
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "0.5rem",
              }}
            >
              <button
                type="button"
                onClick={decrementChildren}
                style={{
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                -
              </button>
              <span>{childrenCount}</span>
              <button
                type="button"
                onClick={incrementChildren}
                style={{
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          
        </div>

        <button type="submit" className="contact-btn">
          Continue
        </button>
      </form>
    </section>


<style jsx>{
    `
    .contact-us {
  padding: 2rem;
  background-color: #f9f9f9;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 28px;
}

.contact-us h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 24px;
  color: #333;
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 16px;
  margin-bottom: 5px;
  color:none;
  
}
  .form-group input, .form-group select, .form-group textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  width: 100%;
}

  
.phone-input-container {
  display: flex;
  gap: 10px;
}

.phone-input-container select {
  width: 30%;
}

.phone-input-container input {
  width: 70%;
  color:none;
}

.contact-btn {
  background-color:rgb(30, 71, 115);
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-btn:hover {
  background-color: #0056b3;
}

    
    `}

</style>






  <div className="review-slider"style={{marginBottom:'30px'}}>
      <div className="slider-track">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt="User Icon" className="review-icon" />
            <div className="rating">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>

<style jsx>{
    
    
    `
    /* Slider Container */
.review-slider {
  width: 100%;
  overflow: hidden; /* Hide overflow to create a slider effect */
  position: relative;
  padding: 20px;
}

/* Slider Track */
.slider-track {
  display: flex;
  gap: 20px;
  animation: scroll 20s linear infinite;
}

/* Review Card */
.review-card {
  width: 250px;
  flex-shrink: 0; /* Prevent cards from shrinking */
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
}

/* Review Icon */
.review-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 10px;
  border-radius: 50%;
  object-fit: cover;
}

/* Rating Stars */
.rating {
  font-size: 18px;
  color: #ffcc00;
  margin-bottom: 10px;
}

/* Review Text */
.review-text {
  font-size: 14px;
  color: #333;
}

/* Smooth Scrolling Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .review-card {
    width: 200px;
  }
}

    
    `}

</style>  










            </Layout>
        </>
       
    );
};

export default HistoryPage; // Make sure to export it as default
