import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import FilterPanel from "./FilterPanel/FilterPanel";

class DogList extends Component {
    constructor(props){
        super(props);
        this.state = {data: []};
        this.refreshDogCards = this.refreshDogCards.bind(this);
    }

    refreshDogCards(dogs) {
        this.setState({data: dogs});
        this.makeManyCards();
    }

    render() {
        return (
            <div>
                <FilterPanel invokeDataRefresh={this.refreshDogCards}/>
                <div className="card-columns">
                    {this.makeManyCards()}
                </div>
            </div>

        )
    }

    makeManyCards() {
        var dogs = this.state.data;
        var allTheDogs = [];

        try {
            if (dogs[0].name) {

                for (var i = 0; i < dogs.length; i++) {
                    allTheDogs.push(
                        <div>
                            <span className='oneDog'
                                  key={i}>{this.makeACard(dogs[i].name, dogs[i].age, dogs[i].breed, dogs[i].photoPath, dogs[i].id)}</span>
                        </div>
                    )
                }
            }
        } catch (e) {
            console.log(e);
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
}

export default DogList;