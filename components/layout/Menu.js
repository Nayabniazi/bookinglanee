import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if the current route is active
  const isActive = (path) => (router.pathname === path ? "active" : "");

  return (
    <>
      <ul
        className={`main-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}
        style={{
         
          listStyle: "none",
          padding: "0px",
          marginLeft: "60px",
          background: "black",
          color: "white", // Changed to light gray
          height: "100%",
        }}
      >
        {/* "What We Do" Menu */}
        <li className="has-children" >
          <Link
            className={`active ${isActive("/")}`}
            href="/"
            style={{ color: "lightgray" }}
          >
            Flight
          </Link>
          <ul className="sub-menu">
            <div className="dropdown-columns">
              <div className="column">
                <li>
                  <Link href="/Austin">Austin, TX</Link>
                </li>
                <li>
                  <Link href="/Dollas">Dallas, TX</Link>
                </li>
                <li>
                  <Link href="/Los">Los,Angeles,CA</Link>
                </li>
                <li>
                  <Link href="/Monterey">Monterey,CA</Link>
                </li>
                <li>
                  <Link href="/Nashville">Nashville,TN</Link>
                </li>
                <li>
                  <Link href="/Orlando">Orlando, FL</Link>
                </li>
                <li>
                  <Link href="Sandiego">SanDiego, CA</Link>
                </li>
                <li>
                  <Link href="/SanJose">SanJose, CA</Link>
                </li>
                <li>
                  <Link href="/Walnut">Walnut, Creek</Link>
                </li>

              </div>
              <div className="column">
                
                <li>
                  <Link href="/chincago">Chicago, IL</Link>
                </li>
                <li>
                  <Link href="/houston">Houston,TX</Link>
                </li>
                <li>
                  <Link href="/miami">Miami, FL</Link>
                </li>
                <li>
                  <Link href="/napa">Napa Valley</Link>
                </li>
                <li>
                  <Link href="/newyork">New York</Link>
                </li>
                <li>
                  <Link href="/san">San Antonio</Link>
                </li>
                <li>
                  <Link href="/sanf">San Francisco</Link>
                </li>
                
              </div>
            </div>
          </ul>
        </li>

        {/* "How It Works" Menu */}
        <li className="has-children">
          <Link
            className={isActive("/workprocess")}
            href=""
            style={{ color: "lightgray" }}
          >
            Our services
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="Airport">Airport transfers</Link>
            </li>
            <li>
              <Link href="/corporate">Corporate travel</Link>
            </li>
            <li>
              <Link href="/grouptravel">Group travel</Link>

            </li>
            <li>
              <Link href="/intercity">Innercity and intercity rides</Link>
            </li>
            <li>
              <Link href="/tour">Special tours</Link>
            </li>
            
            <li>
              <Link href="/solution">Solutions</Link>
            </li>
            <li>
              <Link href="/carservice">Car Rentals</Link>
            </li>
            <li>
              <Link href="/chauffeur">Chauffeur Services</Link>
              
            </li>
            <li>
              <Link href="/limopagy">Limo Services</Link>
            </li>
            <li>
              <Link href="/topdestination">Top destinations</Link>
            </li>
            <li>
              <Link href="/routes">Top-Routes</Link>
              
            </li>
            <li>
              <Link href="/van">Van Services</Link>
            </li>
            <li>
              <Link href="/ski">Ski transfers</Link>
              
            </li>

          </ul>
        </li>

        {/* "Pricing" Menu */}
        <li className="has-children">
          <Link
            className={isActive("/Estimate")}
            href=""
            style={{ color: "lightgray" }}
          >
            Solutions
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/transport">Corporate transportation platform</Link>
            </li>
            <li>
              <Link href="/loginpage">Drive with us</Link>
            </li>
          </ul>
        </li>



        <li className="">
        
          <Link
            className={isActive("/Estimate")}
            href="/loginpage"
            style={{ color: "lightgray" }}
          >
            Support
          </Link>
          </li>
       

          <li className="">
        
        <Link
          className={isActive("/")}
          href="/FAQ"
          style={{ color: "lightgray" }}
        >
          FAQ
        </Link>
        </li>





      </ul>
      
      {/* Mobile menu toggle button */}
      <button className="burger-icon" onClick={handleMobileMenuToggle}>
        <span className="burger-icon-top" />
        <span className="burger-icon-mid" />
        <span className="burger-icon-bottom" />
      </button>

      <style jsx>{`
        

        .sub-menu {
          display: none;
          position: absolute;
         
          left: 0;
          background: blue; /* Dropdown background color */
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          color: white; /* Light gray color for text */
          min-width: 300px;
        }

        .has-children:hover .sub-menu {
          display: flex;
          flex-direction: column;
        }

        .dropdown-columns {
          display: flex;
          justify-content: space-between;
          gap: 0px;
        }

        .column {
          flex: 1;
          list-style: none;
        }

        .column li {
          margin-bottom: 10px;
        }

        .column li a {
          text-decoration: none;
          color: lightgray; /* Ensure links are light gray */
          transition: color 0.2s;
        }

        .column li a:hover {
          color: darkgray; /* Subtle hover effect */
        }

        a:hover,
        a:focus,
        a:active {
          color: darkgray !important; /* Override any unwanted hover colors */
        }

        .main-menu a {
          color: lightgray !important; /* Default menu link color */
          text-decoration: none;
        }

        .main-menu a:hover {
          text-decoration: underline;
          color: darkgray; /* Ensure no yellow or white appears */
        }
      `}</style>
      

     
    </>
  );
}
