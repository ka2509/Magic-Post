import locationOne from '@assets/img/map/loaction-1.png';
import canadaFlag from '@assets/img/contact/canada-flag.png';
import locationTwo from '@assets/img/map/loaction-2.png';
import greenland from '@assets/img/contact/greenland-flag.jpg';
import locationThere from '@assets/img/map/loaction-3.png';
import russiaFlag from '@assets/img/contact/russia-flag.png';
import locationFour from '@assets/img/map/loaction-4.png';
import country from '@assets/img/map/country-1.png';
import africaFlag from '@assets/img/contact/south-africa-flag.jpg';
import indiaFlag from '@assets/img/contact/india-flag.jpg';
import australiaFlag from '@assets/img/contact/australia-flag.png';
import Image from 'next/image';
import React from 'react';
import MapBg from '@assets/img/map/map.png'


const LocationMap = () => {

    const locationData = [
        {
            id: 1,
            image: locationOne,
            flag: canadaFlag,
            locationText: 'canada',
            locationStyle: 'location-item location-1'
        },
        {
            id: 2,
            image: locationTwo,
            flag: greenland,
            locationText: 'greenland',
            locationStyle: 'location-item location-2'
        },
        {
            id: 3,
            image: locationThere,
            flag: russiaFlag,
            locationText: 'russia',
            locationStyle: 'location-item location-3'
        },
        {
            id: 4,
            image: locationFour,
            flag: country,
            locationText: 'United State',
            locationStyle: 'location-item location-4'
        },
        {
            id: 5,
            image: locationOne,
            flag: africaFlag,
            locationText: 'South Africa',
            locationStyle: 'location-item location-5'
        },
        {
            id: 6,
            image: locationOne,
            flag: indiaFlag,
            locationText: 'indian ocean',
            locationStyle: 'location-item location-6'
        },
        {
            id: 7,
            image: locationTwo,
            flag: australiaFlag,
            locationText: 'australia',
            locationStyle: 'location-item location-7'
        },
    ]

    return (
        <div className="location-map-area pt-120 wow fadeInUp" data-wow-delay=".3s">
            <div className="container">
                <div className="location-map-bg" style={{ backgroundImage: `url(${MapBg.src})` }}>
                    {
                        locationData.map((item) => (
                            <div className={item.locationStyle} key={item.id}>
                                <div className='location-icon'>
                                    <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="location" />
                                </div>
                                <div className="location-content">
                                    <div className="location-counrty">
                                        <Image src={item.flag} style={{ width: "100%", height: "100%" }} alt="location" />
                                    </div>
                                    <div className="location-text">
                                        <span>{item.locationText}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};



export default LocationMap;