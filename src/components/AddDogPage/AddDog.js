import React from "react";

class AddDog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            dogData: [],
            shelterId: props.match.params.id
        };
    }

    render() {
        return (
            <div>
                {this.renderDogForm()}
            </div>
        );
    }

    renderDogForm() {
        return (
            <div className="container">
                <form>
                    <div className="card m-3">
                        {this.renderFormGroup1()}
                        {this.renderFormGroup2()}
                        {this.renderFormGroup3()}
                        {this.renderFormGroup4()}
                    </div>
                </form>
            </div>
        );
    }

    renderFormGroup1() {
        return (
            <div className="form-group m-3">
                <label htmlFor="dogName">Name</label>
                <input type="text" className="form-control" id="dogName"
                       placeholder="Enter name"/>
            </div>
        );
    }

    renderFormGroup2() {
        return (
            <div className="form-row m-3">
                <div className="col">
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <input required type="date" className="form-control" placeholder="Enter date of birth"/>
                </div>
                <div className="col">
                    <label htmlFor="breed">Breed</label>
                    <select className="form-control" id="breed">
                        <option>MIXED</option>
                        <option>COLLIE</option>
                        <option>HUSKY</option>
                        <option>LABRADOR</option>
                        <option>PUG</option>
                    </select>
                </div>
            </div>
        );
    }


    renderFormGroup3() {
        return (
            <div className="form-row m-3">
                <div className="col">
                    <div>Gender</div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female"
                               value="FEMALE"/>
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male"
                               value="MALE"/>
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                </div>
                <div className="col">
                    <div>Neutered</div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNeutered" id="true"
                               value="true"/>
                        <label className="form-check-label" htmlFor="true">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNeutered" id="false"
                               value="false"/>
                        <label className="form-check-label" htmlFor="false">No</label>
                    </div>
                </div>
            </div>
        );
    }

    renderFormGroup4() {
        return (
            <div className="form-group m-3">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                          rows="5"/>
            </div>
        );
    }
}

export default AddDog;