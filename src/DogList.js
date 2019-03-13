import React, {Component} from 'react';

class DogList extends Component {
    state = { data: []};

    componentDidMount() {
        this.getDogs();
    }

    render() {
        return (
            <div className="card-columns">
                {this.makeManyCards(12)}
            </div>
        )
    }

    makeManyCards(nrOfDogs) {
        var dogs2 = this.state.data;
        var dogs = [];

        try {
            if(dogs2[0].name) {
                console.log(dogs2[0]);
                for (var i = 0; i < dogs2.length; i++) {
                    dogs.push(
                        <div>
                            <span className='oneDog' key={i}>{this.makeACard(dogs2[i].name, dogs2[i].age, "Spániel")}</span>
                        </div>
                    )
                }
            }
        }catch(e){
            console.log(e);
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

    getDogs() {
        fetch('http://localhost:8080/dogs')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({data: json})
            });
    }
}
export default DogList;