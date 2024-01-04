import React from "react";

const Card = ({ empData, handleEdit, handleReRender }) => {
  const { firstname, lastname, job, email, img } = empData;
  return (
    <>
      <div>
        <img src={img} alt="firstname"></img>
      </div>
      <div>
        <h2>
          {firstname} {lastname}
        </h2>
        <p>{email}</p>
      </div>
      <div>{job}</div>
    </>
  );
};

export default Card;
