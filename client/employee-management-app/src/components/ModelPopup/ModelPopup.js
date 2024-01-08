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
      const res = await axiosPOST("/employees", values);
      console.log(res.data);
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
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="fname">Firstname</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={formik.handleChange}
            values={formik.values.fname}
          ></input>
        </div>
        <div>
          <label htmlFor="lname">Lastname</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={formik.handleChange}
            values={formik.values.lname}
          ></input>
        </div>
        <div>
          <label htmlFor="img">Img</label>
          <input
            type="text"
            id="img"
            name="img"
            onChange={formik.handleChange}
            values={formik.values.img}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Enter Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            values={formik.values.email}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            name="phone"
            onChange={formik.handleChange}
            values={formik.values.phone}
          ></input>
        </div>
        <div>
          <label htmlFor="jobposition">Job position</label>
          <input
            type="text"
            id="jobposition"
            name="jobposition"
            onChange={formik.handleChange}
            values={formik.values.jobposition}
          ></input>
        </div>
        <div>
          <label htmlFor="dateofjoining">Date of joining</label>
          <input
            type="date"
            id="dateofjoining"
            name="dateofjoining"
            onChange={formik.handleChange}
            values={formik.values.dateofjoining}
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
