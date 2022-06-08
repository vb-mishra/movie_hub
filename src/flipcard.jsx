import React from "react"
import dp from "./movieps/Vbm.jpg";

const Flipcard  = () => {
    return(
      <div className="flipCard">
      <div className="flipCardInner">
          <div className="flipCardFront">
              <img className="dpimg" src={dp} size={10} alt="" />
          </div>
  
          <div className="flipCardBack">
              <p className="name">Vidya Bhushan</p>
              <p>bhushanvidya275@gmail.com</p>
          </div>
      </div>
  </div>
    );
}

export default Flipcard;


