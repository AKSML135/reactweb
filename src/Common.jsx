import React from 'react';
import web from "../src/images/477399-PGX1E8-696.jpg"
import { NavLink } from 'react-router-dom';



const Common =(props)=>{
    return(
        <>
        <section id="header" className="">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-11 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>{props.name}<strong className="brand-name">  Aman's World</strong></h1>
                        <h2 className="my-3">
                            We are the brothers of Wolfpack and we howl
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started ">
                            {props.btnname}
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animated" alt=""></img>
                    </div>
                    </div> 
                </div>
            </div>
        </div>

        </section>
        </>
    )
}

export default Common