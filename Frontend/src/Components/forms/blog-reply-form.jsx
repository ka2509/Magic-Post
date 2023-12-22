import NiceSelect from "@ui/niceSelect";
import React from "react";

const BlogReplyForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const selectHandler = e => {}
  return (
    <form onSubmit={handleSubmit} action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="single-input-field mb-30">
            <input type="text" placeholder="Name" />
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-input-field mb-30">
            <input type="email" placeholder="Email" />
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="single-input-field select mb-30">
            <NiceSelect
              options={[
                { value: "Select Subject", text: "Select Subject" },
                { value: "Subject One", text: "Subject One" },
                { value: "Subject Two", text: "Subject Two" },
                { value: "Subject Three", text: "Subject Three" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name="Select Subject"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="single-input-field mb-30 textarea">
            <textarea placeholder="Message"></textarea>
            <i className="fas fa-edit"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="comment-reply-btn">
            <button type="submit" className="fill-btn clip-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogReplyForm;
