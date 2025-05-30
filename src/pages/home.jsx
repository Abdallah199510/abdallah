
import { Routes, Route } from "react-router-dom";
import Photos from "../pages/photos";
import Videos from "../pages/videos";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import mapImg from "../assests/map2.jpg"
import secmapImg from "../assests/map3.jpg"


function Home() {


  const location = useLocation();
  
if (['/booking', '/homepage', '/lead'].includes(location.pathname)) return null;

    
    return ( 

        <>
 <section className="home  ">
  
    
  <div className="lists d-flex flex-column me-3 ">
    
       <div class="center">
         <div className="ring-container">
         <div class="ring"></div>
         <span>
         <a className="spin circle" to="ana.html" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-9" aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg> <i class="fab fa-facebook-f"></i></a>
         </span>
         </div>
       </div>        
   
        <div class="center">
         <div className="ring-container">
         <div class="ring"></div>
         <span>
         <a target="_blank" className="spin circle" href="https://chatgpt.com/c/676ea4c4-bd74-8003-865f-b5f91e77cbcc"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><i class="fab fa-twitter"></i></a>
         </span>
         </div>
      </div>
        
       
        <div class="center">
       <div className="ring-container">
       <div class="ring"></div>
        <span>
        <a className="spin circle" href="https://chatgpt.com/c/676ea4c4-bd74-8003-865f-b5f91e77cbcc" target="_blank"><svg class="svg-inline--fa fa-linkedin fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg> <i class="fab fa-linkedin"></i> </a>
        </span>
       </div>
        </div>    
      
        <div class="center">
         <div className="ring-container">
         <div class="ring"></div>
         <span><a className="spin circle" href="https://chatgpt.com/c/676ea4c4-bd74-8003-865f-b5f91e77cbcc" target="_blank"><svg class="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg> <i class="fab fa-youtube"></i></a>
         </span>
         </div>
        </div>        


        <div className="bloom ">
        <h1 className="text-white ">  Bloomfields</h1>
       </div>
          
  </div>

</section>

<section className="information  ">
  <h1 className="fw-bold text-center text-white text-uppercase">the heart of it all</h1>
  <hr />
  <p className=" text-center text-white">Rolling out on 415 acres of land, Bloomfields is the most charming and interconnected green town in 
     City . Always on the rise, and in search for fresh bold ideas, the development surrounds you with sweeping views over lush sun-kissed parks,
      open-air galleries, top-notch education, a burgeoning cultural scene, as well as world-class facilities, and a sustainable lifestyle inspired 
      by the best integrated ecosystems in the world. Designed to offer something just for everyone, Bloomfields is Tatweer
     Misr's prime innovative project in Cairo that's set to become Egypt's hotbed for startups, entrepreneurs, as well as makers
      and doers who wish to execute flawlessly at home, in the office or at the gym. Boasting one-of-a-kind functions, and top-notch
       amenities at every doorstep, Bloomfields is carefully planned to make life easier,
        and more enjoyable without having to commute.</p>
   <div className="buttons d-flex flex-row justify-content-center my-5">
    <button className="button-custom mx-3 px-5 py-2 fw-bold ">DOWNLOAD BROCHURE</button>
    
    <button className="button-custom mx-3 px-5 py-2 fw-bold ">BOOK YOUR UNIT</button>
    </div>     


</section>

<section className="map d-flex flex-wrap flex-md-nowrap">
  <div className="mapImage col-12 col-md-6">
    <img className="w-100" src={mapImg} alt="" />
  </div>

  <div className="heart col-12 col-md-6 my-4 px-4 text-center text-white">
    <h1 className="fw-bold text-uppercase">THE HEART OF IT ALL</h1>
    <hr />
    <p>
      Bloomfields enjoys a strategic location just minutes away from everywhere. The development is nestled between Cairo’s New Administrative Capital and New Cairo. The project provides direct access to the New Capital’s fast train station and The New Capital's International Airport, and also enjoys a strategic location only 45 minutes away from Ain El Sokhna, and can be easily accessed via the city’s major Ring Roads.
    </p>

    <button className="button-custom btn btn-light fw-bold w-50 d-flex justify-content-center align-items-center gap-2 mt-5">
      Get Direction
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
      </svg>
    </button>
  </div>
</section>

<section className="secondmap d-flex flex-wrap flex-md-nowrap">

  

  <h1 className="fw-bold text-center text-white text-uppercase heart my-5 px-5 col-12 col-md-6">Master Plan</h1>

 
  <img className="mapImage col-12 col-md-6" src={secmapImg} alt="" />
 


</section>

<section className="gallery  py-5">
  <h1 className="text-center text-white my-t">GALLERY</h1>

  <hr />
  <div className="content container  d-flex my-5">
    <Link to="/videos" className="nav-link fw-bold text-white mx-2 fs-3">VIDEO</Link>
    <Link to="/photos" className="nav-link fw-bold text-white mx-2 fs-3"> PHOTO</Link>
  </div>
</section>
       <Routes>
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      <section className="inquire ">
        <hr className="text-white"/>
        <h1 className="text-center text-white my-5 ">INQUIRE NOW</h1>
        <hr className="line " />
      <form className=" mt-5 px-5">
         
       <div className=" px-5 d-flex gap-4 form-inputs">
        <input type="phone" className=" my-2 py-2 w-100 " name="" id="" placeholder="NAME" />
        <input type="phone" className=" my-2 py-1  w-100 " name="" id="" placeholder="EMAIL ADDRESS" />
        <input type="phone" className=" my-2 py-1 w-100 " name="" id="" placeholder="MOBILE NUMBER" />
        </div>
        <div className=" px-5 mt-2">
        <textarea  className=" my-2  pb-5 pt-3 w-100  " name="" id="" placeholder="MESSAGE" />
        <button className=" my-2  py-2  w-100  fw-bold">SUBMIT</button>
        
        </div>
      
       </form>
      
      </section>
      
      <section className="hyperlinks text-white py-5">
      <hr className="text-white "/>
    
  <div className="container d-flex justify-content-between align-items-start flex-row gap-4 ">
   
    <div className="">
      <h3 className="mb-3">ADDRESS</h3>
      <p className="mb-2">
        Building 30, North 90 Road,<br />
        5th Settlement, New Cairo, Egypt.<br />
      </p>
      <h3 className="fw-bold">16099</h3>
    </div>

    <div className="connects ">
      <h5 className="mb-3 fs-5">INFO</h5>
      <ul className="list-unstyled fw-bold">
        <li className="mb-2"><Link className=" text-decoration-none" to="/homepage">HOME</Link></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">ABOUT</a></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">CONTACT</a></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">CSR</a></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">CARRERS</a></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">WE CARE</a></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">MEDIA CENTER</a></li>
      </ul>
    </div>

  
    <div className="connects">
      <h5 className="mb-3 fs-5">OUR DEVELOPMENT</h5>
      <ul className="list-unstyled fw-bold">
        <li className="mb-2"><a className=" text-decoration-none" href="#">IN SHROUK</a></li>
        <li className="mb-2"><a className=" text-decoration-none" href="#">IN FIFTH SETTLEMENT</a></li>
        <li className="mb-2"><a className="text-decoration-none"  href="#">IN EL-OBOUR</a></li>
        <li><a className=" text-decoration-none" href="#">BLOOMFIELDS</a></li>
      </ul>
    </div>

   
    <div className="">
      <h5 className="mb-3">NEWSLETTER</h5>
      <p>
        Join our mailing list  to receive<br /> monthly
        news and updates <br />about our developments
      </p>
    </div>
  </div>
</section>

<footer className=" py-1">
<hr className="text-white "/>
<div className="container d-flex justify-content-between align-items-start flex-row gap-4 ">
   


   <div className="linked d-flex flex-wrap ">
   <div class="center ">
         <div className="ring-container">
         <div class="ring"></div>
         <span>
         <a className="spin circle" to="ana.html" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-9" aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg> <i class="fab fa-facebook-f"></i></a>
         </span>
         </div>
       </div>        
   
        <div class="center">
         <div className="ring-container">
         <div class="ring"></div>
         <span>
         <a target="_blank" className="spin circle" href="https://chatgpt.com/c/676ea4c4-bd74-8003-865f-b5f91e77cbcc"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><i class="fab fa-twitter"></i></a>
         </span>
         </div>
      </div>
        
       
        <div class="center">
       <div className="ring-container">
       <div class="ring"></div>
        <span>
        <a className="spin circle" href="https://chatgpt.com/c/676ea4c4-bd74-8003-865f-b5f91e77cbcc" target="_blank"><svg class="svg-inline--fa fa-linkedin fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg> <i class="fab fa-linkedin"></i> </a>
        </span>
       </div>
        </div>    
      
        <div class="center">
         <div className="ring-container">
         <div class="ring"></div>
         <span><a className="spin circle" href="https://chatgpt.com/c/676ea4c4-bd74-8003-865f-b5f91e77cbcc" target="_blank"><svg class="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="35" height="35" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg> <i class="fab fa-youtube"></i></a>
         </span>
         </div>
        </div>        

   </div>

 
   <div className="hi fw-bold ">
    <p className="text-white">DESIGNED & DEVELOPED BY <a style={{color:"rgb(255, 71, 19)" ,  cursor: "pointer"}}>Abdallah</a></p>
    
    
   </div>

  
   <div className="omran fw-bold text-white ">
     <p className="mb-3">COPY RIGHT OMRAN GROUP</p>
   
   </div>
 </div>

</footer>




        </>
     );
}

export default Home;