import React from 'react';
import Welcome from './Welcome';
import Services from './Services'
import DoctorIntro from './DoctorIntro'
import Subscribe from './Subscribe'
import ContactInfo from './ContactInfo'
import Footer from './Footer'

export const HomePage = () => (
    <div>
        <Welcome />
        <Services />,
        <DoctorIntro />
        <Subscribe />
        <ContactInfo />
        <Footer />
    </div>
);

export default HomePage;
