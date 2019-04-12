import {NavLink} from "react-router-dom";
import React from "react";


class DogListByShelter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
        };
    }

    componentDidMount() {
        this.getDogs();
        this.makeManyCards();
    }

    getDogs() {
        fetch(`http://localhost:8080/dogs/shelter/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({data: json});
            })
    }


    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center m-3 p-3">{this.state.data.length > 0 ? (this.state.data[0].shelter.name + " shelter's dogs:") : (
                        <div>Please wait..</div>
                    )}
                        </h1>
                </div>
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
        return (
            <div className="DogList">
                <div className="card w-100">
                    <img
                        className="card-img-top"
                        src={'http://localhost:8080/image/' + dogPhoto}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h4 className="card-title">{dogName}</h4>
                        <p className="card-text">Age: {dogAge}</p>
                        <p className="card-text">Breed: {dogBreed}</p>
                        <NavLink to={`/dog/${dogId}`} className="btn btn-primary">
                            See more
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default DogListByShelter;