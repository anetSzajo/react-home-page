import React from 'react';
import {Element} from 'react-scroll';

import './appSection.css';

function AppSection() {
    return(
        <div className="app-section">
            <Element id="app-section" name="app-section">
                <section>
                    <div className="app-description">
                        <h1>PROJECT APP</h1>
                        <h2>CROSS-DIMENSION RICK SANCHEZ TRAVEL APP</h2>
                        <p>App to navigate beetwen dimensions. Features: keep all dimension stored in one place, filter them by price or dimension name, check place by ID, create new place or update the existing one. </p>
                    </div>
                    <div className="app-images">
                        <div className="app-image__container">
                            <img src="app-welcome_page.png" alt="" className="app-image"/>
                        </div>
                        <div className="app-image__container">
                             <img src="app-filters_page.png" alt="" className="app-image"/>
                        </div>
                        <div className="app-image__container">
                             <img src="app-place_form.png" alt="" className="app-image"/>
                        </div>
                    </div>
                    <div>
                        <button>GO TO APP!</button>
                    </div>
                </section>
            </Element>
        </div>
    )
}

export default AppSection;