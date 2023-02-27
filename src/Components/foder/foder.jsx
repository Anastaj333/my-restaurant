import React from 'react'
import './foder.css'
import log from './../../imgs/FoodYummy.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='contact'>
            <img src={log}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                itaque.
            </p>
            <ul className='icons'>
             <li><i class="uil uil-instagram-alt"></i></li>
             <li> <i class="uil uil-facebook-f"></i></li>
             <li> <i class="uil uil-linkedin"></i></li>
             <li> <i class="uil uil-twitter"></i></li>
            </ul>
        </div>
        <div className='contact'>
            <h3>About us</h3>
            <p>    Lorem ipsum dolor sit cinsectetur adipisicing elit. Accusantium at officia obcaecati rerun, incidut dolor optio eaque sequi nam architecto!
            </p>
        </div>
        <div className='contact'>
            <h3>contact us</h3>
            <p>+212 698732035</p>
            <p>tajanass10@gmail.com</p>
            <p>@tajanass10</p>
            <p>112 Street Ground Footer Morocco</p>
        </div>
    </div>
  )
}

export default Footer