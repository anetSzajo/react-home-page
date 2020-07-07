import React from 'react';
import {Element} from 'react-scroll';

import AboutPerson from './AboutPerson/AboutPerson';
import './aboutUsSection.css'

function AboutUs() {
    return(
        <div className="about-us-section">
            <Element id="about-us-section" name="about-us-section">
                <section>
                    <h1>SOMETHING ABOUT US...</h1>
                    <AboutPerson photo="krzysiek.png"
                    name="Krzysiek"
                    role="fullstack"
                    languages="Java, Spring, JavaScript, React, Angular"
                    interests="music & electronics"
                    github="https://github.com/kSzajo"
                    linkedin="https://www.linkedin.com/in/szajo/" />
                    <AboutPerson photo=""
                                 name="Aneta"
                                 role="intern"
                                 languages="JavaScript, CSS, HTML5, React"
                                 interests="music & sawing"
                                 github="https://github.com/anetSzajo"
                                 linkedin="https://www.linkedin.com/in/anetszajo/" />
                </section>
            </Element>
        </div>
    )
}

export default AboutUs;
