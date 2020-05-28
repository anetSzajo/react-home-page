import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import AppSection from './AppSection/AppSection';

// import './mainContent.css';

function MainContent(props) {
    return (
        <div className="main-content">
            <HomeSection />
            <AppSection />
            <AboutUsSection />
        </div>
    )
}

export default MainContent;