import React from "react";
import './Service.css';
import logo1 from "./../../imgs/Services2.png";
import logo2 from "./../../imgs/Services1.png";
import logo3 from "./../../imgs/Services3.png";

export default function OurServices(){
    return(
        <section id="services">

            <div className="title">
                <h2>What we do ?</h2>
                <p>
                    Lorem ipsum dolor sit cinsectetur adipisicing elit. Accusantium 
                    at officia obcaecati rerun, incidut dolor optio eaque sequi nam 
                    architecto!
                </p>
            </div>

            <div className="services">
                <div className="service">
                    <img src={logo1} alt=""/>
                    <p>
                        He Printing and Typestting the ndustry. 
                        Lorem Ipsun has been the Industry's
                    </p>
                    <button>Read More</button>
                </div>
                <div className="service">
                    <img src={logo2} alt=""/>
                    <p>
                        He Printing and Typestting the ndustry. 
                        Lorem Ipsun has been the Industry's
                    </p>
                    <button className="yellow">Read More</button>
                </div>
                <div className="service">
                    <img src={logo3} alt=""/>
                    <p>
                        He Printing and Typestting the ndustry. 
                        Lorem Ipsun has been the Industry's
                    </p>
                    <button>Read More</button>
                </div>
            </div>

        </section>
    )
}