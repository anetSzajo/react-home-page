import React from 'react';
import {Element} from 'react-scroll';

import './homeSection.css';

function HomeSection() {
    return(
        <div className="home-section">
            <Element id="home-section" name="home-section">
                <section>
                    <h1>Welcome on our page!</h1>
                    <h2>Ready to code?</h2>
                </section>
            </Element>
        </div>
    )
}

export default HomeSection;