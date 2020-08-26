import React from 'react';
import web from "../src/images/webdev2.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common';


const about =()=>{
    return(
        <>
        <Common name='Welcome to About page of ' imgsrc={web} visit="/contact" btnname="Contact now"/>
        </>
    )
}

export default about