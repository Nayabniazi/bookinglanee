import Layout from "@/components/layout/Layout";

import { useState } from "react";

import React from 'react';


import "react-datepicker/dist/react-datepicker.css";




import { FaSearch } from "react-icons/fa";





const HistoryPage = () => {

   // Unique state for this popup
   const [isNewPopupOpen, setNewPopupOpen] = useState(false);
  
   const toggleNewPopup = () => {
     setNewPopupOpen(!isNewPopupOpen);
   };

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




 










    <h1>Chauffeur service in San Jose, CA</h1>


    <div className="container"style={{marginBottom:'80px'}}>
  {/* Tabs */}
  <div className="tabs"  style={{ background: 'rgba(255, 255, 255, 0.8)' ,}}>
    <button style={{borderRadius:'25px'}}
      className={activeTab === "one-way" ? "tab active" : "tab"}
      onClick={() => setActiveTab("one-way")}
    >
      One way
    </button>
    <button style={{borderRadius:'25px'}}
      className={activeTab === "round-trip" ? "tab active" : "tab"}
      onClick={() => setActiveTab("round-trip")}
    >
      Round trip
    </button>
    <button style={{borderRadius:'25px'}}
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
        placeholder="Flight"
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
        placeholder="Car Rental"
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
  background-color:rgb(255, 149, 0);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.signup-btn:hover {
  background-color:rgb(216, 135, 43);
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
  background-color: rgba(39, 30, 30, 0.8);
  display: flex;
  justify-content: center; /* Center buttons */
  gap: 1rem;
}

.top-btn {
  padding: 10px 20px;
  background-color: rgb(57, 56, 51);
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.top-btn:hover {
  background-color:rgb(70, 120, 191);
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
  background-color:rgb(28, 135, 193);
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
  background-color: rgb(41, 145, 235);
  color: white;
  border: none;
  cursor: pointer;
}

.search-btn:hover {
  background-color:rgb(43, 114, 164);
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
  background-color: rgb(41, 141, 229);
  color: white;
}


.hero {
  position: relative; /* Ensure positioning for the pseudo-element */
  padding: 2rem;
  height: 100vh; /* Full viewport height */
  
  align-items: center;
  justify-content: center;
  color: #black; /* Ensure content stands out */
  overflow: hidden; /* Prevent pseudo-element overflow */
  z-index: 1; /* Keep content above the pseudo-element */
}

.hero::before {
  content: ""; /* Add a pseudo-element */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/img/header2.png'); /* Background image */
  background-size: cover; /* Adjust to fit */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent tiling */
  z-index: -2; /* Send behind everything */
}

.hero::after {
  content: ""; /* Add the black transparent overlay */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 0, 0, 0.5); /* Black with transparency */
  z-index: -1; /* Place above the image but below content */
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




    <style jsx>
  {`
  .unique-card-section {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
    justify-content: space-between; /* Distribute cards evenly */
    gap: 20px; /* Space between cards */
    margin: 50px auto; /* Top/bottom centering */
    max-width: 1200px; /* Limits the width for laptop screens */
    padding: 20px; /* Adds padding around the section */
  }

  .unique-card {
    background: white; /* White background for cards */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Subtle card shadow */
    padding: 20px; /* Inner spacing for content */
    width: calc(33.333% - 20px); /* 3 cards side-by-side on larger screens */
    text-align: center; /* Center-align content */
    transition: transform 0.3s, box-shadow 0.3s; /* Hover animation */
  }

  .unique-card:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  .unique-card img {
    width: 60px; /* Icon size */
    margin-bottom: 10px; /* Space below icon */
  }

  .unique-card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .unique-card-description {
    font-size: 16px;
    color: #555;
  }

  @media (max-width: 1024px) {
    .unique-card {
      width: calc(50% - 20px); /* Two cards per row on tablets */
    }
  }

  @media (max-width: 768px) {
    .unique-card {
      width: 100%; /* Single card per row on small screens */
    }
  }
  `}
</style>

<section className="unique-card-section">
  <div className="unique-card">
    <img src="/img/icon1.png" alt="Icon" />
    <h2 className="unique-card-title">Instant Quote</h2>
    <p className="unique-card-description">With just a few clicks, get your quote and book instantly.</p>
  </div>

  <div className="unique-card">
    <img src="/img/icon2.png" alt="Icon" />
    <h2 className="unique-card-title">Chauffeur by hour</h2>
    <p className="unique-card-description">Professional chauffeurs available for hourly hire or full-day service.</p>
  </div>

  <div className="unique-card">
    <img src="/img/icon3.png" alt="Icon" />
    <h2 className="unique-card-title">Solo or group travel</h2>
    <p className="unique-card-description">Custom trip planning options available, ideal for both groups and individuals.</p>
  </div>
</section>

<h2 style={{marginLeft:'150px',marginTop:'0px'}}>

</h2>
<div className="card-container"style={{marginLeft:'150px',marginRight:'180px',marginTop:'10px'}}>

      
      


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
 
 </div>
 <style jsx>
  {`
    .card-section {
      padding: 20px;
      text-align: center;
    }

    .card-container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 0px;
      margin-left: auto; /* Automatically adjust margin from the left */
      margin-right: auto; /* Automatically adjust margin from the right */
      max-width: 1200px; /* Maximum container width */
    }

    .card {
      flex: 1 1 calc(33.333% - 20px); /* 3 cards per row on larger screens */
      background-color: black;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      position: relative; /* Allow button to overlay on image */
      transition: all 0.3s ease;
      margin-bottom: 20px;
    }

    .card-image {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7; /* Adjust opacity of the image */
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7); /* Black overlay with opacity */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
      padding: 20px;
      opacity: 1; /* Ensure the overlay itself is fully opaque */
    }

    .card-title {
      font-size: 24px;
      font-weight: bold;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1; /* Keep the title on top */
      opacity: 1;
    }

    .card-description {
      font-size: 16px;
      color: white;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      opacity: 1;
    }

    .card-button {
      padding: 10px 20px;
      background-color:rgb(232, 157, 52); /* Orange button */
      color: black;
      border: none;
      font-size: 16px;
      border-radius: 20px;
      cursor: pointer;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      opacity: 1;
    }

    .card-button:hover {
      background-color:rgb(203, 134, 32);
    }

    /* Responsive Breakpoints */

    @media (max-width: 1024px) {
      .card {
        flex: 1 1 calc(45% - 20px); /* 2 cards per row on medium screens */
        max-width: 45%;
        margin-left: 10px;
        margin-right: 10px;
      }
      .card-container {
        margin-left: 20px; /* Adjustable left margin for laptop screens */
        margin-right: 20px; /* Adjustable right margin for laptop screens */
      }
    }

    @media (max-width: 768px) {
      .card {
        flex: 1 1 100%; /* 1 card per row on small screens */
        max-width: 100%;
        margin: 0 auto;
      }

      .card-title {
        font-size: 22px;
      }

      .card-description {
        font-size: 14px;
      }

      .card-button {
        font-size: 14px;
        padding: 8px 16px;
      }
    }

    @media (max-width: 480px) {
      .card-container {
        gap: 15px; /* Reduce gaps for smaller screens */
      }

      .card {
        flex: 1 1 calc(90% - 20px); /* 1 card per row on very small screens */
        max-width: 100%;
      }

      .card-title {
        font-size: 20px;
      }

      .card-description {
        font-size: 12px;
      }

      .card-button {
        padding: 6px 12px;
        font-size: 12px;
      }
    }

    @media (max-width: 350px) {
      .card {
        flex: 1 1 calc(95% - 20px); /* Slight padding for narrow screens */
        max-width: 100%; /* Full width for smaller devices */
      }

      .card-title {
        font-size: 18px;
      }

      .card-description {
        font-size: 11px;
      }

      .card-button {
        padding: 5px 10px;
        font-size: 11px;
      }
    }
  `}
</style>

<section className="card-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Exclusive partnership opportunities</h2>
  <div className="card-container">
    <div className="card">
      <div className="card-image">
        <img src="/img/coprate.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Corporation and Businesses</h3>
        <p className="card-description"></p>
        <button onClick={toggleNewPopup} className="card-button">Get in touch</button>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="/img/influ.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Influencers and Public </h3>
        <p className="card-description"></p>
        <button onClick={toggleNewPopup} className="card-button">Apply Now</button>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="/img/travel.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Solo or Group Travel</h3>
        <p className="card-description"></p>
        <button onClick={toggleNewPopup} className="card-button">Learn More</button>
      </div>
    </div>
  </div>
</section>

   
<div className="layout-container"style={{marginLeft:'150px',marginRight:'150px',marginTop:'100px'
}}>
      {/* Section 1 */}
      <div className="content-section">
        <div className="line"></div>
        <div className="content-row">
          <h1 className="heading">1.Get Your World-class chauffeurs service  with Bookinglane</h1>
          <p className=" paragraph font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
          There is never more easy planning your transportation. Showing a refined reserve system, we provide Chauffeur service in San Jose, CA, TX first-rate chauffeur services. Our simple-to-use system ensures a perfect and safe experience with fast booking and a selection of car alternatives. Whether for hourly rates or one-way journeys, we guaranteed by arriving on-time and dependable chauffeur service throughout all states in the USA. With Bookinglane you can get stress-free Dallas, TX Chauffeur service with seasoned chauffeurs providing safety and timeliness top priority.
          </p>
        </div>
        <div className="line"></div>
      </div>

      {/* Section 2 */}
      <div className="content-section">
        <div className="line"></div>
        <div className="content-row">
          <h2 className="heading">2.Reliability and Safety Bookinglane is secure and reliability chauffeur services.</h2>
          <p className="paragraph font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn ">
          Our customers can rely consistent and comfortable trips from well-trained chauffeurs who know the best routes. We guarantees safe and reliable rides with meet-and- greet service, with coverage in all states and a friendly customer service staff. Travel with assurance and receive great private chauffeur service.
          </p>
        </div>
        <div className="line"></div>
      </div>

      {/* Section 3 */}
      <div className="content-section">
        <div className="line"></div>
        <div className="content-row">
          <h2 className="heading">3.Customizable Fleet Solutions:
          Handling Various Client Demand Bookinglane is a reliable chauffeur service in the city or airport
       
    </h2>
          <p className="paragraph  font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn ">
          Our consumers choose Vans, SUVs, and business sedans among other choices, that provide flexible and satisfy a variety of needs from corporate meetings to special events. Get your instant quote with easy and transparent booking system with no hidden costs. Bookinglane emphasizes personal requirements and guaranteed contentment for a luxurious and safe journey, while also providing 24-hour support and free cancellation options.</p>
        </div>
        <div className="line"></div>
      </div>
    </div>



    <style jsx>{`
  .layout-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .content-section {
    margin-bottom: 20px; /* Adds spacing between sections */
  }

  .line {
    height: 1px;
    background-color: lightgray; /* Line color */
    margin: 10px 0;
  }

  .content-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    flex: 1; /* Allocates space for the heading */
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
  }

  .paragraph {
    flex: 2; /* Allocates more space for the paragraph */
    font-size: 16px;
    color: #333;
    margin-left: 20px; /* Space between heading and paragraph */
    text-align: left;
  }

  @media (max-width: 768px) {
    .content-row {
      flex-direction: column; /* Stacks heading and paragraph vertically on small screens */
      text-align: center;
    }

    .paragraph {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`}</style>


<section className="section-container">
  <div className="section-left">
    <h2>Are you an executive car service provider?</h2>
    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
      Optimize your business operations with our mobile CRM. Stay ahead with real-time access to your calendar, client invoices, fleet tracking, and driver payouts—all from the palm of your hand. Seamlessly transition between mobile and desktop platforms to access your profile. Plus, enjoy the benefits of global affiliate network at no extra cost.
    </p>
    <a href="/loginpage">
      <button className="search-btn">Become our Partner</button>
    </a>
  </div>

  <div className="section-right">
    <img src="/img/picty.png" alt="Description of image" />
  </div>
</section>







          
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












<style jsx>
  {`
    .section-container {
      display: flex;
      justify-content: space-between;
      margin-left: 100px;
      margin-right: 100px;
      margin-bottom: 200px;
      height: 350px;
      margin-top: 150px;
      flex-wrap: wrap;
    }

    .section-left {
      flex: 1;
      padding: 20px;
      max-width: 50%; /* Left section will take up 50% of the container */
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section-left h2 {
      margin-top: 20px;
      font-size: 24px;
    }

    .section-left p {
      font-size: 16px;
      color: #4a4a4a; /* Adjusted text color */
      margin-bottom: 20px;
    }

    .search-btn {
      width: 200px;
      height: 40px;
      border-radius: 20px;
      background: rgb(255, 155, 16);
      color: black;
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .search-btn:hover {
      background: rgb(206, 141, 36); /* Darker shade on hover */
    }

    .section-right {
      flex: 1;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .section-right img {
      height: 360px;
      width: 400px;
      object-fit: cover;
    }

    /* Responsive Breakpoints */

    @media (max-width: 1024px) {
      .section-container {
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
      }

      .section-left {
        max-width: 100%;
        padding: 0;
        text-align: center;
      }

      .section-right {
        max-width: 100%;
        padding: 0;
      }

      .section-right img {
        width: 100%; /* Image will be responsive */
        height: auto;
      }

      .section-left h2 {
        font-size: 22px;
      }

      .section-left p {
        font-size: 14px;
      }

      .search-btn {
        width: 180px;
        height: 35px;
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      .section-container {
        margin-left: 10px;
        margin-right: 10px;
      }

      .section-left h2 {
        font-size: 20px;
      }

      .section-left p {
        font-size: 13px;
      }

      .search-btn {
        width: 160px;
        height: 30px;
        font-size: 13px;
      }

      .section-right img {
        width: 100%;
        height: auto;
      }
    }

    @media (max-width: 480px) {
      .section-left h2 {
        font-size: 18px;
      }

      .section-left p {
        font-size: 12px;
      }

      .search-btn {
        width: 150px;
        height: 28px;
        font-size: 12px;
      }

      .section-right img {
        width: 100%;
        height: auto;
      }
    }
  `}
</style>





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






{/* card popup */}
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






            </Layout>
        </>
       
    );
};

export default HistoryPage; // Make sure to export it as default
