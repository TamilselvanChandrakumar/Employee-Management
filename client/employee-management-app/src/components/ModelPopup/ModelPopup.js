import React, { useState } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import { axiosPOST } from "../../AxiosService";
Modal.setAppElement("#root");
const ModelPopup = ({ showModal, setShowModal }) => {
  const [isloading, setIsLoading] = useState(false);
  const createEmployee = async (values) => {
    setIsLoading(true);
    try {
      const res = await axiosPOST("/emplyoees", values);
      console.log(res);
      setIsLoading(false);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      img: "",
      email: "",
      phone: "",
      jobposition: "",
      dateofjoining: "",
    },
    onSubmit: (values) => {
      createEmployee(values);
      console.log(values);
    },
  });
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={{
        overlay: {
          backgroundColor: "grey",
        },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="fname">Firstname</label>
          <input
            id="fname"
            value={formik.values.fname}
            onChange={formik.handleChange}
            type="text"
            name="fname"
          ></input>
        </div>
        <div>
          <label htmlFor="lname">Lastname</label>
          <input
            id="lname"
            value={formik.values.lname}
            onChange={formik.handleChange}
            type="text"
            name="lname"
          ></input>
        </div>
        <div>
          <label htmlFor="img">Img</label>
          <input
            id="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            type="text"
            name="img"
          ></input>
        </div>
        <div>
          <label htmlFor="email">Enter Mail</label>
          <input
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            type="text"
            name="phone"
          ></input>
        </div>
        <div>
          <label htmlFor="jobposition">Job position</label>
          <input
            id="jobposition"
            value={formik.values.jobposition}
            onChange={formik.handleChange}
            name="jobposition"
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="dateofjoining">Date of joining</label>
          <input
            id="dateofjoining"
            value={formik.values.dateofjoining}
            onChange={formik.handleChange}
            type="date"
            name="dateofjoining"
          ></input>
        </div>
        <div>
          <button type="submit">{isloading ? "saving" : "save details"}</button>
        </div>
      </form>
      <button onClick={() => setShowModal(false)}>close</button>
    </Modal>
  );
};

export default ModelPopup;
