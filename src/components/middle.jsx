import { useState } from "react";
import middle1img from "../images/ssd.svg";
import middle2img from "../images/odc.svg";
import middle3img from "../images/rtdd.svg";
function Middle() {

  const [writeups, setWriteups] = useState([
    {src: middle1img , title:'Future Ready' ,body:'Change is inevitable. Hence, we ensure that irrespective of the nature \n of the changes be a statutory or technological, we always bring you the\n latest updates. So that your business keeps functioning as smooth\n always.' ,id:1},
    {src: middle2img , title:'Flexible Workflow Model' ,body: ' AOS flexible workflow model gives you the ability to define\n automated \nworkflow rules that match your business pratices. The system\nconforms to general agricultural practices',id:2},
    {src: middle3img , title:'Highly Adaptable,Enterprise-Class\nApplications',body: '>AOS delivers a broad set of interated Agriculture business\nfunctionality on a highly adaptable platform.Role-based management\ndashboard with drill-down capability allow you to effectively monitor\n and analyse your operators and pre-built charts and graph can be\neasily expanded to meet your specific needs',id:3},
   ])

  return (
    <>
    <div className="middle">
         {/* {writeups.map((writeup) => ( */}
             <div className="feature-content" key= {writeup.id}>
                 <img src={writeup.src} alt='icon'/>
                 <p><strong> {writeup.title} </strong></p>
                 <p>{writeup.body} </p>
             </div>
         ))}
     </div>
      
    </>
  );
}

export default Middle;
