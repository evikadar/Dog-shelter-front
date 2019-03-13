import React, {Component} from 'react';

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
        var dogs2 = this.state.data;
        var dogs = [];

        try {
            if (dogs2[0].name) {
                console.log(dogs2[0]);
                for (var i = 0; i < dogs2.length; i++) {
                    dogs.push(
                        <div>
                            <span className='oneDog'
                                  key={i}>{this.makeACard(dogs2[i].name, dogs2[i].age, dogs2[i].breed, dogs2[i].photoPath)}</span>
                        </div>
                    )
                }
            }
        } catch (e) {
            console.log(e);
        }
        return dogs;
    }


    makeACard(dogName, dogAge, dogBreed, dogPhoto) {
        return <div className="DogList">
            <div className="card w-100">
                <img className="card-img-top" src={dogPhoto} alt="Card image cap"/>
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