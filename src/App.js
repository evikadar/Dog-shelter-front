import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/Footer'
import ShelterIndex from './components/ShelterIndex/ShelterIndex';
import ShelterDetails from "./components/ShelterPage/ShelterDetails";
import Login from "./components/LoginRegisterPage/Login";
import Register from "./components/LoginRegisterPage/Register";
import DogDetails from './components/DogDetailsPage/DogDetails'
import LandingPage from './components/LandingPage/LandingPage'
import AddDog from "./components/AddDogPage/AddDog";
import ShelterEdit from "./components/ShelterPage/ShelterEdit";
import DogList from "./components/DogList";
import DogListByShelter from "./components/DogListByShelter";


class App extends React.Component {

    state = {
        userData: [{
            username: 'Guest',
            loggedIn: false,
            userRole: 'POTENTIAL_PET_OWNER',
            shelterId: 0

        }]
    };

    handleLogin = (userData) => {
        this.setState({
            userData: [{
                username: userData.username,
                loggedIn: true,
                userRole: userData.userRole,
                shelterId: userData.shelterId,

            }]
        })
    };

    logOut = () => {
        console.log("logOut");
        this.setState({
            userData: [{
                username: 'Guest',
                loggedIn: false,
                userRole: 'POTENTIAL_PET_OWNER',
                shelterId: 0,
            }]
        })
    };

    render() {
        return (
            <Router>
                <>
                    <div style={{height: 1000}}>
                        <div className="App">
                            <Navigation userData={this.state.userData} logOut={this.logOut}/>
                        </div>
                        <Switch>
                            <Route exact path={'/'} component={LandingPage}/>
                            <Route exact path={'/shelter/:id/index'}
                                   render={(props) => <ShelterIndex {...props}
                                                                    value="All Dogs"/>}/>
                            <Route exact path={'/shelter/:id/add-dog'} render={(props) => <AddDog {...props}/>}/>
                            <Route exact path={'/dog/:id'} name='DogDetails' component={DogDetails}/>
                            <Route exact path={"/dogs"} component={DogList}/>
                            <Route exact path={"/shelter/:id"} component={ShelterDetails}/>
                            <Route
                                path={'/login'}
                                render={(routeProps) => (
                                    <Login {...routeProps}
                                           userData = {this.state.userData}
                                           handleLogin={this.handleLogin} />
                                )}
                            />
                            <Route
                                path={'/register'}
                                render={(routeProps) => (
                                    <Register {...routeProps}
                                              userData = {this.state.userData}
                                    />
                                )}
                            />
                            <Route exact path={"/shelter/:id/edit"} component={ShelterEdit}/>
                            <Route exact path={"/dogs/shelter/:id"} component={DogListByShelter}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Router>
        );


    }

}

export default App;
