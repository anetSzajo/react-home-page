import React from 'react';
import {Element} from 'react-scroll';

import './homeSection.css';

function HomeSection() {
    return(
        <div className="home-section">
            <Element id="home-section" name="home-section">
                <section>
                    <h1>Delanos</h1>
                    <h2>solutions</h2>
                </section>
            </Element>
        </div>
    )
}

export default HomeSection;
