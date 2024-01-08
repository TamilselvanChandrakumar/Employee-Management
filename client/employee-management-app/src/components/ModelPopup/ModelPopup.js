import React, { useState } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import { axiosPOST } from "../../AxiosService";
import "./ModelPopup.css";
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
      <div className="modalContainer">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="modalBox">
            <div className="modalHeader">
              <h1>New Employee Details</h1>
            </div>
            <div className="modalInner">
              <div className="inputContainer">
                <div className="input-box">
                  <label htmlFor="fname">Firstname</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={formik.handleChange}
                    values={formik.values.fname}
                  ></input>
                </div>

                <div className="input-box">
                  <label htmlFor="lname">Lastname</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    onChange={formik.handleChange}
                    values={formik.values.lname}
                  ></input>
                </div>
              </div>
              <div className="input-box">
                <label htmlFor="img">Img</label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  onChange={formik.handleChange}
                  values={formik.values.img}
                ></input>
              </div>
              <div className="inputContainer">
                <div className="input-box">
                  <label htmlFor="email">Enter Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    values={formik.values.email}
                  ></input>
                </div>
                <div className="input-box">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    values={formik.values.phone}
                  ></input>
                </div>
              </div>
              <div className="input-box">
                <label htmlFor="jobposition">Job position</label>
                <input
                  type="text"
                  id="jobposition"
                  name="jobposition"
                  onChange={formik.handleChange}
                  values={formik.values.jobposition}
                ></input>
              </div>
              <div className="input-box">
                <label htmlFor="dateofjoining">Date of joining</label>
                <input
                  type="date"
                  id="dateofjoining"
                  name="dateofjoining"
                  onChange={formik.handleChange}
                  values={formik.values.dateofjoining}
                ></input>
              </div>
              <div className="modalFooter">
                <button className="add-btn" type="submit">
                  {isloading ? "saving" : "save details"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button onClick={() => setShowModal(false)}>close</button>
    </Modal>
  );
};

export default ModelPopup;
