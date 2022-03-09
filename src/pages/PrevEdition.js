import React from "react";
import react from "react";
import './PrevEdition.css';
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import 'react-vertical-timeline-component/style.min.css';
const PrevEdition = (props) => {
  const len = props.linksArray.length;
  return (

    <div className="preveditions">
    <div className="vertical-line"></div>
      <VerticalTimeline className={"vertcaltimeline"} lineColor="black">
      {props.linksArray.reverse().map((link, index) => {
        return (
          <VerticalTimelineElement contentStyle={{background:"rgb(177, 56, 0)",padding:"0"}} iconStyle={{background:"#fa4810"}} icon={<h1 style={{color:"white",height:"inherit",fontFamily:"montserrat",display:"flex",justifyContent:"center",alignItems:"center"}}>A</h1>}>
          <a href={link} className="verticaltimeline__elements" target="_blank">Aikyam {len-index}</a>
          </VerticalTimelineElement>
        );
      })}
      </VerticalTimeline>

    </div>
  );
};

export default PrevEdition;
