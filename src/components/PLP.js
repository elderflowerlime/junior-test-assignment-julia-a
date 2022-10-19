import './PLP.css'
import React, { Component } from 'react'
import ProductA from '../resources/photos/ProductA.png'
import ProductB from '../resources/photos/ProductB.png'
import ProductC from '../resources/photos/ProductC.png'
import ProductD from '../resources/photos/ProductD.png'

export default class PLP extends Component {
  render() {
    return (
      <div className="plp-container">
        <div className='category-name'>
            <h1>Category name</h1>
        </div>
        <div className="product-cards">
            <div className="one-product">
                <img src={ProductD} alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src={ProductB} alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src={ProductC} alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src={ProductA} alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src={ProductD} alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
            <div className="one-product">
                <img src={ProductC} alt=""></img>
                <p className="product-name">Apolio Running Short</p>
                <p className="product-price">$50.00</p>
            </div>
        </div>
      </div>
    )
  }
}
