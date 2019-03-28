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
                <NavLink className="btn btn-dark" to={`/shelter/${this.state.shelterId}/add-dog`}>Add new dog</NavLink>
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
                <DogCard dogName={dog.name} dogStatus={dog.status} dogImage={dog.photoPath}/>
            </div>)
        }
        return dogCards;
    }
}

class DogCard extends React.Component {

    render() {
        return (
            <div className="card">
                <img className="shelterDogImage card-img-left" src={"http://localhost:8080/" + this.props.dogImage} alt="dog"/>
                <div className="card-body">
                    <h3 className="dogName">
                        {this.props.dogName}
                    </h3>
                    <div>
                        Status: {this.props.dogStatus}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShelterIndex;