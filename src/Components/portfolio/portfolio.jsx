import React from 'react'
import './portfolio.css'
import portfolio from './../../imgs/p.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'> 

        <div className="image">
            <img src={portfolio} alt=""/>
        </div>

        <div className='contenu'>
            <h1>
            buy premium pan <br/>
            free hand toast !
            </h1>
            <h3>
                lorem, ipsum dolor sit amet consectetur 
                qdipisicing elit. modi, molestias
            </h3>
            <button>buy now</button>
        </div>

    </section>
  )
}

export default Portfolio