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
            windowWidth: null,
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
                <div className="menu-links">
                    <p className="menu-link" href="#">Homepage</p>
                    <p className="menu-link" href="#">App</p>
                    <p className="menu-link" href="#">About us</p>
                </div>
                :
                null
                }
            </Fragment>
        )
    }

    desktopMenu() {
        return (
            <Fragment>
                <div className="menu-links">
                    <p className="menu-link" href="#">Home</p>
                    <p className="menu-link" href="#">App</p>
                    <p className="menu-link" href="#">About us</p>
                </div>
            </Fragment>
        )
    }

    render(){
        const isMobile = this.state.windowWidth < this.mediaQuery.mobile;
    return(
            <div className="header">
                {isMobile ? this.mobileMenu() : this.desktopMenu()}
            </div>
    )
    }
}

export default Header;