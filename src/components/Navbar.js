import logo from '../logo.svg';
import currency from '../resources/currency.svg';
import cart from '../resources/cart.svg';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-category">
                <ol className="category-list">
                    <li className="nav-item">
                      <Link to='/' className="nav-links">WOMEN</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/' className="nav-links">MEN</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/' className="nav-links">KIDS</Link>
                    </li>
                </ol>
            </div>
            <Link to='/' className='navbar-logo'>
              <img src={logo} className="shop-logo" alt="logo" />
            </Link>
            <div className="navbar-functions">
                <div className="currency-switcher"><img src={currency} alt="currency"></img></div>
                <div className="cart"><img src={cart} alt="cart"></img></div>
            </div>
        </div>
      </nav>
    )
  }
};
