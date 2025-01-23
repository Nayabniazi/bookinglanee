import Hero1Slider from "@/components/slider/Hero1Slider";
import React, { useState } from "react";



export default function Hero1() {
    const [activeTab, setActiveTab] = useState("airport");

    // Data for each tab
    const servicesData = {
      intercity: {
        title: "Innercity and Intercity Rides",
        description: "Enjoy smooth and reliable transportation within and between cities.",
        image: "/img/inte.png",
      },
      corporate: {
        title: "Corporate Travel",
        description: "Streamline your corporate travel with premium, punctual services.",
        image: "/img/cop.png",
      },
      airport: {
        title: "Airport Transfers",
        description: "Enjoy smooth and hassle-free rides to and from the airport with precise timing.",
        image: "/img/flight.png",
      },
      tours: {
        title: "Special Tours",
        description: "Explore your destination with tailor-made special tours for unique experiences.",
        image: "/img/tour.png",
      },
    };


    return (
        <>



            <section className="section d-block">
            <div className="box-swiper">
                    <div className="swiper-container swiper-group-1 swiper-banner-1 ">









                     <Hero1Slider/>





                     <section style={{ padding: "50px 20px",marginTop:'80px' }}>
      {/* Navigation Tabs */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {Object.keys(servicesData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: "10px 20px",
              margin: "0 10px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: activeTab === key ? "#E3D7FE" : "#F3F3F3",
              color: activeTab === key ? "#000" : "#666",
              boxShadow: activeTab === key ? "0px 4px 8px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {servicesData[key].title.split(" ")[0]} {/* Show the first word */}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Text Content */}
        <div style={{ flex: "1", maxWidth: "500px", padding: "20px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            {servicesData[activeTab].title}
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            {servicesData[activeTab].description}
          </p>
          <button
            style={{
              padding: "10px 20px",
              background: "#6C60F7",
              color: "#fff",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Read on
          </button>
        </div>

        {/* Right: Image */}
        <div style={{ flex: "1", maxWidth: "500px", padding: "20px" }}>
          <img
            src={servicesData[activeTab].image}
            alt={servicesData[activeTab].title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </section>








                    </div>
                </div>
            </section>
        </>
    )
}
