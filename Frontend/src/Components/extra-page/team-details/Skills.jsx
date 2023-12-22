import React from 'react';

const Skills = () => {
    return (
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="tmd__qualification mb-55">
                <div className="section__title mb-30">
                    <h3 className="title-sm">Expertise & Skills</h3>
                </div>
                <div className="tmd__skill">
                    <div className="tmd__skill-wrapper">
                        <div className="skill-title">
                            <h5 className="skill-category">Development</h5>
                            <span>69%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: "69%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="tmd__skill-wrapper">
                        <div className="skill-title">
                            <h5 className="skill-category">Design</h5>
                            <span>78%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: "78%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="tmd__skill-wrapper">
                        <div className="skill-title">
                            <h5 className="skill-category">Architecture</h5>
                            <span>91%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: "91%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="tmd__skill-wrapper">
                        <div className="skill-title">
                            <h5 className="skill-category">Interior Design</h5>
                            <span>86%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: "86%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;