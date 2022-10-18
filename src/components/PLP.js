import './PLP.css'
import React, { Component } from 'react'

export default class PLP extends Component {
  render() {
    return (
      <div className="plp-container">
        <div className='category-name'>
            <h1>Category name</h1>
        </div>
        <div className="product-cards">
            <div className="one-product">
                <img src="..\resources\photos\Product D.png" alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src="../resources/photos/Product B.png" alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src="../resources/photos/Product B.png" alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src="../resources/photos/Product B.png" alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src="../resources/photos/Product B.png" alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src="../resources/photos/Product B.png" alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
        </div>
      </div>
    )
  }
}
