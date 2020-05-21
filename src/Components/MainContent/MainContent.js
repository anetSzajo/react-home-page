import React from 'react';

import './mainContent.css';

function MainContent(props) {
    return (
        <div className="main-content">
            <h1>Welcome on our page!</h1>
            <h2>Ready to code?</h2>
            {props.children}
        </div>
    )
}

export default MainContent;