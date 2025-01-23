// /pages/history.js or /pages/history/index.js
import Layout from "@/components/layout/Layout";

import { useState } from "react";

import React from 'react';


import "react-datepicker/dist/react-datepicker.css";







const HistoryPage = () => {








    const airports = [
        { name: "Albuquerque, (NM)",  link: "/Albu" },
        { name: "Charlotte, NC", code: "LAX", link: "/losangelespage" },
        { name: "Greensboro, NC", code: "OAK", link: "/oaklandpage" },
        { name: "Englewood, CO", code: "SAN", link: "/sandiegopage" },
        { name: "Denver, CO", code: "SJC", link: "/sanjosepage" },
        { name: "Boulder,CO", code: "LAX", link: "/ontopage" },
        { name: "Colorado Springs, CO", code: "OAK", link: "/palm1page" },
        { name: "Frisco, CO", code: "SAN", link: "/barbarapage" },
        { name: "Rochester, MA", code: "SJC", link: "/sanjosepage" },
        { name: "Memphis, TN", code: "LAX", link: "/sacramantopage" },
        { name: "Dulles, VA", code: "OAK", link: "/johnpage" },
        { name: "Cambridge, MD", code: "SAN", link: "/denverpage" },
        { name: "Arlington, VA", code: "SJC", link: "/northpage" },
        { name: "Vienna,VA", code: "LAX", link: "/keypage" },
        { name: "Alexander, VA", code: "OAK", link: "/lauderpage" },
        { name: "Fairfex, VA", code: "SAN", link: "/jackpage" },
  
        // Add more airports as needed
      ];
    
    








// Unique state for this popup
     const [isNewPopupOpen, setNewPopupOpen] = useState(false);
    
     const toggleNewPopup = () => {
       setNewPopupOpen(!isNewPopupOpen);
     };
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        country: "",
        details: "",
      });
    
      const countries = [
        { name: "United States", code: "+1" },
        { name: "Canada", code: "+1" },
        { name: "United Kingdom", code: "+44" },
        { name: "India", code: "+91" },
        { name: "Australia", code: "+61" },
        { name: "Germany", code: "+49" },
        { name: "France", code: "+33" },
        { name: "Italy", code: "+39" },
        { name: "Japan", code: "+81" },
        { name: "Brazil", code: "+55" },
        // Add more countries as needed
      ];
    
      // Handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Thank you for contacting us!");
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
  <main className="heroo">
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




 










    <h1 style={{marginRight:'200px'}}>
    Car service in Rochester, MN
   
        </h1>


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
  background-color:rgb(150, 146, 178);
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
.heroo {


  background-image: url('/img/subcar.png'); /* Add your image path here */
  
 
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center;






  padding: 2rem;
  
}


.heroo h1 {
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
            <button onClick={toggleNewPopup}   className="card-button">Get in touch</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="/img/travel.png" alt="Card Image" />
          <div className="card-overlay">
            <h2 className="card-title">Travel agents and event planners</h2>
            <p className="card-description">Streamline bookings with our API</p>
            <button onClick={toggleNewPopup}   className="card-button">Request Info</button>
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
            <button onClick={toggleNewPopup}   className="card-button">Apply</button>
          </div>
        </div>
      </div>
    </div>

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
  background-color: #e76a3d;
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



<div className="layout-container"style={{marginLeft:'150px',marginRight:'150px',marginTop:'100px'
}}>





</div>





    <div className="row align-items-center"style={{marginLeft:'160px'}}>
                            <div className="col-lg-6 mb-60">
                                <h4 className="color-black mb-15 wow animate__animated animate__fadeIn"style={{marginBottom:'10px'}}>Experienced Chauffeur Service in Car service in Rochester, MN</h4>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginRight:'100px'}}>Upgrade your travel experience with our professional car service in Car service in Rochester, MN Whether you’re heading to a meeting, exploring the city, or catching a flight, our service ensures a seamless journey in style and comfort. Relax and let us handle the logistics while you focus on what matters most .</p>
                              
                              
                               
                              <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p> 
                              <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p> 
                               
                               
                            </div>
                            <div className="col-lg-6 mb-60"><div className="wow animate__animated animate__fadeIn" href="#"><img className="mb-15 wow animate__animated animate__fadeIn" src="/img/lady.png" alt="transp" style={{width:'500px'}}/></div></div>
                        </div>
                       

                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><div className="wow animate__animated animate__fadeIn" href="#"><img src="/img/lady2.png" alt="transp" style={{width:'500px',marginLeft:'160px'}}/></div></div>
                            <div className="col-lg-6 mb-60">
                                <h4 className="color-black mb-15 wow animate__animated animate__fadeIn" style={{marginRight:'140px',marginLeft:'80px'}}>The Premium Car Service Right Here in Car service in Rochester, MN
                                </h4>
                               
                                <p style={{marginRight:'140px',marginLeft:'80px'}} className="font-md color-grey-700 wow animate__animated animate__fadeIn">Bookinglane, your first-rate black car service friend, will help you to really explore Rochester, MN Our dedication is to make your trip around the city unforgettable as much as the sites themselves are. Our service is customized to your schedule and travel tastes whether your desired visit is for the architectural marvels, calm parks, or busy marketplaces. Discover Albuquerque, NM with comfort, elegance, and local flare Bookinglane can provide</p>
                                        


                                <div className="row">
                                        <div className="col-lg-6 mb-30">
                                           <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn"></h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        



                                    </div>

                                   








                                
                               
                         <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>      
                               
                            </div>
                        </div>
                    
              

    <div className="row align-items-center"style={{marginLeft:'160px'}}>
                            <div className="col-lg-6 mb-60">
                                <h4 className="color-black mb-15 wow animate__animated animate__fadeIn"style={{marginBottom:'10px'}}>Bookinglane Reliable Car Service</h4>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginRight:'100px'}}>. Bookinglane is a dependable vehicle service that provides a variety of transport options, such as hourly, one-way, and round-trip. Our pricing is transparent, ensuring that there are no hidden costs and allow more effective trip planning. Bookinglane black car service is accessible in all 50 states of the United States, ensuring that it is accessible from any location..</p>
                              
                              
                               
                              <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p> 
                              <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p> 
                               
                               
                            </div>
                            <div className="col-lg-6 mb-60"><div className="wow animate__animated animate__fadeIn" href="#"><img className="mb-15 wow animate__animated animate__fadeIn" src="/img/cop1.png" alt="transp" style={{width:'500px'}}/></div></div>
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






























