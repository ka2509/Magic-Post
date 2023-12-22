import React from 'react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            eduIcon: 'fal fa-file-certificate',
            title: '2015 - Present',
            description: 'Engineer, Builder Certification Training'
        },
        {
            id: 2,
            eduIcon: 'fal fa-fan-table',
            title: '2000 - 2005',
            description: 'Engineer, Builder Certification Training'
        },
        {
            id: 3,
            eduIcon: 'fal fa-certificate',
            title: '2005 - 2015',
            description: 'Engineer, Builder Certification Training'
        }
    ]
    return (
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="tmd__qualification mb-55 pl-70">
                <div className="section__title mb-30">
                    <h3 className="title-sm">Education</h3>
                </div>
                <div className="tmd__education">
                    <ul>
                        {
                            educationData.map((item) => (
                                <li key={item.id}>
                                    <div className="edu-icon">
                                        <i className={item.eduIcon}></i>
                                    </div>
                                    <div className="edu-text">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;