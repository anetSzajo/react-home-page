import React, { Fragment } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Scroll from 'react-scroll';

import './header.css';

let Link = Scroll.Link;

class Header extends React.Component{
    constructor(props){
        super(props);

        this.mediaQuery = {
            desktop: 1200,
            tablet: 768,
            mobile: 640,
        };

        this.state = {
            windowWidth: document.body.clientWidth,
            open: false
        }
    }

     handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({windowWidth: document.body.clientWidth})
        });
        window.addEventListener('click', event => {
            if (this.state.open && !this.node.contains(event.target)){
                this.setState({ open: false});
            }
        });
    }

    menuLinks() {
        return (
            <div className="menu-links">
                <p><Link to="home-section" spy={true} smooth={true} duration={500} className="menu-link">Home</Link></p>
                <p><Link to="app-section" spy={true} smooth={true} duration={500} className="menu-link">App</Link></p>
                <p><Link to="about-us-section" spy={true} smooth={true} duration={500} className="menu-link">About us</Link></p>
            </div>
        )
    }

    mobileMenu() {
        return (
            <Fragment>
                <HamburgerMenu className="hamburger-btn"
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={18}
                            height={15}
                            strokeWidth={1}
                            rotate={0}
                            color='black'
                            borderRadius={0}
                            animationDuration={0.5}
                />
                {this.state.open
                ?
                this.menuLinks()
                :
                null
                }
            </Fragment>
        )
    }


    render(){
        const isMobile = this.state.windowWidth < this.mediaQuery.mobile;
    return(
            <div className="header" ref={node => this.node = node}>
                {isMobile ? this.mobileMenu() : this.menuLinks()}
            </div>
    )
    }
}

export default Header;