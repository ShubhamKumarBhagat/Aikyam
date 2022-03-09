import React from "react";
import react from "react";
import Section1 from "../components/Layout/Section1/Section1";
import Section2 from "../components/Layout/Section2/Section2";
import Footer from "../components/Layout/Footer/Footer";
const Landing=(props)=>{
    return (<React.Fragment>
    <Section1 link_to_latest={props.link_to_latest}></Section1>
      <Section2></Section2>
      <Footer></Footer>

    </React.Fragment>);
};

 export default Landing;