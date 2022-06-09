import table from "../images/table.svg";
import partners1 from "../images/partners1.svg";
import partners2 from "../images/partners2.svg";
import partners3 from "../images/partners3.svg";
import partners4 from "../images/partners4.svg";
import Button from "./btn";
function Top() {
    return (
        <>
            <div className="top ">
                <div className="toptype">
                    <div className="innertop">
                        <div className="aos">
                            <h1>Agricultural Operating System</h1>
                            <h1>AOS</h1>
                        </div>
                        <p className="aosSub">
                            Our technology solution aimed at digitizing all processes in
                            agricultural value chain
                        </p>
                        <Button />
                        <div>
                            <img src={table} alt="table" />
                        </div>
                    </div>
                </div>
                <div className="partners">
                    <strong>
                        <p>Trusted by global companies</p>
                    </strong>
                    <div className="partimg">
                        <img src={partners1} alt="partners" />
                        <img src={partners2} alt="partners" />
                        <img src={partners3} alt="partners" />
                        <img src={partners4} alt="partners" />
                    </div>
                </div>
               
            </div>
            </>
            );
  }

            export default Top ;