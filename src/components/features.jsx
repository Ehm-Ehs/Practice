import { useState } from "react";
import dataAnalysis from "../images/da.svg";
import auditLogs from "../images/al.svg";
import farmManagement from "../images/fm.svg";
import farmerOnboarding from "../images/fo.svg";
import gis from "../images/gs.svg";
import inputDistribution from "../images/id.svg";
import inventory from "../images/im.svg";
import userAccess from "../images/uac.svg";

const Feature = () => {
const name=123;
const obj={name}
    const [features, setFeatures] = useState([
        {src: farmManagement , title:'Farm Managetment' ,id:1},
        {src: inputDistribution , title: 'Input Distribution',id:2},
        {src: farmerOnboarding , title: 'Farmer Onboarding',id:3},
        {src: gis , title:' GIS Service',id:4},
        {src: inventory , title:'Inventory Management',id:5},
        {src: userAccess , title:'User Access Control',id:6},
        {src: dataAnalysis, title:'Data Analysis',id:7},
        {src: auditLogs , title:'Audit Log',id:8}
    ])

  return (
    <>
     <div className="feature">
         {features.map((feature) => (
             <div className="feature-content" key= {feature.id}>
                 <img src={feature.src} alt='icon'/>
                 <p><strong> {feature.title} </strong></p>
             </div>
         ))}
     </div>
    </>
  );
};

export default Feature;