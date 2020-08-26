import React from 'react';
import web from "../src/images/webdev1.png"
import { NavLink } from 'react-router-dom';
import Common from './Common'


const Home =()=>{
    return(
        <>
        <Common name='Grow your business with ' imgsrc={web} visit="/about" btnname="Get Started"/>
        </>
    )
}

export default Home