import react from "react";
import Button from "../../UI/Button/Button";
import "./Section2.css";

const para1 =
  "This Aikyam is not the first attempt to publish a magazine by IIITTians. Almost two years ago, the passed out seniors had taken the initiative and published the readme.txt. The name of the magazine is now changed but the same spirit is still alive. With our mascot, Sandwich, we have also been growing. Now we are all set to celebrate Sandwich's first birthday.";
const Section2 = () => {
  return (
    <div className="sec2" id="about">
      <h1 className="sec2__head" >
        About
      </h1>
      <p className="about_para">{para1}</p>
      <Button className="sandwich__btn">Meet our Mascot</Button>
        
    </div>
  );
};

export default Section2;
