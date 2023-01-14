import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import "../App.css"
const Report = () => {
    const [no, SetNO] = useState(0);
  const [report, SetReport] = useState(0);
  const [dog, setDog] = useState(0);
  useEffect(() => {

    axios
    .get(`https://masai-mock.onrender.com/dogs`)
    .then(({ data }) => SetNO(data.length));
    axios
      .get(`https://masai-mock.onrender.com/dogs/?gender=Male`)
      .then(({ data }) => SetReport(data.length));
    axios
      .get(`https://masai-mock.onrender.com/dogs/?gender=Female`)
      .then(({ data }) => setDog(data.length));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="table">
        <table>
          <tobody>
          <tr>
              <td> Total number of dogs attending.</td>
              <td>{no}</td>
            </tr>
            <tr>
              <td>Number of Male dogs attending</td>
              <td>{report}</td>
            </tr>
            <tr>
              <td>Number of female dogs attending</td>
              <td>{dog}</td>
            </tr>
           
          </tobody>
        </table>
      </div>
    </div>
  );
};

export default Report;
