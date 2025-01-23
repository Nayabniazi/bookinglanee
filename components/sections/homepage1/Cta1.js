import Link from "next/link";

export default function Cta1() {
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




    return (
        <>
      
          
<div className="review-slider"style={{marginBottom:'30px'}}>
      <div className="slider-track">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt="User Icon" className="review-icon" />
            <div className="rating">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>

<style jsx>{
    
    
    `
    /* Slider Container */
.review-slider {
  width: 100%;
  overflow: hidden; /* Hide overflow to create a slider effect */
  position: relative;
  padding: 20px;
}

/* Slider Track */
.slider-track {
  display: flex;
  gap: 20px;
  animation: scroll 20s linear infinite;
}

/* Review Card */
.review-card {
  width: 250px;
  flex-shrink: 0; /* Prevent cards from shrinking */
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
}

/* Review Icon */
.review-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 10px;
  border-radius: 50%;
  object-fit: cover;
}

/* Rating Stars */
.rating {
  font-size: 18px;
  color: #ffcc00;
  margin-bottom: 10px;
}

/* Review Text */
.review-text {
  font-size: 14px;
  color: #333;
}

/* Smooth Scrolling Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .review-card {
    width: 200px;
  }
}

    
    `}

</style>  

        </>
    )
}
