import Cta1 from "./Cta1";

export default function Bgmap() {


    

    return (
        <>


<section className="section-container">
  <div className="section-left">
    <h2>Are you an executive car service provider?</h2>
    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
      Optimize your business operations with our mobile CRM. Stay ahead with real-time access to your calendar, client invoices, fleet tracking, and driver payouts—all from the palm of your hand. Seamlessly transition between mobile and desktop platforms to access your profile. Plus, enjoy the benefits of global affiliate network at no extra cost.
    </p>
    <a href="loginpage">
      <button className="search-btn" style={{backgroundColor:'orange',color:'black'}}>Become our Partner</button>
    </a>
  </div>

  <div className="section-right">
    <img src="/img/picty.png" alt="Description of image" />
  </div>
</section>





<style jsx>
  {`
    .section-container {
      display: flex;
      justify-content: space-between;
      margin-left: 100px;
      margin-right: 100px;
      margin-bottom: 200px;
      height: 350px;
      margin-top: 150px;
      flex-wrap: wrap;
    }

    .section-left {
      flex: 1;
      padding: 20px;
      max-width: 50%; /* Left section will take up 50% of the container */
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section-left h2 {
      margin-top: 20px;
      font-size: 24px;
    }

    .section-left p {
      font-size: 16px;
      color: #4a4a4a; /* Adjusted text color */
      margin-bottom: 20px;
    }

    .search-btn {
      width: 200px;
      height: 40px;
      border-radius: 20px;
      background: rgb(29, 19, 134);
      color: white;
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .search-btn:hover {
      background: rgb(24, 12, 100); /* Darker shade on hover */
    }

    .section-right {
      flex: 1;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .section-right img {
      height: 360px;
      width: 400px;
      object-fit: cover;
    }

    /* Responsive Breakpoints */

    @media (max-width: 1024px) {
      .section-container {
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
      }

      .section-left {
        max-width: 100%;
        padding: 0;
        text-align: center;
      }

      .section-right {
        max-width: 100%;
        padding: 0;
      }

      .section-right img {
        width: 100%; /* Image will be responsive */
        height: auto;
      }

      .section-left h2 {
        font-size: 22px;
      }

      .section-left p {
        font-size: 14px;
      }

      .search-btn {
        width: 180px;
        height: 35px;
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      .section-container {
        margin-left: 10px;
        margin-right: 10px;
      }

      .section-left h2 {
        font-size: 20px;
      }

      .section-left p {
        font-size: 13px;
      }

      .search-btn {
        width: 160px;
        height: 30px;
        font-size: 13px;
      }

      .section-right img {
        width: 100%;
        height: auto;
      }
    }

    @media (max-width: 480px) {
      .section-left h2 {
        font-size: 18px;
      }

      .section-left p {
        font-size: 12px;
      }

      .search-btn {
        width: 150px;
        height: 28px;
        font-size: 12px;
      }

      .section-right img {
        width: 100%;
        height: auto;
      }
    }
  `}
</style>








            <div className="section bg-map d-block">
                <div className="container"style={{width:'5000px'}}>
                    <div className="box-map">
                                      <iframe   className="wow animate__animated animate__fadeIn" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={420} style={{ border: 0 ,height:'500px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                        <div className="map-info"style={{background:'black'}}>
                            <h5 style={{color: 'rgb(96, 199, 247)'}}>Looking for executive car service?</h5>
                            <p className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                               </p>
                            <p className="color-white-700 mb-10 wow animate__animated animate__fadeIn"style={{color:'white'}}>
                            Instantly reserve premier chauffeur service on our platform or mobile app with all-inclusive pricing. Powered by AI, our dynamic pricing ensures you receive the best quotes for your destination. Say goodbye to waiting for quotes and navigating complicated booking processes. With us, your journey starts with ease.
                            </p>
                            <a href="/your-target-page">
                            <button className="search-btn" style={{width:'200px',height:'40px',borderRadius:'20px',background: 'rgb(248, 151, 25)',color:'black'}}>Ready to Book </button>
                              </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
