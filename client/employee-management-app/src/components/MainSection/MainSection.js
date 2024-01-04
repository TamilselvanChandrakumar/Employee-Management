import React, { useEffect, useState } from "react";
import { axiosGET } from "../../AxiosService";
import Card from "../card/Card";
import ModelPopup from "../ModelPopup/ModelPopup";

const MainSection = () => {
  const [emplyoee, setEmplyoee] = useState([]);
  const [emplyoeeId, setEmployeeId] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [reRender, setReRender] = useState(false);
  const getAllEmplyoees = async () => {
    try {
      const res = await axiosGET("/emplyoees");
      setEmplyoee(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearch = async (e) => {
    try {
      const res = await axiosGET(`/searchemplyoees/${e.target.value}`);
      setEmplyoee(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = () => {};
  const handleReRender = () => {
    setReRender(true);
  };
  useEffect(() => {
    getAllEmplyoees();
  }, [showModal]);
  return (
    <>
      {showModal && (
        <ModelPopup
          showModal={showModal}
          setShowModal={setShowModal}
        ></ModelPopup>
      )}
      <div>
        <h2>People {emplyoee.length}</h2>
      </div>
      <div>
        <input
          type="search"
          placeholder="search by name,email,designation etc"
          onChange={handleSearch}
        ></input>
      </div>
      <div>
        <button onClick={() => setShowModal(true)}>Add Emplyoee</button>
      </div>
      <div>
        {emplyoee &&
          emplyoee.map((emp) => {
            return (
              <div key={emp.id} onClick={() => setEmployeeId(emp.id)}>
                <Card
                  empData={emp}
                  handleEdit={handleEdit}
                  handleReRender={handleReRender}
                ></Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MainSection;
