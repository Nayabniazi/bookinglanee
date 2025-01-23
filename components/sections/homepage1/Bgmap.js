import Cta1 from "./Cta1";

export default function Bgmap() {


    

    return (
        <>




<Cta1/>







<section className="section-container"style={{marginLeft:'100px',marginRight:'100px',marginBottom:'100px',height:'350px'}}>

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




            <div className="section bg-map d-block">
                <div className="container"style={{width:'5000px'}}>
                    <div className="box-map">
                                      <iframe   className="wow animate__animated animate__fadeIn" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={420} style={{ border: 0 ,height:'500px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                        <div className="map-info"style={{background:'black'}}>
                            <h5 style={{color: 'rgb(108, 96, 247)'}}>Looking for executive car service?</h5>
                            <p className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                               </p>
                            <p className="color-white-700 mb-10 wow animate__animated animate__fadeIn"style={{color:'white'}}>
                            Instantly reserve premier chauffeur service on our platform or mobile app with all-inclusive pricing. Powered by AI, our dynamic pricing ensures you receive the best quotes for your destination. Say goodbye to waiting for quotes and navigating complicated booking processes. With us, your journey starts with ease.
                            </p>
                            <a href="/your-target-page">
                            <button className="search-btn" style={{width:'200px',height:'40px',borderRadius:'20px',background: 'rgb(108, 96, 247)',color:'white'}}>Ready to Book </button>
                              </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
