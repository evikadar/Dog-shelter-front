import * as React from "react";

class DogDescription extends React.Component {
    render() {
        let dogDescription = this.props.dogDescription;
        return (
            <div className={this.props.className}>
                <h4>Description</h4>
                {dogDescription ? (
                    <div>
                        <div className={"my-3"}>
                            <h5>Personality trait</h5>
                            <div>{dogDescription.personalityTrait}</div>
                        </div>
                        <div className={"my-3"}>
                            <h5>Dream home</h5>
                            <div>{dogDescription.dreamHome}</div>
                        </div>
                        <div className={"my-3"}>
                            <h5>Specialties</h5>
                            <div>{dogDescription.specialFeatures}</div>
                        </div>
                    </div>
                ) : <div>No information</div>}
            </div>
        )
    }
}

export default DogDescription;