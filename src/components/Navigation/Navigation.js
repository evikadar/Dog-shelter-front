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
            userData: this.props.userData
        }
    }

    render() {
        return (
            <Wrapper>
                <img alt="logo of a dog" height={50} width={50}
                     src={'../../doglogo.png'}/>
                <ul>
                    {this.homeButton()}
                    {this.dogsButton()}
                    {this.buttonsByLogin()}
                    {this.welcomeMessage()}
                    {this.shelterButtons()}
                </ul>
            </Wrapper>
        );
    }

    // Todo: add an onclick function to the logOut button so that it actually logs out the user

    homeButton(){
        const userRole = this.props.userData[0].userRole;
        if (userRole !== 'SHELTER'){
            return (
                <li>
                    <NavLink  exact activeClassName='active' to='/'>Home</NavLink>
                </li>
            )
        }
        return null;
    }

    dogsButton(){
        const userRole = this.props.userData[0].userRole;
        const shelterId = this.props.userData[0].shelterId;
        if (userRole === 'SHELTER'){
            return (
                <li>
                    <NavLink exact activeClassName='active' to={`/shelter/${shelterId}/index`}>Our dogs</NavLink>
                </li>
            )
        } else if (userRole === 'POTENTIAL_PET_OWNER'){
            return (
            <li>
                <NavLink exact activeClassName='active' to='/dogs'>Dogs</NavLink>
            </li>
            )
        }
    }
    
    buttonsByLogin() {
        const isLoggedIn = this.props.userData[0].loggedIn;
        if (isLoggedIn) {
            return (
                <li onClick={this.props.logOut}>
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
        const logged_in = this.props.userData[0].loggedIn? "" : "not";
        const profilePage = "/profile/" + this.props.userData[0].username;
        const userRole = this.props.userData[0].userRole;
        if (this.props.userData[0].loggedIn) {
            if (userRole === "POTENTIAL_PET_OWNER") {
                return(
                    <li>
                        <NavLink exact activeClassName='active' to={profilePage}>
                            Hi {this.props.userData[0].username}! You are {logged_in} logged in as a {userRole}
                        </NavLink>
                    </li>
                )
            } else {
                return(
                    <li>
                        <NavLink className='nav-link disabled' to={profilePage}>
                            Hi {this.props.userData[0].username}! You are {logged_in} logged in as a {userRole}
                        </NavLink>
                    </li>
                )

            }

        } else {
            return (
                <li>
                    <NavLink className='nav-link disabled' to={"/dogs"}>
                        Hi {this.props.userData[0].username}! You are {logged_in} logged in.
                    </NavLink>
                </li>
            )
        }
    }

    shelterButtons() {
        const isLoggedIn = this.props.userData[0].loggedIn;
        const userRole = this.props.userData[0].userRole;
        const shelterId = this.props.userData[0].shelterId;
        if (isLoggedIn && userRole === 'SHELTER') {
            return (
                <ul className="float-right">
                    <li>
                        <NavLink exact activeClassName='active' to={`/shelter/${shelterId}`} className='btn btn-outline-light'>My
                            profile</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to={`/shelter/${shelterId}/edit`}
                                 className='btn btn-outline-warning'>Edit my
                            profile</NavLink>
                    </li>
                </ul>
            )
        }
    }
}


export default Navigation;
