import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import Image from 'next/image';


export default function Header({ topBarStyle, handleMobileMenuOpen }) {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })



    return (
        <>
     
            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}style={{backgroundColor:'black'}}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                              <div className="header-logo">
  <div className="d-flex align-items-center" href="">
    <img alt="Ecom" src="/img/logo.png" />
    <span className="logo-text" style={{color:'white',fontSize:'20px',marginRight:'60px',}}>Bookinglane</span>
  </div>
</div>

                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <Menu />
                                </nav>











                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenuOpen}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-inline-block box-dropdown-cart"><span className="font-lg icon-list icon-account"><span className="font-sm color-grey-900 arrow-down">
                                   </span></span>
                                    <div className="dropdown-account">
                                        <ul>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/en.png" alt="transp" />
                                                English</Link></li>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/fr.png" alt="transp" />
                                                French</Link></li>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/cn.png" alt="transp" />
                                                Chiness</Link></li>
                                        </ul>
                                    </div>


                                </div>

                           


                                <div className="d-none d-sm-inline-block"><Link className="btn btn-brand-1 d-none d-xl-inline-block hover-up" href="/loginpage"style={{backgroundColor:'white',borderRadius:'30px'}}>
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path  strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                        </path>
                                    </svg>My account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    
        </>
    )
}
 