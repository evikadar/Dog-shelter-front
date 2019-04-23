import * as React from "react";
import DogData from "./DogData";
import OwnerInfo from "./OwnerInfo";
import DogImage from "./DogImage";

class ShelterDogDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            shelterId: props.match.params.id,
            dogData: null,
            ownerInfo: null,
            imagePath: ""
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <DogData className="card" dogData={this.state.dogData}/>
                    </div>
                    <div className="col-6 col-md-4">
                        <DogImage className="card" imageClassName="card-img"
                                  imagePath={this.state.imagePath.length > 0 ? "http://localhost:8080/image/" + this.state.imagePath : "/dummyDogImage.jpg"}/>
                    </div>
                </div>
                <div className="row">
                    <OwnerInfo className="card" ownerInfo={this.state.ownerInfo}/>
                </div>
            </div>
        )
    }

}

export default ShelterDogDetailsPage;