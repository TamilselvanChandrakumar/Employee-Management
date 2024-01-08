import React, { useEffect, useState } from "react";
import { axiosGET } from "../../AxiosService";
import "./LeftNav.css";

const LeftNav = ({ employeeById }) => {
  const [empIndividualId, setEmpIndividualId] = useState([]);
  const getEmployeeId = async () => {
    try {
      const res = await axiosGET(`/employees/${employeeById}`);
      setEmpIndividualId(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployeeId();
  }, [employeeById]);
  return (
    <>
      <nav className="leftNav">
        <div className="employeeDetails">
          <h2>Full details</h2>
          <image alt={empIndividualId.fname}>{empIndividualId.img}</image>
          <h1>
            {empIndividualId.fname} {empIndividualId.lname}
          </h1>
          <h3>{empIndividualId.email}</h3>
          <p>{empIndividualId.phone}</p>
          <p>{empIndividualId.jobposition}</p>
          <p>{empIndividualId.dateofjoining}</p>
        </div>
      </nav>
    </>
  );
};

export default LeftNav;