<style jsx>{
    `
    .cards-section {
   
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.section-heading {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.cards-container {
margin-right:100px;
margin-left:130px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.cardy {
width:300px;
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cardy:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cardy .icon {
  font-size: 1.5rem;
  margin-right: 15px;
}

.cardy .content p {
  margin: 0;
  font-size: 1rem;
}

.cardy .content p:first-child {
  font-weight: ;
  font-size: 1.1rem;
}

    
    
    `}

</style>









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




<section className="section-container"style={{marginLeft:'100px',marginRight:'100px',marginBottom:'100px',height:'350px',marginTop:'150px'}}>

      <div className="section-left">
      
        <h2 style={{marginTop:'20px',}}>Are you an executive car service provider?</h2>
        <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" >Optimize your business operations with our mobile CRM. Stay ahead with real-time access to your calendar, client invoices, fleet tracking, and driver payouts—all from the palm of your hand. Seamlessly transition between mobile and desktop platforms to access your profile. Plus, enjoy the benefits of global affiliate network at no extra cost.</p>
      
      
        <a href="https://b2b.bookinglane.com/">
                            <button className="search-btn" style={{width:'200px',height:'40px',borderRadius:'20px',background: 'rgb(29, 19, 134)',color:'white',}}>Become our Partner </button>
                              </a>
      
      </div>
      <div className="section-right">
        <img src="/img/picty.png
        " alt="Description of image" style={{height:'360px',width:'400px',marginLeft:'200px'}}/>
      </div>
    </section>
  <style jsx>{
    `
    /* CSS file: styles.css */

/* Section with light grey background and flex layout */
.section-container {
  display: flex;
  background-color: #d3d3d3;
  padding: 20px;
  border-radius: 10px;
}

/* Left side with text */
.section-left {
  flex: 1;
  padding: 20px;
}

.section-left h2 {
  font-size: 24px;
  color: #333;
}

.section-left p {
  font-size: 16px;
  color: #555;
}

/* Right side with image */
.section-right {
  flex: 1;
  padding: 20px;
}

.section-right img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

    @media screen and (max-width: 1024px) {
  .section-container {
    padding: 20px;
    gap: 30px;
  }

  .section-left h2 {
    font-size: 24px;
  }

  .section-left p {
    font-size: 14px;
  }

  .section-left .search-btn {
    width: 180px;
    height: 40px;
  }
}

/* Small Screens (Mobile) */
@media screen and (max-width: 768px) {
  .section-container {
    flex-direction: column; /* Stacks the text and image vertically */
    text-align: center; /* Centers content for better visibility */
  }

  .section-left,
  .section-right {
    flex: none;
    width: 100%; /* Makes each section occupy the full width */
  }

  .section-left h2 {
    font-size: 20px;
  }

  .section-left p {
    font-size: 14px;
  }

  .section-left .search-btn {
    width: 100%; /* Full-width button */
    max-width: 300px;
    margin: 0 auto;
  }

  .section-right .responsive-img {
    margin-top: 20px;
  }
}

/* Extra Small Screens (Phones) */
@media screen and (max-width: 480px) {
  .section-left h2 {
    font-size: 18px;
  }

  .section-left p {
    font-size: 12px;
  }

  .section-left .search-btn {
    width: 100%;
    height: 50px; /* Larger button for easier taps */
    font-size: 14px;
  }

  .section-right .responsive-img {
    max-width: 90%; /* Limits image size */
    margin: 0 auto; /* Centers the image */
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
