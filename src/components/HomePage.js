import React from 'react';
import Welcome from './Welcome';
import Services from './Services'
import DoctorIntro from './DoctorIntro'
import Subscribe from './Subscribe'
import ContactInfo from './ContactInfo'

export const HomePage = () => (
    <div>
        <Welcome />
        <Services />,
        <DoctorIntro />
        <Subscribe />
        <ContactInfo />
    </div>
);

export default HomePage;
