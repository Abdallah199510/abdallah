import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Lead() {
  

  const [iswhitemode, setwhitemode] = useState(false); // حالة الوضع

  const toggleMode = () => {
    setwhitemode(!iswhitemode); // تبديل الوضع
  };




    return ( 
        <>
        <section  className="leads">
          <section className={`summary  container d-flex justify-content-between ${iswhitemode ?"whitemodel" :"" }`}>
            <div className="aboutus d-flex flex-column">
             <Link className=" fw-bold " to="/homepage">HOME</Link>
             <Link className=" fw-bold ">ABOUT US</Link>
             <Link className=" fw-bold ">CONTACT</Link>
             <Link className=" fw-bold ">OUR DEVELOPMENTS</Link>
             <Link className=" fw-bold ">MEDIA CENTER</Link>
             <Link className=" fw-bold ">INNOVATION</Link>
             <Link className=" fw-bold ">CSR</Link>
             <Link className=" fw-bold ">CARRERS</Link>
             <Link className=" fw-bold ">WE CARE</Link>
             <Link className=" fw-bold ">EDUCATION</Link>
             <Link className=" fw-bold ">PARTNERS</Link>
             <Link className=" fw-bold ">BLOOMFIELDS</Link>
            </div>
            <div className="basics py-2 d-flex flex-column align-items-start ">
                <h1 className="mb-4">CONTACT US</h1>
                <h5>Omran Group Headquarters</h5>
                <p>20 Aisha Al Taimoria Street - Garden City - Beside Four Seasons - Nile Plaza <br /> Hotel 1st floor, No.(5) <br />
                 Phone: +202 27929892 / +202 27929893 <br />
                 Fax: +202 27951268</p>
                 <div className="btn mb-3 ">
                    <button className={` ${iswhitemode ? "whitemode" :""}`}>VISIT OUR SALES CENTER</button>
                    <button className="ms-2">BOOK NOW</button>
                 </div>
                 <h1 className="mb-4">DISPLAY</h1>
                 <div className="d-flex align-items-center">
                  <h3>LIGHT</h3>
                  <div className="toggle-switch mx-2" onClick={toggleMode}>
                     <div className={`toggle-knob ${iswhitemode ? "white" :"dark"}`}></div>
                 </div>
                  <h3>DARK</h3>
                 </div>

            </div>

          </section>
        </section>
        </>
     );
}

export default Lead;