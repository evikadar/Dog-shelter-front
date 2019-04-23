import * as React from "react";

class DogData extends React.Component {

    constructor(props) {
        super(props);
        let dogData = this.props.dogData;
        this.state = {
            name: dogData && dogData.name ? dogData.name : "Name",
            breed: dogData && dogData.breed ? dogData.breed : "Breed",
            isNeutered: dogData ? (dogData.isNeutered ? "Neutered / Spayed" : "Not Neutered / Spayed") : "Neutered info",
            dateOfBirth: dogData && dogData.dateOfBirth ? dogData.dateOfBirth : "Date of birth",
            size: dogData && dogData.size ? dogData.size : "Size",
            gender: dogData && dogData.gender ? dogData.gender : "Gender",
            status: dogData && dogData.status ? dogData.status : "Status",
            personalityTrait: dogData && dogData.description ? dogData.description.personalityTrait : "Personality trait",
            dreamHome: dogData && dogData.description ? dogData.description.dreamHome : "Dream home",
            specialFeatures: dogData && dogData.description ? dogData.description.specialFeatures : "Special features",
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <div>
                    {this.state.name}
                </div>
                <div>
                    {this.state.breed} {this.state.gender} {this.state.isNeutered} {this.state.size}
                </div>
                <div>
                    {this.state.status}
                </div>
                <div>
                    {this.state.dateOfBirth}
                </div>
            </div>
        );
    }

}

export default DogData;