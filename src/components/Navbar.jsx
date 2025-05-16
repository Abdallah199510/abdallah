
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import img from '../assests/om.png'
function Navbar() {



const [scroll,setscroll]=useState('')

useEffect(()=>{
  const handlescroll=()=>{
    setscroll(window.scrollY>50)
  }
  window.addEventListener('scroll',handlescroll)
  
},[])



  const location = useLocation();
  
  if (location.pathname === '/booking') {
    return null;  }


    if (location.pathname === '/lead' && scroll) {
      return null; 
    }
  
    
    
    return ( 
        <>
 <nav className={`navbar  ${scroll ? "scrolled" : ""} `}>
  <div className="navbar-container container">
    <Link
      className="navbar-brand text-primary fs-4 fw-bold text-white"
      to="/homepage"
    >
      <img width="250" src={img} alt="Logo" />
    </Link>

    <div className="ms-auto">
      <ul className="navbar-nav d-flex flex-row align-items-center">
        <li className="nav-item me-3">
          <Link to="/booking" className="nav-link fw-bold text-white">
            BOOK NOW 
            <svg
              className="svg-inline--fa fa-envelope fa-w-16 ms-2"
              aria-hidden="true"
              data-prefix="far"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={16}
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              ></path>
            </svg>
          </Link>
        </li>
        <li className="nav-item ">
        <Link className="text-white" to="/lead">
              <svg
               xmlns="http://www.w3.org/2000/svg"
               width="32" 
               height="26" 
               fill="none"
               stroke="currentColor"
                strokeWidth="2"
               className="bi bi-list"
               viewBox="0 0 16 16" 
               preserveAspectRatio="none" 
              >
                <path
                  d="M1 12h14M1 8h14M1 4h14"
                />
             </svg>
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}

export default Navbar;