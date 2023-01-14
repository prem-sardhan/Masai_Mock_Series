import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../redux/user/action";
const User = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (value) {
      setData({
        ...data,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(data));
    setTimeout(() => {
        navigate("/");
    }, 1000);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get Your Dog Register</h1>
        <div>
          <label> Name of breed</label>
          <input type="name" name="name" required onChange={handleChange} />
        </div>
        <div>
          <label>Age of pet</label>
          <input type="age" name="age" required onChange={handleChange} />
        </div>
        <div>
          <label>Gender</label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              <label>Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div>
          <label>Enter place</label>
          <select onChange={handleChange} name="country" required>
            <option>Select place</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option select="Delhi">Delhi</option>
            <option value="Mumbai" >Mumbai</option>
          </select>
        </div>
       
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default User;
