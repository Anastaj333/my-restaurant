import React from "react";
import data from "../data";
import './products.css'


const Products = () => {
    const Data = data.map((item) => {
        return(
            <div className="product">
                <img src={item.img} alt=""/>
                <h2>{item.title}</h2>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
                <button>by now</button>
            </div>
        )
    })
  return (
    <section id="products">
        <h1>
        <span>Favourite</span> All the time!
        </h1>
      <div className="products">
      {Data}
      </div>
    </section>
  )
}

export default Products