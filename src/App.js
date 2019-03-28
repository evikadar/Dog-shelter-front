import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './components/Footer'
import DogDetails from "./components/DogDetailsPage/DogDetails";
import ShelterIndex from './components/ShelterIndex/ShelterIndex';
import LandingPage from "./components/LandingPage/LandingPage";
import ShelterDetails from "./components/ShelterPage/ShelterDetails";
import DogList from "./DogList";


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
                        <Route exact path={'/shelter-index'} render={(props) => <ShelterIndex {...props} value="All Dogs"/>}/>
                        <Route exact path={'/dog/:id'} name='DogDetails' component={DogDetails}/>
                        <Route exact path={"/dogs"} component={DogList}/>
                        <Route exact path={"/shelter/:id"} component={ShelterDetails}/>

                    </Switch>
                </div>
                <Footer/>
            </>
        </Router>
    );
};

export default App;