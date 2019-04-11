import React from 'react'
import './ShelterIndex.css'
import NavLink from "react-router-dom/es/NavLink";

class ShelterIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            dogData: [],
            shelterId: props.match.params.id
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/shelter/${this.state.shelterId}/dogs`, {
            method: "get",
        })
            .then(response => response.json())
            .then((result) => this.setState({
                isLoaded: true,
                dogData: result
            }))
            .catch(function (error) {
                alert(`Error: ${error}\nIf you see this, our testers did a sloppy job, and our developers an even sloppier`)
            })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <NavLink className="btn btn-dark m-3" to={`/shelter/${this.state.shelterId}/add-dog`}>Add new
                        dog</NavLink>
                </div>
                {this.renderDogCards()}
            </div>
        );
    }

    renderDogCards() {
        return (
            <div className="container-fluid">
                {this.state.dogData.length > 0 ? (
                    this.renderAllDogCards()
                ) : (
                    <div>Your dogs are loading...</div>
                )
                }
            </div>
        );
    }

    renderAllDogCards() {
        let dogCards = [];
        for (let i = 0; i < this.state.dogData.length; i++) {
            let dog = this.state.dogData[i];
            dogCards.push(<div>
                <DogCard dogName={dog.name} dogStatus={dog.status} dogImage={dog.photoPath} dogGender={dog.gender}
                dogBreed={dog.breed} dogSize={dog.size} dogAge={dog.age} isNeutered={dog.isNeutered}/>
            </div>)
        }
        return dogCards;
    }
}

class DogCard extends React.Component {

    render() {
        return (
            <div className="card border-light mb-3">
                <div className="card-header">{this.props.dogName}</div>
                <div className="card-body">
                    <img className="shelterDogImage card-img-left" src={"http://localhost:8080/image/" + this.props.dogImage}
                         alt="dog"/>
                    <div className="row">
                        <div className="col">
                            <h4 className="mt-1">Status</h4>
                            <div>
                                {this.props.dogStatus}
                            </div>
                            <h4 className="mt-1">Gender</h4>
                            <div>
                                {this.props.dogGender}
                            </div>
                            <h4 className="mt-1">Neutered</h4>
                            <div>
                                {this.props.isNeutered ? "Yes" : "No"}
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="mt-1">Breed</h4>
                            <div>
                                {this.props.dogBreed}
                            </div>
                            <h4 className="mt-1">Size</h4>
                            <div>
                                {this.props.dogSize}
                            </div>
                            <h4 className="mt-1">Age</h4>
                            <div>
                                {this.props.dogAge}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShelterIndex;