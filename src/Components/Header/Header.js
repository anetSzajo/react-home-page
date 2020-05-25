import React, { Fragment } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import './header.css';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.mediaQuery = {
            desktop: 1200,
            tablet: 768,
            mobile: 576,
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
    }

    menuLinks() {
        return (
            <div className="menu-links">
                <p className="menu-link" href="#">Home</p>
                <p className="menu-link" href="#">App</p>
                <p className="menu-link" href="#">About us</p>
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
            <div className="header">
                {isMobile ? this.mobileMenu() : this.menuLinks()}
            </div>
    )
    }
}

export default Header;