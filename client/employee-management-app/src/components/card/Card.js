import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { axiosDELETE } from "../../AxiosService";
import "./Card.css";

const Card = ({ empData, handleEdit, handleReRender }) => {
  const { fname, lname, jobpositon, email, img } = empData;
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
        <MdMoreVert onClick={() => setDropDown(!dropDown)}></MdMoreVert>
        {dropDown && (
          <ul onMouseLeave={() => setDropDown(false)}>
            <li>
              <button onClick={() => handleEdit(empData.id)}>edit</button>
            </li>
            <li>
              <button onClick={() => handleDelete(empData.id)}>delete</button>
            </li>
          </ul>
        )}

        <div>
          <img src={img} alt={fname}></img>
        </div>
        <div>
          <h2>
            {fname} {lname}
          </h2>
          <p>{email}</p>
        </div>
        <div>{jobpositon}</div>
      </div>
    </>
  );
};

export default Card;
