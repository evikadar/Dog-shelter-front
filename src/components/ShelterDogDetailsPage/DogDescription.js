import * as React from "react";

class DogDescription extends React.Component {
    render() {
        let dogDescription = this.props.dogDescription;
        return (
            <div className={this.props.className}>
                <h3>Description</h3>
                {dogDescription ? (
                    <div>
                        <div>
                            <h4>Personality trait</h4>
                            <div>{dogDescription.personalityTrait}</div>
                        </div>
                        <div>
                            <h4>Dream home</h4>
                            <div>{dogDescription.dreamHome}</div>
                        </div>
                        <div>
                            <h4>Specialties</h4>
                            <div>{dogDescription.specialFeatures}</div>
                        </div>
                    </div>
                ) : <div>No information</div>}
            </div>
        )
    }
}

export default DogDescription;