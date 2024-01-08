import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { axiosDELETE } from "../../AxiosService";
import "./Card.css";

const Card = ({ empData, handleEdit, handleReRender }) => {
  const { fname, lname, jobposition, email, img } = empData;
  const [dropDown, setDropDown] = useState(false);
  const handleDelete = async (id) => {
    try {
      const res = await axiosDELETE(`/employees/${id}`);
      console.log(res.data);
      handleReRender();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="cardComponent">
        <div className="cardInner">
          <div className="dropdownContainer">
            <MdMoreVert onClick={() => setDropDown(!dropDown)}></MdMoreVert>
            {dropDown && (
              <ul className="dropdown" onMouseLeave={() => setDropDown(false)}>
                <li>
                  <button onClick={() => handleEdit(empData.id)}>edit</button>
                </li>
                <li>
                  <button onClick={() => handleDelete(empData.id)}>
                    delete
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div className="profileImage">
            <img src={img} alt={fname}></img>
          </div>
          <div className="empDetails">
            <h2>
              {fname} {lname}
            </h2>
            <p>{email}</p>
          </div>
        </div>
        <div className="jobRole">{jobposition}</div>
      </div>
    </>
  );
};

export default Card;
