
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ openClass, handleMobileMenuClose }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        setIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
            <div className="mobile-header-wrapper-inner">
                <div className="mobile-header-content-area">
                    <div className="mobile-logo">
                        <Link
                            className="btn btn-brand-1 hover-up"
                            href="/loginpage"
                            style={{ backgroundColor: "orange",borderRadius:'60px',color:'black' }}
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                ></path>
                            </svg>
                             My account
                        </Link>
                    </div>
                    <div className="burger-icon burger-close" onClick={handleMobileMenuClose}>
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                    </div>
                    <div className="perfect-scroll">
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav className="mt-8">
                                <ul className="mobile-menu font-heading">
                                    <li
                                        className={isActive.key === 1 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(1)}
                                    >
                                        <span className="menu-expand">
                                            <svg
                                                className="w-6 h-6 icon-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span href="/">Top destination</span>
                                        <ul
                                            className={isActive.key === 1 ? "sub-menu d-block" : "sub-menu d-none"}
                                        >
                                            

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
                  <Link href="/Orlando">Orlando,FL</Link>
                </li>
                <li>
                  <Link href="Sandiego">SanDiego,CA</Link>
                </li>
                <li>
                  <Link href="/SanJose">SanJose,CA</Link>
                </li>
                <li>
                  <Link href="/Walnut">Walnut Creek,CA</Link>
                </li>
 <li>
                  <Link href="/chincago">Chicago, IL</Link>
                </li>
                <li>
                  <Link href="/houston">Houston,TX</Link>
                </li>
                <li>
                  <Link href="/miami">Miami,FL</Link>
                </li>
                <li>
                  <Link href="/napa">Napa Valley,CA</Link>
                </li>
                <li>
                  <Link href="/newyork">New York,NY</Link>
                </li>
                <li>
                  <Link href="/san">San Antonio,TX</Link>
                </li>
                <li>
                  <Link href="/sanf">San Francisco,CA</Link>
                </li>
                

                                        </ul>
                                    </li>

                                    <li
                                        className={isActive.key === 2 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(2)}
                                    >
                                        <span className="menu-expand">
                                        <svg
                                                className="w-6 h-6 icon-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span href=""> Our services</span>
                                        <ul
                                            className={isActive.key === 2 ? "sub-menu d-block" : "sub-menu d-none"}
                                        >
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
              <Link href="/carservice">Car Services</Link>
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

                                    <li
                                        className={isActive.key === 3 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(3)}
                                    >
                                        <span className="menu-expand">
                                        <svg
                                                className="w-6 h-6 icon-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span href="#">Solutions</span>
                                        <ul
                                            className={isActive.key === 3 ? "sub-menu d-block" : "sub-menu d-none"}
                                        >
                                            <li><a href="transport">Corporate transportation platform</a></li>
                                            <li><a href="https://b2b.bookinglane.com/">Drive with us</a></li>
                                        </ul>
                                    </li>




                                    <li
                                        className={isActive.key === 4 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(4)}
                                    >
                                        <span className="menu-expand">
                                        
                                        </span>
                                        <span href="/loginpage">Support</span>
                                        
                                    </li>






                                    <li
                                        className={isActive.key === 5 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(5)}
                                    >
                                        <span className="menu-expand">
                                        
                                        </span>
                                        <span href="/FAQ">FAQ</span>
                                        
                                    </li>


                                </ul>
                            </nav>
                        </div>
                        <div className="site-copyright color-grey-400 mt-0">
                            <div className="box-download-app">
                                <p className="font-xs color-grey-900 mb-25">
                                    Download our Apps and get an extra 15% Discount on your first order…!
                                </p>
                            </div>
                            <div className="mb-0">
                                <span className="font-xs color-grey-500">
                                    ©Trvelingoo Official {new Date().getFullYear()}. All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}