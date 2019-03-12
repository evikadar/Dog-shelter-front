import React, {Component} from 'react';

class DogList extends Component {
    render() {
        return (
            <div className="card-columns">
                {this.makeManyCards(12)}
            </div>
        )
    }

    makeManyCards(nrOfDogs) {
        var dogs = [];
        for (var i = 0; i < nrOfDogs; i++) {
            dogs.push(<span className='oneDog' key={i}>{this.makeACard("Süti", 7, "Mixed")}</span>)
        }
        return dogs;
    }


    makeACard(dogName, dogAge, dogBreed) {
        return <div className="DogList">
            <div className="card w-100">
                <img className="card-img-top" src='./img/dog1.jpeg' alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">{dogName}</h4>
                    <p className="card-text">Age: {dogAge}</p>
                    <p className="card-text">Breed: {dogBreed}</p>
                    <a href="#" className="btn btn-primary">See more</a>
                </div>
            </div>
        </div>;

    }
}

export default DogList;