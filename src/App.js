import DogList from "./DogList";
import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './components/Footer'
import DogDetails from "./components/DogDetailsPage/DogDetails";
import LandingPage from "./components/LandingPage";
import ShelterIndex from './components/ShelterIndex/ShelterIndex';

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
                        <Route exact path={'/dog'} component={DogDetails}/>
                        <Route exact path={'/shelter-index'} render={(props) => <ShelterIndex {...props} value="All Dogs"/>}/>
                        <Route exact path={"/dogs"} component={DogList}/>
                    </Switch>
                </div>
                <Footer/>
            </>
        </Router>
    );
};

export default App;