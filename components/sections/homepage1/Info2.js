import Link from "next/link";

export default function Info2() {
    return (
        <>
            


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

        </>
    )
}
