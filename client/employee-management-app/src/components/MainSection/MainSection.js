import React, { useEffect, useState } from "react";
import { axiosGET } from "../../AxiosService";
import Card from "../card/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import EditModelPopup from "../ModelPopup/EditModelPopup";
import { BiSearch } from "react-icons/bi";
import "./MainSection.css";

const MainSection = ({ setEmployeeById }) => {
  const [emplyoee, setEmplyoee] = useState([]);
  const [emplyoeeId, setEmployeeId] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [reRender, setReRender] = useState(false);
  const getAllEmplyoees = async () => {
    try {
      const res = await axiosGET("/employees");
      setEmplyoee(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getEmployeeById = async (id) => {
    try {
      const res = await axiosGET(`/employees/${id}`);
      console.log(res.data);
      setEmployeeId(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearch = async (e) => {
    try {
      const res = await axiosGET(`/searchemployees/${e.target.value}`);
      setEmplyoee(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = (id) => {
    getEmployeeById(id);
    setEditModal(true);
  };
  const handleReRender = () => {
    setReRender(true);
  };
  useEffect(() => {
    getAllEmplyoees();
  }, [showModal, editModal, reRender]);
  return (
    <>
      {showModal && (
        <ModelPopup
          showModal={showModal}
          setShowModal={setShowModal}
        ></ModelPopup>
      )}
      {editModal && (
        <EditModelPopup
          editModal={editModal}
          setEditModal={setEditModal}
          emplyoeeId={emplyoeeId}
        ></EditModelPopup>
      )}
      <main className="mainContainer">
        <div className="mainWrapper">
          <h2>People {emplyoee.length}</h2>
          <div className="employeeHeader">
            <div className="searchBox">
              <input
                type="search"
                placeholder="search by name,email,designation etc"
                onChange={handleSearch}
              ></input>
              <BiSearch size={20}></BiSearch>
            </div>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              Add Emplyoee
            </button>
          </div>
          <div className="employees">
            {emplyoee &&
              emplyoee.map((emp) => {
                return (
                  <div key={emp.id} onClick={() => setEmployeeById(emp.id)}>
                    <Card
                      empData={emp}
                      handleEdit={handleEdit}
                      handleReRender={handleReRender}
                    ></Card>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
