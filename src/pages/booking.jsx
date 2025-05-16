import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
    const navigate=useNavigate()
    function exit(){
        navigate('/home')
    }

    const [data,setdata]=useState({name:'',project:'',gender:"",email:'',phone:''})

    return ( 
        <>
<section className="register bg-black w-100 overflow-hidden z-0" >

            
<div  className="data  mx-auto  bg-dark py-3 px-5 ">

    <div className="info d-flex"> 
    <button className="btn-white fs-2 text-white border-0 bg-dark " onClick={exit}>x</button>
    </div>
    <h1 className="text-white text-center mt-5">BOOK NOW</h1>
    
   
       <form className="inputs d-flex flex-row mt-4 ">
         
       <div className="w-50 px-1">
        <input type="name" className=" my-2 py-1 w-100" name="" id="" placeholder="NAME" 
        onChange={(e)=>{
            setdata({...data,name:e.target.value})
        }}/>
        <select type="project" className="my-2 py-1  w-100" name="" id=""  >
                  <option selected>PLEASE SELECT PROJECT</option>
                  <option value="male">male</option>
                  <option value="female">female</option>

            onChange={(e)=>{
            setdata({...data,project:e.target.value})
        }}
        </select>
        <select type="gender" className=" my-2 py-1  w-100" name="" id="" >
                  <option selected>PLEASE SELECT UNIT TYPE</option>
                  <option value="male">male</option>
                  <option value="female">female</option>

         onChange={(e)=>{
         setdata({...data,gender:e.target.value})
        }}         
        </select>
        </div>
        <div className="w-50 px-1">
        <input type="emailaddress" className=" my-2 py-1  w-100" name="" id="" placeholder="Email Address" 
          onChange={(e)=>{
            setdata({...data,email:e.target.value})
        }}/>
        <input type="phone" className=" my-2 py-1 w-100" name="" id="" placeholder="MOBILE NUMBER"
          onChange={(e)=>{
            setdata({...data,phone:e.target.value})
        }}/>
        
        </div>
      
       </form>
       <div className="button d-flex justify-content-center pt-2 pb-5  "><button  className="w-100 py-2 fw-bold " >Submit</button></div>
    </div>
        </section>
        </>
     );
}

export default Booking;