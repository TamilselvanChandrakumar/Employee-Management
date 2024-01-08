import React, { useState } from "react";
import { useFormik } from "formik";
import Modal from "react-modal";
import { axiosPUT } from "../../AxiosService";
Modal.setAppElement("#root");
const EditModelPopup = ({ editModal, setEditModal, emplyoeeId }) => {
  const { fname, lname, email, jobposition, dateofjoining, img, phone } =
    emplyoeeId;
  console.log(emplyoeeId);
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdate = async (values) => {
    setIsLoading(true);
    try {
      const res = await axiosPUT(`/employees/${emplyoeeId.id}`, values);
      setIsLoading(false);
      setEditModal(false);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      fname: fname,
      lname: lname,
      email: email,
      jobposition: jobposition,
      img: img,
      phone: phone,
      dateofjoining: dateofjoining,
    },
    onSubmit: (values) => {
      handleUpdate(values);
    },
  });
  return (
    <>
      <Modal isOpen={editModal} onRequestClose={() => setEditModal(false)}>
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="fname">Firstname</label>
            <input
              id="fname"
              type="text"
              name="fname"
              defaultValue={fname}
              onChange={formik.handleChange}
              values={formik.values.fname}
            ></input>
          </div>
          <div>
            <label htmlFor="lname">Last name</label>
            <input
              id="lname"
              type="text"
              name="lname"
              defaultValue={lname}
              onChange={formik.handleChange}
              values={formik.values.lname}
            ></input>
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              defaultValue={email}
              onChange={formik.handleChange}
              values={formik.values.email}
            ></input>
          </div>
          <div>
            <label htmlFor="jobposition">jobposition</label>
            <input
              id="jobposition"
              type="text"
              name="jobposition"
              defaultValue={jobposition}
              onChange={formik.handleChange}
              values={formik.values.jobposition}
            ></input>
          </div>
          <div>
            <label htmlFor="img">Img</label>
            <input
              id="img"
              type="text"
              name="img"
              defaultValue={img}
              onChange={formik.handleChange}
              values={formik.values.img}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              defaultValue={phone}
              onChange={formik.handleChange}
              values={formik.values.phone}
            ></input>
          </div>
          <div>
            <label htmlFor="dateofjoining">Date of joining</label>
            <input
              id="dateofjoining"
              type="date"
              name="dateofjoining"
              defaultValue={dateofjoining}
              onChange={formik.handleChange}
              values={formik.values.dateofjoining}
            ></input>
          </div>
          <div>
            <button type="submit">
              {isLoading ? "Editing" : "Edit and save"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditModelPopup;
