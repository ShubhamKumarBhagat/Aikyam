import React from "react";
import react, { useState } from "react";
import Button from "../../../UI/Button/Button";
import image from "./AikyamWebsiteBG.png";
import './Body.css';
const introtext="Bi-monthly, E-magazine of Indian Institute of Information Technology, Tiruchirappalli.....";
const Body=()=>{
    
    
    return (
        <div className="bdy">
        <div className="sec1-bdy">
            <div className="sec1-bdy__text">
            <h1 className="sec1-bdy__heading">Aikyam</h1>
            <p className="sec1-bdy__intro">{introtext}</p>
            <Button className="button__latest-edition">Latest Issue</Button>
            </div>
            <img className="sec1-bdy__image" src={image}/>
        </div>
        <Button className="button__latest-edition-smallscreen">Latest Issue</Button>
        </div>
    );

};

export default Body;