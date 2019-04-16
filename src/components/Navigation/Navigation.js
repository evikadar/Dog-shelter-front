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
        }
    }

    render() {

        const logged_in = this.props.loggedIn? "" : "not";

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
                    <li>
                        <NavLink exact activeClassName='active' to='/login'>
                            Hi {this.props.username}! You are {logged_in} logged in.
                        </NavLink>
                    </li>

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
}


export default Navigation;