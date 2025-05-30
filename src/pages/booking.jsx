import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitBooking } from "../services/service";

function Booking() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    project: '',
    gender: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitBooking(data);
      alert("Booking submitted successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Submission failed!");
    }
  };

  return (
    <section className="register bg-black w-100 overflow-hidden z-0">
      <div className="data mx-auto bg-dark py-3 px-5">
        <div className="info d-flex">
          <button className="btn-white fs-2 text-white border-0 bg-dark" onClick={() => navigate("/home")}>x</button>
        </div>
        <h1 className="text-white text-center mt-5">BOOK NOW</h1>

        <form className="inputs d-flex flex-row mt-4" onSubmit={handleSubmit}>
          <div className="first w-50 px-1">
            <input type="text" className="my-2 py-1 w-100" placeholder="NAME"
              onChange={(e) => setData({ ...data, name: e.target.value })} />

            <select className="my-2 py-1 w-100"
              onChange={(e) => setData({ ...data, project: e.target.value })}>
              <option>Project</option>
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
            </select>

            <select className="my-2 py-1 w-100"
              onChange={(e) => setData({ ...data, gender: e.target.value })}>
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            
          </div>

          <div className="second w-50 px-1">
            <input type="email" className="my-2 py-1 w-100" placeholder="Email Address"
              onChange={(e) => setData({ ...data, email: e.target.value })} />

            <input type="tel" className="my-2 py-1 w-100" placeholder="MOBILE NUMBER"
              onChange={(e) => setData({ ...data, phone: e.target.value })} />
            <div className="button d-flex justify-content-center pt-2 pb-5">
            <button type="submit" className="w-100 py-2 fw-bold">Submit</button>
            </div>
         
          </div>
          
         
        </form>
        

     
      </div>
    </section>
  );
}

export default Booking;
