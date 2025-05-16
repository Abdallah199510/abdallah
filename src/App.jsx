
import { Links, Route,Routes, } from "react-router-dom";
import Booking from "./pages/booking";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Homepage from "./pages/homepage";
import Lead from "./pages/lead";

function App() {

  return ( 
    <>
     <div className="App">
      <Home />
    </div>

   <Navbar/>
  
    <Routes>
     
     <Route path="/booking" element={<Booking/>}/>
     <Route path="/homepage" element={<Homepage/>}/>
     <Route path="/lead" element={<Lead/>}/>
    
    </Routes>
   
    </>
   );
}

export default App;
