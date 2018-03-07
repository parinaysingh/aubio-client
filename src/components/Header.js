import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="#" className="logo">
                    <img src={require('../../static/images/logo.png')} alt=""/>
                </a>
                <span className="search">
                    <input type="text" name="keywords"/>
                    <i className="material-icons">search</i>
                </span>
                <a href="#" className="user">LOGIN</a>
            </div>
        );
    }
}

export default Header;
