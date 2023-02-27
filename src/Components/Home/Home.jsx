import React from "react";
import './Home.css'
import HeroDesign from "./../../imgs/HeroDesign.png";
import hero from "./../../imgs/hero.jpg"

function Home(){
    return(
        <section className="home">
            <div className="hero">
                <img src={hero} alt=""/>
            </div>

            <div className="content">
             <div className="background">
                <img src={HeroDesign} alt="" />
                <h1>BIG SALE<br/>
                 <span>50% OFF</span>
                </h1>
             </div>
             <div className="infos">
               <h2>Retailer</h2>
                <p>Lorem ipsum sit, amet consectetur adipisicing elit. Vitae,
                qsepernatur ataque. aius quia voluptas numquam!</p>
                <button>order now</button>
              </div>

            </div>
        </section>
    )
}

 

export default Home