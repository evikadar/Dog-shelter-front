import * as React from "react";

class DogData extends React.Component {

    render() {
        let dogData = this.props.dogData;
        let spanClassName = "cui-star px-2 text-warning";
        return (
            dogData ? (
                    <div className={this.props.className}>
                        <div className="h3 card-title text-uppercase">
                            {dogData.name}
                        </div>
                        <div className={"my-3"}>
                            {dogData.breed}<span className={spanClassName}/>{dogData.gender}<span className={spanClassName}/>
                            {dogData.isNeutered ? "Neutered / Spayed" : "Not Neutered / Spayed"} <span className={spanClassName}/>
                            {dogData.size}
                        </div>
                        <div className={"my-3"}>
                            <h5>Status</h5>
                            <div>{dogData.status}</div>
                        </div>
                        <div className={"my-3"}>
                            <h5>Date of Birth</h5>
                            {dogData.dateOfBirth}
                        </div>
                    </div>) : null
        );
    }

}

export default DogData;