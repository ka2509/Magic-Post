import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import LocationMap from './location-map';
import LocationArea from './location-area';
import OfficeArea from './office-area';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Location" subTitle="Location" />
            <LocationMap />
            <LocationArea />
            <OfficeArea />
        </main>
    );
};

export default index;