import Signup from "./singnup";
import Login from "./login"
import Task from "./task";


import {Route,Routes} from "react-router-dom"



const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login/>} />;
        <Route path="/signup" element={<Signup/>} />;
        <Route path="/task" element={<Task/>} />;
        
        
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    );
  };
  
  export default MainRoutes;
  