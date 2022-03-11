import react from "react";
import Button from "../../UI/Button/Button";
import "./Section2.css";
import OverLay from "./OverLay/OverLay";
import { useState } from "react";
import reactDom from "react-dom";

const para1 =
  "Aikyam was born in September 2020, as an attempt to provide students to creatively express themselves remarkably in their mother tongue through poetry, short story, essay, painting, etc. Aikyam creates a unique opportunity to remember one’s culture and to celebrate others’ culture. Such an initiative encourages the spirit of unity among students. Since beginning, Sandwich has been integral part of Aikyam's fruitful journey."
const Section2 = () => {

  const [showoverlay,setshowoverlay]=useState(false);
  const onClickHandler=()=>{
    setshowoverlay((prev)=>{return !prev});
  };
  return (
    <div className="sec2" id="about">
      <h1 className="sec2__head" >
        ABOUT
      </h1>
      <p className="about_para">{para1}</p>
      <Button className="sandwich__btn" onClick={onClickHandler}>Meet our Mascot</Button>
      {showoverlay?reactDom.createPortal(<OverLay onClick={onClickHandler}></OverLay>,document.getElementById("over-lay")):""}
    </div>
  );
};

export default Section2;
