import React from 'react';

import './aboutPerson.css';

function AboutPerson(props) {
    return(
        <div className='about-person'>
            <div className="person-photo__container">
                <img className="person-photo" alt="" src={props.photo} />
            </div>
            <div className="person-description">
                <h1>Hi, I am {props.name}!</h1>
                <p>I am {props.role} developer working with {props.languages}.</p>
                <p>I am interested in {props.interests}.</p>
                <div className="person-description__links">
                    <a href={props.github}>
                        <img className="github_logo" src="GitHub-Mark-Light-32px.png" alt=""/>
                        GitHub
                    </a>
                    <a href={props.linkedin}>
                        <img className="linkedin_logo" src="linkedin-logo.png" alt=""/>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutPerson;