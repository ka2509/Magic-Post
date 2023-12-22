import React from 'react';

const TmdForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="sd-form tmd-form">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-input-field mb-30">
                            <input type="text" placeholder="Full name" />
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-input-field mb-30">
                            <input type="text" placeholder="Phone number" />
                            <i className="fas fa-phone-alt"></i>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-input-field mb-30">
                            <input type="text" placeholder="Email address" />
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="single-input-field textarea mb-30">
                            <textarea placeholder="Message"></textarea>
                            <i className="fas fa-edit"></i>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <button className="fill-btn clip-btn" type="submit">make a request</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TmdForm;