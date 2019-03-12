import React, {Component} from 'react';
import DogDetails from './components/DogDetailsPage/DogDetails';
import Header from './components/HeaderAndFooter/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <DogDetails/>
                <Header
                    logo="LOGO"
                    linkToAllDogs="Dogs"
                    linkToAllShelters="Shelters"
                    userLoginButton="UserLogin"/>
            </div>
        );
    }
}

export default App;
