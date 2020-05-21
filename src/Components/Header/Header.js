import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import './header.css';

class Header extends React.Component{
    state = {
        open: false
    }
    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render(){
    return(
        <div className="header">
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
            <div className="header-list">
                <span className="header-link" href="#">Homepage</span>
                <span className="header-link" href="#">App</span>
                <span className="header-link" href="#">About us</span>
            </div>
        </div>
    )
    }
}

export default Header;