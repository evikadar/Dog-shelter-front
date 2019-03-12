import React from 'react';

const Logo = ({title}) => (<span>{title}</span>);
const LinkToAllDogs = ({title}) => (<a href='#'>{title}</a>);
const LinkToAllShelters = ({title}) => (<a href='#'>{title}</a>);
const UserLoginButton = ({title}) => (<button>{title}</button>);

class Header extends React.Component {
    render() {
        const {logo, linkToAllDogs, linkToAllShelters, userLoginButton} = this.props;
        return (
            <div className="header">
                <Logo title={logo}/>
                <LinkToAllDogs title={linkToAllDogs}/>
                <LinkToAllShelters title={linkToAllShelters}/>
                <UserLoginButton title={userLoginButton}/>
            </div>);
    }
}

export default Header;