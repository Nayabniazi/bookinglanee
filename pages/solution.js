import Link from "next/link";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "@/components/layout/Layout";

export default function Hero1Slider() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

 // Unique state for this popup
 const [isNewPopupOpen, setNewPopupOpen] = useState(false);

 const toggleNewPopup = () => {
   setNewPopupOpen(!isNewPopupOpen);
 };



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


const [activeCard, setActiveCard] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Sample card data
    const cardData = [
        { id: 1, title: "view Details", image: "/img/chic.png", info: "Bookinglane is premium chauffeier servive in Chicago." },
        // other card data... { id: 1, title: "view Details", image: "/img/chic.png", info: "Bookinglane is premium chauffeier servive in chicago,Ofering luxury sedan and limo services for travellor in city, whenever you need a ride" },
      { id: 2, title: "view Details", image: "/img/san.png", info: "Bookinglane is premium chauffeier servive in Scan Francisco,Ofering luxury sedan and limo services for travellor in city, whenever you need a ride" },
      { id: 3, title: "view Details", image: "/img/mami.png", info: "Bookinglane is premium chauffeier servive in Miami,FL,Ofering luxury sedan and limo services for travellor in city, whenever you need a ride" },
      { id: 4, title: "view Details", image: "/img/new.png", info: "Bookinglane is premium chauffeier servive in New York,Ofering luxury sedan and limo services for travellor in city, whenever you need a ride" },
      { id: 5, title: "view Details", image: "/img/hou.png", info: "Bookinglane is premium chauffeier servive in Houston,Ofering luxury sedan and limo services for travellor in city, whenever you need a ride" },
      { id: 6, title: "view Details", image: "/img/los.png", info: "Bookinglane is premium chauffeier servive in Los Angeles,Ofering luxury sedan and limo services for travellor in city, whenever you need a ride" },

    ];

    const toggleCardInfo = (id) => {
        setActiveCard(activeCard === id ? null : id);
    };

    const onClose = () => {
        setIsPopupOpen(false);
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };




    return (
 <>
  <Layout>

  <div className="app">
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




 










    <h1>Book your chauffeur service</h1>


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
  background-color:rgb(47, 48, 145);
}

.close-btn {
  margin-top: 10px;
  padding: 10px;
  background-color:rgb(255, 255, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.close-btn:hover {
  background-color:rgb(255, 255, 255);
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
  background-color:rgb(144, 145, 189);
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
  padding: 2rem;
  background-color: rgb(6, 5, 5); /* Black background */
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



         

<section className="unique-card-section"style={{marginTop:'50px',marginLeft:'120px',marginRight:'150px'}}>
      <div className="unique-card">
        <img src="/img/icon1.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Instant Quote</h2>
        <p className="unique-card-description">With just a few clicks, get your quote and book instantly.</p>
        
      </div>

      <div className="unique-card">
        <img src="/img/icon2.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Chauffeur by hour</h2>
        <p className="unique-card-description">Professional chauffeurs available for hourly hire or full-day service.</p>
       
      </div>

      <div className="unique-card">
        <img src="/img/icon3.png" alt="Icon" className="unique-card-icon" />
        <h2 className="unique-card-title">Solo or group travel
        </h2>
        <p className="unique-card-description">Custom trip planning options available, ideal for both groups and individuals.</p>
    
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
  font-weight: bold;
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




<h2 style={{marginLeft:'150px',marginTop:'100px'}}>
Exclusive partnership opportunities
</h2>
<div className="card-container"style={{marginLeft:'150px',marginRight:'180px',marginTop:'100px'}}>

      <div className="card">
        <div className="card-image">
          <img src="/img/coprate.png" alt="Card Image" />
          <div className="card-overlay">
            <h2 className="card-title">Coporation and Businesses</h2>
            <p className="card-description">One-stop travel management</p>
            <button  onClick={toggleNewPopup}  className="card-button">Get in touch</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="/img/travel.png" alt="Card Image" />
          <div className="card-overlay">
            <h2 className="card-title">Travel agents and event planners</h2>
            <p className="card-description">Streamline bookings with our API</p>
            <button   className="card-button"
        onClick={toggleNewPopup} >Request Info</button>
          </div>
        </div>
      </div>


      {/* Pop-up Modal */}
      {isNewPopupOpen && (
        <div className="new-popup-overlay" style={{marginTop:'50px'}}>
          <div className="new-popup-container">
            {/* Image Section */}
            <div className="popup-image-section">
              <img
                src="/img/picky.png"
                alt="Form Illustration"
                className="popup-image"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px 0 0 10px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Form Section */}
            <div className="popup-form-section" style={{ padding: "1.5rem",}}>
              <h2 style={{ marginBottom: "1rem", color: "#333" }}>Get in Touch</h2>

              <form>
                {/* Name Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="new-name" style={{ display: "block", marginBottom: "0.5rem" }}>
                   First Name *
                  </label>
                  <input
                    type="text"
                    id="new-name"
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="new-name" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Title/Position
                  </label>
                  <input
                    type="text"
                    id="new-name"
                    placeholder="Title/Position"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="new-name" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Company Website *
                  </label>
                  <input
                    type="text"
                    id="new-name"
                    placeholder="Company Website Link"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="new-name" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Business Email"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>

                {/* Comment Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="new-comment" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Comment *
                  </label>
                  <textarea
                    id="new-comment"
                    placeholder="Please provide additional details"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      resize: "none",
                      height: "100px",
                    }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "15px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>

              {/* Close Button */}
              <button
                onClick={toggleNewPopup}
                style={{
                  marginTop: "1rem",
                  padding: "10px 20px",
                  backgroundColor: "white",
                  color: "red",
                  border: "none",
                  borderRadius: "15px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
 

      <div className="card">
        <div className="card-image">
          <img src="/img/influ.png" alt="Card Image" />
          <div className="card-overlay">
            <h2 className="card-title">Influencers and public figures</h2>
            <p className="card-description">Join our Influencer Program today</p>
            <button   onClick={toggleNewPopup} className="card-button">Apply</button>
          </div>
        </div>
      </div>
    </div>

<section style={{ padding: "50px 20px", marginTop: '100px' }}>
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Where to Next?</h3>
                {/* Card Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                            }}
                            onClick={() => toggleCardInfo(card.id)}
                        >
                            {/* Card Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            {/* Card Title */}
                            <div style={{ padding: "15px" }}>
                                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{card.title}</h3>
                                {activeCard === card.id && (
                                    <p style={{ fontSize: "14px", color: "#555" }}>{card.info}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

          

            {/* Popup Section */}
            {isPopupOpen && (
                <div className="overlay">
                    <div className="popup">
                        <button className="close-btn" onClick={onClose}>
                            &times;
                        </button>
                        <div className="popup-content">
                            <div className="image-section">
                                <img src="/path-to-your-image.jpg" alt="Popup Visual" />
                            </div>
                            <div className="form-section">
                                <h2>Tell us more about yourself.</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="First name" required />
                                        <input type="text" placeholder="Last name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone number" required />
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <label>How often do you organize events?</label>
                                        <div className="options">
                                            <button type="button">1-3</button>
                                            <button type="button">4-6</button>
                                            <button type="button">7-10</button>
                                            <button type="button">10+</button>
                                        </div>
                                    </div>
                                    <textarea placeholder="Share more about your needs" rows="3"></textarea>
                                    <button type="submit" className="submit-btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .popup {
                    background-color: #fff;
                    width: 60%;
                    max-width: 800px;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    position: relative;
                }

                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 24px;
                    color: #333;
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .popup-content {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                }

                .image-section img {
                    width: 100%;
                    max-width: 200px;
                    border-radius: 8px;
                    object-fit: cover;
                }

                .form-section {
                    flex-grow: 1;
                }

                input, textarea {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                }

                .submit-btn {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }

                .submit-btn:hover {
                    background-color: #0056b3;
                }
            `}</style>

        
    <section className="image-section">
    <h3 style={{marginLeft:'200px',marginBottom:'50px',marginTop:'80px'}}>Trusted by professionals at</h3>
  <div className="image-row top-row"style={{marginLeft:'200px',marginRight:'350px'}}>
    
    <img src="/img/netflix.png" alt="Image 2" className="image"style={{width:'205px'}} />
    <img src="/img/google.png" alt="Image 3" className="image"style={{width:'205px'}} />
    <img src="/img/apple.png" alt="Image 4" className="image"style={{width:'100px'}} />
    
  </div>
  <div className="image-row bottom-row"style={{marginLeft:'200px',marginRight:'350px'}}>
    <img src="/img/microsoft.png" alt="Image 6" className="image" style={{width:'250px'}}/>
    <img src="/img/adidas.png" alt="Image 7" className="image" style={{width:'170px',marginLeft:'180px'}}/>
    <img src="/img/more.png" alt="Image 8" className="image"style={{marginLeft:'190px',width:'250px'}} />
    
  </div>
</section>


<style jsx>{
`
.image-section {
padding: 20px;
}

.image-row {
display: flex;
justify-content: space-between;
margin-bottom: 20px; /* Space between top and bottom rows */
}

.image {
width: 6%; /* Adjust the image width */
height: auto;
object-fit: cover; /* Ensures the images maintain their aspect ratio */
border-radius: 8px; /* Optional for rounded corners */
}

/* Responsive Design */
@media (max-width: 1200px) {
.image {
width: 20%; /* 4 images per row on medium screens */
}
}

@media (max-width: 768px) {
.image {
width: 48%; /* 2 images per row on small screens */
}
}

@media (max-width: 480px) {
.image {
width: 100%; /* 1 image per row on extra small screens */
}
}



`}

</style>






  <div className="section-wrapper"style={{marginLeft:'130px',marginRight:'130px',marginTop:'80px'}}>
      {/* Left Card */}
      <div className="card dark-card">
        <h2 style={{color:'white',fontSize:'25px',marginBottom:'200px'}}>Looking to hire a full-time driver?</h2>
        <div className="card-content">
        <h2 style={{color:'white',fontSize:'25px',marginBottom:'40px'}}>What you receive?</h2>
          <ul>
            <li style={{marginBottom:'20px'}}>✅ Full-time professional chauffeur</li>
            <li style={{marginBottom:'20px'}}>✅ Customized schedule that fits your busy lifestyle</li>
            <li style={{marginBottom:'20px'}}>✅ Flexible and transparent pricing</li>
          </ul>
          <a href="Bookingcars" style={{ textDecoration: 'none' }}>
  <button className="cta-button"  style={{ marginTop: '20px', borderRadius: '20px' }}>
    Get started →
  </button>
</a>

       


</div>


    </div>
      {/* Right Card */}
      <div className="card light-card">
        <div className="text-and-images">
          {/* Left Side: Text */}
          <div className="text-content">
            <h2 style={{color:'black',fontSize:'25px',marginBottom:'20px'}} >The easy way to plan any event.</h2>
            <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" >
              Partnering with industry-leading event planners, we ensure that
              every aspect of your event logistics, including transportation
              needs, is expertly managed from start to finish.
            </p>
            <ul>
              <li className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn"   >✅ Stress-free planning</li>
              <li className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn"  >✅ All logistics and execution are handled by professionals</li>
              <li className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn"  >✅ We cover your transportation needs at 100%</li>
            </ul>
            <button className="cta-button"     onClick={togglePopup}  style={{borderRadius:'20px',width:'200px'}}>Get started →</button>
          </div>



          {isOpen && (
        <div
          style={{
            position: 'fixed',
           top:"0",
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height:'700px',
              marginTop:'100px',
              width: '700px',
              backgroundColor: 'white',
              borderRadius: '10px',
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            {/* Left Image Section */}
            <div
              style={{
                flex: 1,
                backgroundImage: 'url("/img/backu.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            {/* Right Form Section */}
            <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1rem' }}>Get in Touch</h3>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                   Last  Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Email *
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="email"
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                    required />
                </div>
             
                <div className="form-group">
                                        <label>How often do you organize events?</label>
                                        <div className="options">
                                            <button style={{backgroundColor:'blue',   padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',
                    borderradius: "5px"}} type="button">1-3</button>
                                            <button style={{backgroundColor:'blue', padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',}}  type="button">4-6</button>
                                            <button style={{backgroundColor:'blue', padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',}}  type="button">7-10</button>
                                            <button style={{backgroundColor:'blue', padding: "7px 20px",color:'whitesmoke',borderRadius:'15px',}}  type="button">10+</button>
                                        </div>
                                    </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="comment" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    placeholder="Enter your comment"
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      resize: 'none',
                      height: '80px',
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </form>
              <button
                onClick={togglePopup}
                style={{
                  marginTop: '10px',
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer',
                  alignSelf: 'flex-end',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}





          {/* Right Side: Images */}
          <div className="images-grid">
            <div className="image-row">
              <img src="/img/easy.png" alt="Event planning"style={{width:'150px',height:'120'}} />
              <img src="/img/easily.png" alt="Team planning" style={{width:'100px',height:'100px'}} />
            </div>
            <div className="image-row">
              <img src="/img/easily.png" alt="Workshop session"  style={{width:'100px',height:'100px'}}/>
              <img src="/img/esu.png" alt="Team meeting" style={{width:'200px',height:'200'}} />
             
            </div>
            <div className="image-row">
              <img src="/img/easily.png" alt="Workshop session"  style={{width:'100px',height:'100px',marginLeft:'80px'}}/>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>










    <style jsx>{`
/* Wrapper for the entire section */
.section-wrapper {
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: flex-start;
  flex-wrap: wrap; /* Allows wrapping for smaller screens */
}

/* Card styles */
.card {
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.dark-card {
  height: auto;
  background: #1d1d1d;
  color: #fff;
  flex: 1 1 45%; /* Takes 45% of width on large screens */
  max-width: 500px;
}

/* The light card takes more space on large screens */
.light-card {
border:none;
  background: #f8f8f8;
  color: #333;
  flex: 1 1 55%; /* Takes 55% of width on large screens */
  display: flex;
  flex-direction: column;
}

/* Text and Images layout */
.text-and-images {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Left Side: Text Content */
.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-content ul {
  list-style-type: none;
  padding: 0;
}

.text-content ul li {
  margin-bottom: 10px;
  font-size: 16px;
}

/* Right Side: Images Grid */
.images-grid {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Each Row of Images */
.image-row {
  display: flex;
  gap: 10px;
}

.image-row img {
  width: 50%; /* Two images side-by-side */
  height: auto;
  border-radius: 10px;
}

/* CTA button styles */
.cta-button {
  background-color: #6c60f7;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.cta-button:hover {
  background-color: #574ecf;
}

/* Responsive Styles */

/* Tablets (Max Width: 1024px) */
@media screen and (max-width: 1024px) {
  .section-wrapper {
    gap: 15px;
  }

  .dark-card,
  .light-card {
    flex: 1 1 100%; /* Full width on smaller screens */
  }

  .text-and-images {
    flex-direction: column; /* Stacks text and images vertically */
  }

  .image-row img {
    width: 100%; /* Each image spans full width in its row */
  }
}

/* Mobile (Max Width: 768px) */
@media screen and (max-width: 768px) {
  .section-wrapper {
 paddin-right:200px;
  width:70%;
    flex-direction: column; /* Stack cards vertically */
    gap: 10px;
  }

  .dark-card,
  .light-card {
    flex: none;
    /* Increase width for better visibility */
 /* Center the cards */
  }

  .text-and-images {
    flex-direction: column; /* Stacks text and images */
  }

  .image-row {
    flex-direction: column; /* Each image is displayed as a full row */
  }

  .image-row img {
    width: 100%; /* Full width for small screens */
  }
}

/* Extra Small Devices (Max Width: 480px) */
@media screen and (max-width: 480px) {
  .dark-card,
  .light-card {
margin-left:0px;
    width: 100%; /* Maximize width for small screens */
    /* Center align */
  }

  .text-content ul li {
    font-size: 14px; /* Smaller font size */
  }

  .cta-button {
    width: 100%;
    font-size: 14px; /* Adjust font size */
    padding: 10px;
  }

  .image-row img {
    border-radius: 8px; /* Slightly smaller rounded corners */
  }
}
}</style>
<style jsx>{
    /* General Styles */
section {
  font-family: Arial, sans-serif;
}

/* Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Card */
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #555;
}

    
    
    `}

</style>






{/* Styles */}
<style jsx>{`
        .new-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .new-popup-container {
          display: flex;
          width: 600px;
          background: white;
          border-radius: 10px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        .popup-image-section {
          flex: 1;
          background: #f5f5f5;
        }

        .popup-form-section {
          flex: 1;
        }
      `}</style>





<style jsx>{
  `
  .card-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Makes the cards wrap if needed on smaller screens */
}

.card {
  width: 30%; /* Adjust card width to fit three cards in a row */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-image {
  position: relative;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}

.card-title {

  font-size: 24px;
  font-weight: bold;
  color:white;
}

.card-description {
  font-size: 16px;
  margin: 10px 0;
}

.card-button {
  padding: 10px 20px;
  background-color:rgb(255, 255, 255);
  border: none;
  color: black;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
}

.card-button:hover {
  background-color:rgb(10, 7, 6);
}

/* Responsive styles */
  @media (max-width: 1200px) {
    .card {
      width: 500px; /* Two cards per row */
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 500px; /* One card per row */
    }
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
margin-top:140PX;
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
    )
  }

