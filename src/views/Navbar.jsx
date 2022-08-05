import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import Logo from "../assets/icons/Logo.png"
import { HOME, NEWS, MEDIA, SHOP, CLUB, STAT, ACADEMY } from "../assets/Icons"

class Navbar extends Component {
  state = { 
    scroll: 0,
    burger: false,
   }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  listenToScroll = () => {
    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop

    this.setState({
      scroll: winScroll,
    })
  }
  handleBurger = () =>{
    this.setState({
      burger: !this.state.burger
    })
  }
  render() { 
    return (
      <React.Fragment>
        <div className={this.state.scroll > 800 ? "nav__fixed nav__scrolled" : "nav__fixed"}>
          <div className="navbar">
            <div className="logo">
              <a href="/"><img src={Logo} alt="" /></a>
            </div>
            <div className="nav">
              <nav style={this.state.burger === false ? {right: "-100%"} : {right: "0%"}}>
                <div className="links">
                  <button onClick={this.handleBurger} className='close__btn'>
                    <span></span>
                    <span></span>
                  </button>
                  <NavLink onClick={this.handleBurger} to="/">Bosh sahifa<HOME/></NavLink>
                  <NavLink onClick={this.handleBurger} to="/news">Yangiliklar<NEWS/></NavLink>
                  <NavLink onClick={this.handleBurger} to="/media">Media<MEDIA/></NavLink>
                  <NavLink onClick={this.handleBurger} to="/shop">Do'kon<SHOP/></NavLink>
                  <NavLink onClick={this.handleBurger} to="/club">Klub<CLUB/></NavLink>
                  <NavLink onClick={this.handleBurger} to="/satatistika">Statistika<STAT/></NavLink>
                  <NavLink onClick={this.handleBurger} to="/academy">Akademiya<ACADEMY/></NavLink>
                </div>
              </nav>
              {/* <div onClick={this.handleBurger} className={this.state.burger === false ? "" : "nav__show"}></div> */}
              <button onClick={this.handleBurger} className='burger__btn'>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Navbar;