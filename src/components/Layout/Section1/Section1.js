import React, { useState } from "react";
import react from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
const Section1=(props)=>{
    return ( 
        <React.Fragment>
            <Header></Header>
            <Body link_of_latest={props.link_to_latest}></Body>
        </React.Fragment>
    );
};

 export default Section1;