import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


import Registration from "../Registration";
import Login from "../login";
import ForgetPassword from "../Forget";
import ForgetViaPhone from "../ForgetViaPhone";

import ChangePassword from "../ChangePassword";
import Otp from "../otp";



export default function RouterApp() {
  return (
    <>
    
      <Router>
        <Routes>
         
          <Route path="/" element={<Registration />} />
           <Route path="login" element={<Login/>} />
          <Route path="mail" element={<ForgetPassword/>} />
          <Route path="phone" element={<ForgetViaPhone/>} />
          <Route path="otp" element={<Otp/>}/>
         
          <Route path="reset" element={<ChangePassword/>} />
         
        
        </Routes>
      </Router>
 
    </>
  );
}
