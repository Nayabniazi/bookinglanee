

   

import Link from "next/link";

export default function Footer1({ }) {
    return (
        <>
            <footer className="footer" style={{ marginTop: '0px' }}>
                <div
                    className="footer-1"
                    style={{
                        height: 'auto',
                        padding: '20px 0',
                        backgroundColor: 'black',
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 width-23 mb-30">
     
                            <div className="header-logo">
  <Link className="d-flex align-items-center" href="">
    <img alt="Ecom" src="/img/logo.png" />
    <span className="logo-text"style={{color:'white',fontSize:'20px'}}>Bookinglane</span>
  </Link>
</div>


                                <p className="font-xs mb-20 color-white"style={{marginTop:'50px',}}>
                                    We fuse our global network with our depth of
                                    expertise in air freight, ocean freight, railway
                                    transportation, trucking, and multimode
                                    transportation, also we are providing sourcing,
                                    warehousing, E-commercial fulfillment, and
                                    value-added service to our customers including
                                    kitting, assembly, customized package and business
                                    inserts, etc.
                                </p>

                                {/* Buttons with 20px gap below the paragraph */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px', // 20px gap between paragraph and buttons
                                        alignItems: 'center',
                                    }}
                                >
                                    <a href="/Booking" style={{ textDecoration: 'none', width: '100%' }}>
                                        <button
                                            style={{
                                                background:' rgb(255, 255, 255)',
                                              borderRadius:'20px',
                                                color: 'black',
                                                border: 'none',
                                                padding: '10px 20px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                maxWidth: '200px',
                                            }}
                                        >
                                            Book Online
                                        </button>
                                    </a>
                                    <a href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                                        <button
                                            style={{
                                                color:'black',
                                                background:' rgb(255, 255, 255)',
                                               borderRadius:'20px',
                                                border: 'none',
                                                padding: '10px 20px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                maxWidth: '200px',
                                            }}
                                        >
                                            Our Location
                                        </button>
                                    </a>
                                    <a href="/register" style={{ textDecoration: 'none', width: '100%' }}>
                                        <button
                                            style={{
                                                color:'black',
                                                background:' rgb(255, 255, 255)',
                                               borderRadius:'20px',
                                                border: 'none',
                                                padding: '10px 20px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                maxWidth: '200px',
                                            }}
                                        >
                                            Franchise
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 width-16 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-white">Services</h5>
                                <ul className="menu-footer"style={{marginTop:'50px',}}>
                                    <li>
                                        <Link href="#">Top destination</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Support</Link>
                                    </li>
                                    <li>
                                        <Link href="#">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">National Accounts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-white">Company</h5>
                                <ul className="menu-footer"style={{marginTop:'50px',}}>
                                    <li>
                                        <Link href="/about"> About us</Link>
                                    </li>
                                    <li>
                                        <Link href="Event">Events</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Apply Locally</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Neighbory</Link>
                                    </li>
                                    <li>
                                        <Link href="/login page">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-white">Top destination</h5>
                                <ul className="menu-footer"style={{marginTop:'50px',}}>
                                    <li >
                                        <Link href="#">Terms of use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Accesibility</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">California Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Notice</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-20 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-white">Top routers</h5>

                                <ul className="menu-footer"style={{marginTop:'50px',}}>
                                    <li>
                                        <Link href="/about"> About us</Link>
                                    </li>
                                    <li>
                                        <Link href="Event">Events</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Apply Locally</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Neighbory</Link>
                                    </li>
                                    <li>
                                        <Link href="/register">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div
                    className="footer-2"
                    style={{
                        paddingTop: '0px',
                        backgroundColor: 'black',
                        paddingBottom: '50px',
                    }}
                >
                    <div className="footer-bottom"style={{marginLeft:'60px',marginRight:'100px'}}>
                        <div className="row align-items-center">
                            <div className="col-sm-5 text-center text-sm-start">
                                <span className="color-grey-300 font-xs">
                                    ©Transp Official {new Date().getFullYear()}. All rights reserved.
                                </span>
                            </div>
                            <div className="col-sm-7 text-center text-sm-end">
                                <ul className="menu-bottom">
                                    <li><Link className="font-xs color-grey-300" href="/term-conditions">Privacy policy</Link></li>
                                    <li><Link className="font-xs color-grey-300" href="/term-conditions">Cookies</Link></li>
                                    <li><Link className="font-xs color-grey-300" href="/term-conditions">Terms of service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
