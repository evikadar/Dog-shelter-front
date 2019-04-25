import * as React from "react";
import DogData from "./DogData";
import OwnerInfo from "./OwnerInfo";
import DogImage from "./DogImage";
import DogDescription from "./DogDescription";

class ShelterDogDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            shelterId: props.match.params.id,
            dogId: props.match.params.dogId,
            dogData: null,
            dogDescription: null,
            ownerInfo: null,
            imagePath: null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/shelter/${this.state.shelterId}/dog/${this.state.dogId}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.setState(
                    {
                        isLoaded: true,
                        dogData: result,
                        dogDescription: result.description,
                        ownerInfo: result.owner,
                        imagePath: result.photoPath
                    }
                )
            }).catch(function (err) {
            console.log(err);
        })
    }

    render() {
        //todo: make card component!!!
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <DogData className="card-body" dogData={this.state.dogData}/>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="card-body">
                            <DogImage className="card" imageClassName="card-img"
                                      imagePath={this.state.imagePath ? `http://localhost:8080/image/${this.state.imagePath}` : "/dummyDogImage.jpg"}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <OwnerInfo className="card-body" ownerInfo={this.state.ownerInfo}/>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <DogDescription className="card-body" dogDescription={this.state.dogDescription}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShelterDogDetailsPage;