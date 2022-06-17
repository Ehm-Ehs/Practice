



function Middle(props) {



  return (
    <>
    <div className={props.className} >
      <div className="middle-img" style={{backgroundImage:`url(${props.bg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
        <img src={props.src} alt="pic"/>
      </div>
      <div className="middle-type">
        <p className="middle-title"> <strong> {props.title} </strong> </p>
        <p className="middle-body"> {props.body} </p>
      </div>
         {/* {writeups.map((writeup) => (
             <div className="middle-content" key= {writeup.id}>
                 <div className="middle-img" style={{backgroundImage:`url(${writeup.bg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                   <img src={writeup.src} alt='icon'/>
                </div>
                  
                 <div className="middle-type">
                 <p className="middle-title"><strong> {writeup.title} </strong></p>
                 <p>{writeup.body} </p>
                 </div>
             </div>
         ))} */}
     </div>
      
    </>
  );
}

export default Middle;
