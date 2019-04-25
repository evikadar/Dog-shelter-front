import * as React from "react";

class DogData extends React.Component {

    render() {
        let dogData = this.props.dogData;
        console.log(dogData);
        let spanClassName = "cui-star px-2 text-warning";
        return (
            dogData ? (
                    <div className={this.props.className}>
                        <div className="h3 card-title text-uppercase">
                            {dogData.name}
                        </div>
                        <div className={"my-3"}>
                            {dogData.breedAsString}<span className={spanClassName}/>{dogData.genderAsString}<span className={spanClassName}/>
                            {dogData.neutered ? "Neutered / Spayed" : "Not Neutered / Spayed"} <span className={spanClassName}/>
                            {dogData.sizeAsString}
                        </div>
                        <div className={"my-3"}>
                            <h5>Status</h5>
                            <div>{dogData.statusAsString}</div>
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