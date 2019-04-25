import * as React from "react";

class DogData extends React.Component {

    render() {
        let dogData = this.props.dogData;
        return (
            dogData ? (
                    <div className={this.props.className}>
                        <div className="h3 card-title">
                            {dogData.name}
                        </div>
                        <div>
                            {dogData.breed} {dogData.gender} {dogData.isNeutered ? "Neutered / Spayed" : "Not Neutered / Spayed"} {dogData.size}
                        </div>
                        <div>
                            <h4>Status</h4>
                            {dogData.status}
                        </div>
                        <div>
                            <h4>Date of Birth</h4>
                            {dogData.dateOfBirth}
                        </div>
                    </div>) : null
        );
    }

}

export default DogData;