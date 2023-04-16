import reviews from "./data.js";
import './app.css'
import { useState } from "react";
function Reviews() {
   
   const [index, setIndex] = useState(0)
   const { name, job, image, text, } = reviews[index];
   
   
   function prevBtn(){
      if (index < 3) {
         setIndex(prevIndex => prevIndex - 1);
       } else {
         setIndex(0);
       }
   }
   function nextBtn() {
      if (index > 0) {
         setIndex(prevIndex => prevIndex + 1);
       } else {
         setIndex(3);
       }
   }
   if (index < 0) {
      setIndex(3);
    } else if (index > 3) {
      setIndex(0);
    }

    function random() {
      setIndex(Math.floor(Math.random() * 4))
    }

   return(
      <div className="review">
         <div className="img-container">
            <img src={image} alt="" className="person-img" />
            <span className="quote-icon"><i class="fa-sharp fa-solid fa-quote-right"></i>
            </span>
         </div>
         <h4 className="author">{name}</h4>
         <p className="job">{job}</p>
         <p className="info">{text}</p>
         <div className="button-container">
            <button className="prev-btn" onClick={prevBtn}  ><i class="fa-solid fa-chevron-left"></i></button>
            <button className="next-btn" onClick={nextBtn}><i class="fa-solid fa-angle-right"></i> </button>
         </div>
         <button className="random-btn" onClick={random}>Surprise me</button>
      </div>
   )
}
export default Reviews;