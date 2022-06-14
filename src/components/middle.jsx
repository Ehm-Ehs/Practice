import { useState } from "react";
import middle1img from "../images/ssd.svg";
import middle2img from "../images/odc.svg";
import middle3img from "../images/rtdd.svg";
import firstbg from "../images/mid1.svg";
import secondbg from "../images/middle2.svg";


function Middle() {

  const [writeups, setWriteups] = useState([
    {src: middle1img , title:'Future Ready' ,body:'Change is inevitable. Hence, we ensure that irrespective of the nature of the changes be a statutory or technological, we always bring you the latest updates. So that your business keeps functioning as smooth always.', bg:firstbg ,id:1},
    {src: middle2img , title:'Flexible Workflow Model' ,body: ' AOS flexible workflow model gives you the ability to define automated workflow rules that match your business practices. The system conforms to general agricultural practices',bg:secondbg,id:2},
    {src: middle3img , title:'Highly Adaptable,Enterprise-Class Applications',body: 'AOS delivers a broad set of integrated Agriculture business functionality on a highly adaptable platform.Role-based management dashboard with drill-down capability allow you to effectively monitor and analyse your operators and pre-built charts and graph can be easily expanded to meet your specific needs',bg:firstbg,id:3},
   ])

  return (
    <>
    <div className="middle">
         {writeups.map((writeup) => (
             <div className="middle-content" key= {writeup.id}>
                 <div className="middle-img" style={{backgroundImage:`url(${writeup.bg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                   <img src={writeup.src} alt='icon'/>
                </div>
                  
                 <div className="middle-type">
                 <p className="middle-title"><strong> {writeup.title} </strong></p>
                 <p>{writeup.body} </p>
                 </div>
             </div>
         ))}
     </div>
      
    </>
  );
}

export default Middle;
