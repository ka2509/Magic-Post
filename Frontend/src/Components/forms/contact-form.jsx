import React from "react";
import { useFormik } from "formik";
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import NiceSelect from "@ui/niceSelect";

const ContactForm = () => {

  const selectHandler = (value) => {};

  const handleSelectChange = (value) => {
    if (value === "Select Subject") {
      setFieldValue('selectedValue', '');
    } else {
      setFieldValue('selectedValue', value);
      selectHandler(value);
    }
  };
 

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched , setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        msg: "",
        selectedValue: ""
      },
     
      validationSchema: contact_schema,

      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });
    console.log('Form values:', values);

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="name"
              defaultValue={values.name}
              onblur={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Your Name"
              id="name"
            />
            <i className="fas fa-user"></i>
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="email"
              defaultValue={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email Adress"
              id="email"
            />
            <i className="fas fa-envelope"></i>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field">
            <input
              name="phone"
              defaultValue={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Phone"
              id="phone"
            />
            <i className="fas fa-phone-alt"></i>
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="single-input-field select">
          <NiceSelect
              options={[
                { value: "Select Subject", text: "Select Subject" },
                { value: "Subject One", text: "Subject One" },
                { value: "Subject Two", text: "Subject Two" },
                { value: "Subject Three", text: "Subject Three" },
              ]}
              defaultCurrent={0}
              name="selectSubject"
              defaultValue={values.selectedValue}
              onChange={handleSelectChange}
            />
            {touched.selectedValue && values.selectedValue === "" && (
              <ErrorMsg error={errors.selectSubject} />
            )}
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12">
          <div className="single-input-field textarea">
            <textarea
              name="msg"
              rows="10"
              cols="10"
              defaultValue={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Write Massage"
            ></textarea>
            <i className="fas fa-edit"></i>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12">
          <button type="submit" className="fill-btn clip-btn">Send a message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
