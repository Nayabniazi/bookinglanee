import Link from "next/link";

export default function Info1() {
    return (
        <>
          
<section className="image-section">
    <h3 style={{marginLeft:'200px',marginBottom:'50px',marginTop:'80px'}}>Trusted by professionals at</h3>
  <div className="image-row top-row"style={{marginLeft:'200px',marginRight:'350px'}}>
    
    <img src="/img/netflix.png" alt="Image 2" className="image"style={{width:'205px'}} />
    <img src="/img/google.png" alt="Image 3" className="image"style={{width:'205px'}} />
    <img src="/img/apple.png" alt="Image 4" className="image"style={{width:'100px'}} />
    
  </div>
  <div className="image-row bottom-row"style={{marginLeft:'200px',marginRight:'350px'}}>
    <img src="/img/microsoft.png" alt="Image 6" className="image" style={{width:'250px'}}/>
    <img src="/img/adidas.png" alt="Image 7" className="image" style={{width:'170px',marginLeft:'180px'}}/>
    <img src="/img/more.png" alt="Image 8" className="image"style={{marginLeft:'190px',width:'250px'}} />
    
  </div>
</section>


<style jsx>{
`
.image-section {
padding: 20px;
}

.image-row {
display: flex;
justify-content: space-between;
margin-bottom: 20px; /* Space between top and bottom rows */
}

.image {
width: 6%; /* Adjust the image width */
height: auto;
object-fit: cover; /* Ensures the images maintain their aspect ratio */
border-radius: 8px; /* Optional for rounded corners */
}

/* Responsive Design */
@media (max-width: 1200px) {
.image {
width: 20%; /* 4 images per row on medium screens */
}
}

@media (max-width: 768px) {
.image {
width: 48%; /* 2 images per row on small screens */
}
}

@media (max-width: 480px) {
.image {
width: 100%; /* 1 image per row on extra small screens */
}
}



`}

</style>
        </>
    )
}
