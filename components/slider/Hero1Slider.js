
import Link from "next/link";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Services1 from "../sections/homepage1/Services1";
import Info1 from "../sections/homepage1/Info1";
import Info2 from "../sections/homepage1/Info2";
import { FaSearch } from "react-icons/fa";
export default function Hero1Slider() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewPopupOpen, setNewPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("one-way");
  const [activeForm, setActiveForm] = useState(null);
  const [fromValue, setFromValue] = useState("");
  const [dropoffValue, setDropoffValue] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);









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

  const togglePopup = () => setIsOpen(!isOpen);
  const toggleNewPopup = () => setNewPopupOpen(!isNewPopupOpen);
  const handleButtonClick = (formType) => setActiveForm(formType);
  const closeForm = () => setActiveForm(null);

  const handleInputChange = (value, setValue, setSuggestions) => {
    setValue(value);
    if (value) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion, setValue, setSuggestions) => {
    setValue(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      


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




 










    <h1>Book your chauffeur service</h1>


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
  background-image: url('/img/header.png'); /* Background image */
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
<Info2/>




 










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
       
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="/img/influ.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Influencers and Public </h3>
        <p className="card-description"></p>
        
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="/img/travel.png" alt="Card Image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">Solo or Group Travel</h3>
        <p className="card-description"></p>
       
      </div>
    </div>
  </div>
</section>

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
      background-color: #e76a3d;
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



    







<Services1/>






<div>
  
{isOpen && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black overlay
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Ensures it's above other elements
    }}
  >
    <div
      style={{
        height: '700px',
        marginTop: '100px',
        width: '700px',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        overflow: 'hidden',
        zIndex: 1100, // Ensures the popup is above the overlay
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
              Last Name *
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email *
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label>How often do you organize events?</label>
            <div className="options" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                style={{
                  backgroundColor: 'blue',
                  padding: '7px 20px',
                  color: 'whitesmoke',
                  borderRadius: '15px',
                  border: 'none',
                }}
                type="button"
              >
                1-3
              </button>
              <button
                style={{
                  backgroundColor: 'blue',
                  padding: '7px 20px',
                  color: 'whitesmoke',
                  borderRadius: '15px',
                  border: 'none',
                }}
                type="button"
              >
                4-6
              </button>
              <button
                style={{
                  backgroundColor: 'blue',
                  padding: '7px 20px',
                  color: 'whitesmoke',
                  borderRadius: '15px',
                  border: 'none',
                }}
                type="button"
              >
                7-10
              </button>
              <button
                style={{
                  backgroundColor: 'blue',
                  padding: '7px 20px',
                  color: 'whitesmoke',
                  borderRadius: '15px',
                  border: 'none',
                }}
                type="button"
              >
                10+
              </button>
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



</div>




      
</>
  )}













