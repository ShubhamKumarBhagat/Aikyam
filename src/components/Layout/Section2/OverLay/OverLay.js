import react from "react";
import './OverLay.css';
import image from './Sandwich.svg';
const text="Hi, I am Sandwich"
const para="Welcome to the world of Aikyam"

const OverLay=(props)=>{
    return (<div className="overlay" onClick={props.onClick}>
    <div><h1 className="text__sandwich">{text}</h1>
    <p className="welcome-text">{para}</p></div>
        <img className="image__sandwich" src={image}></img>
        
    </div>)
};
export default OverLay;
