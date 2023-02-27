import React from 'react'
import './test.css'
import chef from './../../imgs/chef.jpg'

const Test = () => {
  return (
    <section id='test'>
        <div className='container'>
            <h1 className='titl'>hellow world</h1>
        
        <div className="box">
            <img src={chef} alt="" />
            <p>
                 He Printing and Typestting the ndustry. 
                        Lorem Ipsun has been the Industry's
            </p>
        </div>
        <div className="box">
            <img src={chef} alt="" />
            <p>
                 He Printing and Typestting the ndustry. 
                        Lorem Ipsun has been the Industry's
            </p>
        </div>
        <div className="box">
            <img src={chef} alt="" />
            <p> 
                 He Printing and Typestting the ndustry. 
                        Lorem Ipsun has been the Industry's</p>
        </div>
        </div>
    </section>
  )
}

export default Test