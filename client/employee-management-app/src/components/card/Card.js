import React from "react";

const Card = ({ empData, handleEdit, handleReRender }) => {
  const { fname, lname, jobpositon, email, img } = empData;
  return (
    <>
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
    </>
  );
};

export default Card;
