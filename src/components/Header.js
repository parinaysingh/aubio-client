import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <a href="#" className="logo">
                        <img src={require('../../static/images/logo.png')} alt=""/>
                    </a>
                    <div className="nav-menu">
                        <span>LOGIN</span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
