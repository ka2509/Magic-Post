import React from 'react';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} action="#">
            <div className="row">
                <div className="col-xxl-12">
                    <div className="single-input-field">
                        <textarea placeholder="Your review"
                            className="comment-input comment-textarea mb-20"></textarea>
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="single-input-field mb-20">
                        <input type="text" placeholder="Your Name" />
                    </div>
                </div>
                <div className="col-xxl-6">
                    <div className="single-input-field mb-20">
                        <input type="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="col-xxl-12">
                    <div className="comment-submit">
                        <button type="submit" className="fill-btn">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;