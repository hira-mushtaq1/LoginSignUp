// import React from "react";
// // import SignUp from "./SignUp";
// import Registration from "./Registration";
// import Login from "./login";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path={"/"} component={Registration} />
//           <Route path={`/login`} component={Login} />
//           {/* <Route path={`/trainer`} component={Instructor} />
//           <Route path={"/Home/:user/:role"} component={User} />
//           <Route path={"/login"} component={Login} />
//           <Route path={"/register"} component={Register} /> */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import RouterApp from './config/Router'


function App() {
  return (
    <>
   <RouterApp/>
    
    </>
  )
}

export default App