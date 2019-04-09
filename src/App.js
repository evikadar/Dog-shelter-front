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


const App = () => {
    return (
        <Router>
            <>
                <div style={{height: 1000}}>
                    <div className="App">
                        <Navigation/>
                    </div>

                    <Switch>
                        <Route exact path={'/'} component={LandingPage}/>
                        <Route exact path={'/shelter/:id/index'} render={(props) => <ShelterIndex {...props} value="All Dogs"/>}/>
                        <Route exact path={'/shelter/:id/add-dog'} component={AddDog}/>
                        <Route exact path={'/dog/:id'} name='DogDetails' component={DogDetails}/>
                        <Route exact path={"/dogs"} component={DogList}/>
                        <Route exact path={"/shelter/:id"} component={ShelterDetails}/>
                        <Route exact path={"/login"} component={Login}/>
                        <Route exact path={"/register"} component={Register}/>
                        <Route exact path={"/shelter/:id/edit"} component={ShelterEdit}/>
                    </Switch>
                </div>
                <Footer/>
            </>
        </Router>
    );
};

export default App;