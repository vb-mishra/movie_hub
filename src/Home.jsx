import React from "react";
// import img1 from "./movieps/Asur.jpeg";
// import Emg from "./Emg";
import immg1 from "./movieps/PB.jpg";
import immg2 from "./movieps/Asur.jpeg";
import immg3 from "./movieps/Batman.jpg"
import immg4 from "./movieps/DDLJ.jpg"
import immg5 from "./movieps/Mr_Robot.jpg"
import immg6 from "./movieps/Tumbbad.jpg"
import immg7 from "./movieps/Devdas.jpg"
import immg8 from "./movieps/Asur.jpeg"

const Home = (homeCard) => {
    return (
        <div className="home">
           
            <div className="homeCard">
                <div className="mcard1 mcard">
                     <img className="ff f1 " src={immg1} alt="" />
                </div>
                <div className="mcard2 mcard">
                <img className="ff f2 " src={immg2} alt="" />
                </div>
                <div className="mcard3 mcard">
                <img className="ff f3 " src={immg3} alt="" />
                </div>
                <div className="mcard4 mcard">
                <img className="ff f4 " src={immg4} alt="" />
                </div>
                <div className="mcard5 mcard">
                <img className="ff f5 " src={immg5} alt="" />
                </div>
                <div className="mcard6 mcard">
                <img className="ff f6 " src={immg6} alt="" />
                </div>
                <div className="mcard7 mcard">
                <img className="ff f7 " src={immg7} alt="" />
                </div>
                <div className="mcard8 mcard">
                <img className="ff f8 " src={immg8} alt="" />
                </div>
            </div>
           </div>
    );}

    export default Home;