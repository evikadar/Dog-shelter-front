import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import DogDetails from "./components/DogDetailsPage/DogDetails";

class DogList extends Component {
    state = {data: []};

    componentDidMount() {
        this.getDogs();
    }

    render() {
        return (
            <div>
                <div className="container">{this.makeFilters()}</div>
                <div className="card-columns">
                    {this.makeManyCards()}
                </div>
            </div>
        )
    }

    makeManyCards() {
        const dogs = this.state.data;
        const allTheDogs = [];
        if (dogs.length > 0) {

            for (var i = 0; i < dogs.length; i++) {
                allTheDogs.push(
                    <div>
                        <span className='oneDog'
                              key={i}>{this.makeACard(dogs[i].name, dogs[i].age, dogs[i].breed, dogs[i].photoPath, dogs[i].id)}</span>
                    </div>
                )
            }
        }
        return allTheDogs;
    }


    makeACard(dogName, dogAge, dogBreed, dogPhoto, dogId) {
        return <div className="DogList">
            <div className="card w-100">
                <img className="card-img-top" src={'http://localhost:8080/img/'+dogPhoto} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">{dogName}</h4>
                    <p className="card-text">Age: {dogAge}</p>
                    <p className="card-text">Breed: {dogBreed}</p>
                    <NavLink to={`/dog/${dogId}`} className="btn btn-primary">See more</NavLink>
                </div>
            </div>
        </div>;

    }

    getDogs() {
        fetch('http://localhost:8080/dogs')
            .then(response => response.json())
            .then(json => {

                this.setState({data: json})
            });
    }

    makeFilters() {
        return <div className="btn-group mb-10 mt-10 mr-10">
            <button type="button" className="mr-10 btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Age
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Puppy</a>
                <a className="dropdown-item" href="#">Young</a>
                <a className="dropdown-item" href="#">Adult</a>
            </div>
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Breed
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Puppy</a>
                <a className="dropdown-item" href="#">Young</a>
                <a className="dropdown-item" href="#">Adult</a>
            </div>
        </div>;
    }
}

export default DogList;