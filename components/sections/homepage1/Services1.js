import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import Info1 from "./Info1"; // Make sure this exists

export default function Services1() {
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

            <Info1 />

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
        </>
    );
}
