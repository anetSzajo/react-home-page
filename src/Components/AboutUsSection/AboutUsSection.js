import React from 'react';

import AboutPerson from '../AboutPerson/AboutPerson';
import './aboutUsSection.css'

function AboutUs() {
    return(
        <div className="about-us-section">
                <h1>Something about us....</h1>
                <AboutPerson photo="" name="Krzysiek" role="senior" languages="Java, JavaScript, React, Angular" interests="music & electonic" github="https://github.com/kSzajo" linkedin="https://www.linkedin.com/in/szajo/" />
                <AboutPerson photo="" name="Aneta" role="intern" languages="JavaScript, CSS, HTML5, React" interests="sawing" github="https://github.com/anetSzajo" linkedin="https://www.linkedin.com/in/anetszajo/" />
        </div>
    )
}

export default AboutUs;