import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Style from './styles'


const Wrapper = styled.main`
    ${Style.main}
`;

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            loggedIn: this.props.loggedIn,
            userRole: this.props.userRole
        }
    }

    render() {
        return (
            <Wrapper>
                <img alt="logo of a dog" height={50} width={50}
                     src={`https://banner2.kisspng.com/20180630/ias/kisspng-arctic-wolf-dog-logo-bucky-barnes-drawing-5b37c2d6245b67.1298494215303810141489.jpg`}/>
                <ul>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to='/dogs'>Dogs</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to='/shelter/1/index'>Log in as Shelter</NavLink>
                    </li>
                    {this.buttonsByLogin()}
                    {this.welcomeMessage()}
                    {this.shelterButtons()}
                </ul>
            </Wrapper>
        );
    }

    // Todo: add an onclick function to the logout button so that it actually logs out the user

    buttonsByLogin() {
        const isLoggedIn = this.props.loggedIn;
        if (isLoggedIn) {
            return (
                <li>
                    <NavLink exact activeClassName='active' to='/'>LogOut</NavLink>
                </li>
            )
        } else {
            return (
                <li>
                    <NavLink exact activeClassName='active' to='/login'>Login / Register</NavLink>
                </li>
            )
        }

    }

    welcomeMessage() {
        const logged_in = this.props.loggedIn ? "" : "not";
        const profilePage = "/profile/" + this.props.username;
        if (this.props.loggedIn) {
            return (
                <li>
                    <NavLink exact activeClassName='active' to={profilePage}>
                        Hi {this.props.username}! You are {logged_in} logged in.
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li>
                    <NavLink to={"/dogs"}>
                        Hi {this.props.username}! You are {logged_in} logged in.
                    </NavLink>
                </li>
            )
        }
    }

    shelterButtons() {
        const isLoggedIn = this.props.loggedIn;
        const userRole = this.state.userRole;
        if (isLoggedIn && userRole === 'SHELTER') {
            return (
                <ul className="float-right">
                    <li>
                        <NavLink exact activeClassName='active' to='/shelter/1' className='btn btn-outline-light'>My
                            profile</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to='/shelter/1/edit'
                                 className='btn btn-outline-warning'>Edit my
                            profile</NavLink>
                    </li>
                </ul>
            )
        }
    }
}


export default Navigation;