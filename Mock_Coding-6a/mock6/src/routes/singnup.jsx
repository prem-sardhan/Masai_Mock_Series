import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });
const navigateTo=useNavigate()
  const [exist,setexist]=useState(false)

  async function checkExist(){
    try{
        axios.get(`https://rohit-mock-server.onrender.com/User?email=${data.email}`).then((res)=>{
         if(res.data[0]){
          setexist(true)
        }
            else{
            setexist (false)
         }
         
        }
        
        )
    }catch(err){
        alert("Something went wrong")
      
        return false
    }
}

 function Submitform(){

    if(data.username && data.email && data.confirmPass && data.password){
    
        if(data.confirmPass!==data.password)return alert("please Fill the same password")
checkExist()

 if(exist){
    alert("user already exist")
    navigateTo("/")
 }else{
   submitTheuser()
 }
    
      }else{
        alert("please fill all the fields")
      }
    }



 async function  submitTheuser(){




try{
    axios.post("https://rohit-mock-server.onrender.com/User",data).then((res)=>{
        alert("signup successfull")
        navigateTo("/")

    }
    
    )
}catch(err){
    alert("Something went wrong")
}

}
       

  function InputEvent(e){
    setdata({
      ...data,[e.target.name]:e.target.value  
    })
  }



  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <p className={styles.greet}>Welcome !</p>
          <h2>Sign up to</h2>
          
        </div>

        <div>
          <div>
            <p>Email</p>
            <input name="email" onInput={InputEvent} type="email" value={data.email} placeholder="Enter Your Email" />
          </div>

          <div>
            <p>User name</p>
            <input name="username"  onInput={InputEvent} value={data.username} placeholder="Enter Your User name" type="text" />
          </div>

          <div>
            <p>Password</p>
            <input name="password"  onInput={InputEvent} value={data.password} placeholder="Enter Your Password" type="password" />
          </div>

          <div>
            <p>Confirm Password</p>
            <input name="confirmPass"  onInput={InputEvent} value={data.confirmPass} placeholder="Confirm Your Password" type="password" />
          </div>

          <div>
            <button onClick={Submitform}>Register</button>
          </div>

          <div className={styles.already}>
            <p>
              Already have an Account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
