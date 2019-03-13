import React from 'react';
import {NavLink} from "react-router-dom";
import './landingstyle.css';


class LandingPage extends React.Component {
    state = {data: []};

    componentDidMount() {
        this.getDogs();
    }

    render() {
        return (
            <div>
                <div id="background">
                    <div id="titles">
                        <h1 id="maintitle">Dog Shelter Project</h1>
                        <div id="subtitle">Find your dream dog!</div>
                        <button id="all-dogs-main-page-button"><NavLink exact activeClassName='active' to='/dogs'>Looking
                        for a
                        home</NavLink>
                    </button>
                    </div>
                    <div>

                        {/*<button><NavLink exact activeClassName='active' to='/dog'>dog</NavLink></button>*/}
                    </div>
                </div>
                <div>
                    <h2 id="example-dogs-text">Added recently:</h2>
                    {this.makeRandomDogs()}
                </div>
            </div>
        );
    }

    makeRandomDogs() {
        console.log(this.state.data[5]);
        return <div className="DogList">
            <div className="card w-100">
                {/*<img className="card-img-top" src={this.state.data[5].photoPath} alt="Card image cap"/>*/}
                <div className="card-body">
                    {/*<h4 className="card-title">{this.state.data[5].name}</h4>
                    <p className="card-text">Age: {this.state.data[5].age}</p>
                    <p className="card-text">Breed: {this.state.data[5].breed}</p>*/}

                    <a href="#" className="btn btn-primary">See more</a>
                </div>
            </div>
        </div>;
    }

    getDogs() {
        fetch('http://localhost:8080/dogs')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({data: json})
            });
    }

}

export default LandingPage