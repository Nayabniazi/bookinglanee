import Link from "next/link";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "@/components/layout/Layout";

export default function Hero1Slider() {
  

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

    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };


    return (
 <>
  <Layout>

  <section className="section pt-80 mb-70 bg-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-faqs-left">
                                <h2 className=" mb-20 wow animate__animated animate__fadeIn"> FAQs</h2>
                                <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">
                                    </p>
                                <div className="box-gallery-faqs">
                                    <div className="image-top"><img src="/img/drive2.png" alt="transp" />
                                    </div>
                                    <div className="image-bottom">
                                        <div className="image-faq-1"><img src="/img/drive3.png" alt="transp" /></div>
                                        <div className="image-faq-2"><img src="/img/lady.png" alt="transp" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="box-accordion">
                               

                            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"} style={{color:'blue'}}>
                        <div className="accordion-body"> 


                            .</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn"style={{marginTop:'150px',}}>
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black',color:'white'}}>Do I need to create an account to make reservations?
                            </button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p >No! you don't  need to create an account to make reservations. By registration you can track live from your chauffeurs, make chnage to your reservation, view your trip history and much more. </p>


                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black',color:'white'}}>
                    How can I edit or update mt reservation?  </button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
<p style={{marginTop:'10px'}}>you can easily edit, modify, update your reservation by logining into your account.</p>


                           </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black',color:'white'}}>When will my reservation be confirmed?
                           ?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                       For non-last-minute reservations, we typically allow up to 24 hours to process and confirm your chauffeur details.
                       
                        </div>
                    </div>
                </div>
               
            </div>






</div>
</div>
</div>
        
            </section>                   



</Layout>



</>
    )
  }

