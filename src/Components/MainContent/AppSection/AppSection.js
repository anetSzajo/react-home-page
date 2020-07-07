import React from 'react';
import {Element} from 'react-scroll';

import './appSection.css';

function AppSection() {
    return(
        <div className="app-section">
            <Element id="app-section" name="app-section">
                <section>
                    <div className="app-description">
                        <h1>Neighbourshop</h1>
                        <h2>let's shop together!</h2>
                        <p>Application that connects neighbours - the Customers with vendors in the area.</p>
                    </div>
                    <div>
                        Work in progress, stay tuned!
                    </div>
                </section>
            </Element>

        </div>
    )
}

export default AppSection;
