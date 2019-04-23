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
import ShelterDogDetailsPage from "./components/ShelterDogDetailsPage/ShelterDogDetailsPage";


class App extends React.Component {

    state = {
        username: 'Guest',
        loggedIn: false
    };

    handleLogin = (user) => {
        this.setState({
            username: user,
            loggedIn: true,
        })
    };

    render() {
        return (
            <Router>
                <>
                    <div style={{height: 1000}}>
                        <div className="App sticky-top">
                            <Navigation username={this.state.username} loggedIn={this.state.loggedIn}/>
                        </div>
                        <Switch>
                            <Route exact path={'/'} component={LandingPage}/>
                            <Route exact path={'/shelter/:id/index'}
                                   render={(props) => <ShelterIndex {...props} value="All Dogs"/>}/>
                            <Route exact path={'/shelter/:id/dog/:dogId'}
                                   render={(props) => <ShelterDogDetailsPage {...props}/>}/>
                            <Route exact path={'/shelter/:id/add-dog'} render={(props) => <AddDog {...props}/>}/>
                            <Route exact path={'/dog/:id'} name='DogDetails' component={DogDetails}/>
                            <Route exact path={"/dogs"} component={DogList}/>
                            <Route exact path={"/shelter/:id"} component={ShelterDetails}/>
                            <Route
                                path={'/login'}
                                render={(routeProps) => (
                                    <Login {...routeProps}
                                           username={this.state.username}
                                           loggedIn={this.state.loggedIn}
                                           handleLogin={this.handleLogin}/>
                                )}
                            />
                            <Route
                                path={'/register'}
                                render={(routeProps) => (
                                    <Register {...routeProps}
                                              username={this.state.username}
                                              loggedIn={this.state.loggedIn}/>
                                )}
                            />
                            <Route exact path={"/shelter/:id/edit"} component={ShelterEdit}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Router>
        );


    }

}

export default App;