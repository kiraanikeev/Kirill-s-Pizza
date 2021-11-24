import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
import Slider from './../Slider/Slider';
function Navbar() {

const[clicked, setClicked] = useState(false)
console.log(clicked)
    return (
        <div>
        <section className={styles.navbar}>
            <div className={styles.logo}></div>
            <div className={styles.links}>
            <NavLink to='/home' className={styles.link}>Home</NavLink>
            <NavLink to='/menu' className={styles.link}>Menu</NavLink>
            <NavLink to='/about' className={styles.link}>About us</NavLink>
            <NavLink to='/contacts' className={styles.link}>Contacts</NavLink>
            <div className={styles.basket_box}>
            <NavLink to='/basket' className={styles.link}>Basket</NavLink>
            <div className={styles.basket}>0</div>
            </div>
            </div>
        </section>
        <button className={ !clicked ? styles.button : styles.button_active} onClick={()=>setClicked(!clicked)}/>
        <section className={clicked ? styles.navbar_hidden : styles.navbar_hidden_active}>

            <div className={styles.links_hidden}>
            <NavLink to='/home' className={styles.link_hidden} onClick={()=>setClicked(!clicked)}>Home</NavLink>
            <NavLink to='/menu' className={styles.link_hidden} onClick={()=>setClicked(!clicked)}>Menu</NavLink>
            <NavLink to='/about' className={styles.link_hidden} onClick={()=>setClicked(!clicked)}>About us</NavLink>
            <NavLink to='/contacts' className={styles.link_hidden} onClick={()=>setClicked(!clicked)}>Contacts</NavLink>
            <div className={styles.basket_box_hidden}>
            <NavLink to='/basket' className={styles.link_hidden} onClick={()=>setClicked(!clicked)}>Basket</NavLink>
            <div className={styles.basket_hidden}>0</div>
            </div>
            </div>
        </section>
        <Slider clicked={clicked}/>
        </div>
    )
}

export default Navbar
