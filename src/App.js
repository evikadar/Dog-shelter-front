import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DogList from "./DogList";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path={"/dogs"} component={DogList}/>
            </BrowserRouter>
        )
    }
}

export default App;
