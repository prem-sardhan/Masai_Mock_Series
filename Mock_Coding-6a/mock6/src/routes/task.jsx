
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Task(){
return(
<div className={styles.main}>
      <div className={styles.container}>
       
      <div>
        
         <div className={styles.head}><h1>Hello</h1> <p>Logout</p> </div>


         <h2>Name</h2>
         <p>Good To See you here</p>
         <p>Your Total Task for taday is 3</p>

         <div> <h3>Task For 24Th Dec 2022:</h3></div>


         <div className={styles.tasks}>
<ul>
    <li>task 1</li>
    <li>task 2</li>
    <li>task 3</li>
</ul>
         </div>
      
      
      </div>

      <div className={styles.last}> <div><input  placeholder="Add your task Here" type="text" name="" id="" /></div>

<div>
  <button >Add Task</button>
</div>
</div>



     
        </div>
    
    </div>
  )
}

export default Task