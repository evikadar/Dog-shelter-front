import React from "react";
import * as ReactDOM from "react-dom";
import Redirect from "react-router-dom/es/Redirect";

class AddDog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            formData: {shelterId: props.match.params.id}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            formData: {[name]: value}
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let form = new FormData();
        form.append("file", this.fileInput.current.files[0]);
        form.append("dogData", JSON.stringify(this.state.formData));
        console.log(form);
        fetch("http://localhost:8080/shelter/dog", {
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: form
        }).then(response => {
            if (response.ok) {
                window.location.href = `/shelter/${this.state.formData.shelterId}/index`;
            } else {
                response.error();
            }
        }).catch(error => alert(error))
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
            <div>
                <h1 className='title'>Add New Dog</h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="card m-3">
                            {this.renderFormGroup1()}
                            {this.renderFormGroup2()}
                            {this.renderFormGroup3()}
                            {this.renderFormGroup4()}
                            {this.renderFormGroup5()}
                            {this.renderSubmitButton()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    renderFormGroup1() {
        return (
            <div className="form-row m-3">
                <div className="col">
                    <label htmlFor="dogName">Name</label>
                    <input type="text" className="form-control" id="dogName" name="name"
                           placeholder="Enter name" onChange={this.handleInputChange}/>
                </div>
                <div className="col">
                    <label>Photo</label>
                    <div className="custom-file">
                        <label className="custom-file-label" htmlFor="image">Choose image</label>
                        <input type="file" className="custom-file-input" id="image" accept="image/*"
                               ref={this.fileInput}/>
                    </div>
                </div>
            </div>
        );
    }

    renderFormGroup2() {
        return (
            <div className="form-row m-3">
                <div className="col">
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <input id="dateOfBirth" name="dateOfBirth" required type="date" className="form-control"
                           placeholder="Enter date of birth" onChange={this.handleInputChange}/>
                </div>
                <div className="col">
                    <label htmlFor="breed">Breed</label>
                    <select className="form-control" id="breed" name="breed" onChange={this.handleInputChange}>
                        <option value="MIXED">Mixed</option>
                        <option value="COLLIE">Collie</option>
                        <option value="HUSKY">Husky</option>
                        <option value="LABRADOR">Labrador</option>
                        <option value="PUG">Pug</option>
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
                        <input defaultChecked className="form-check-input" type="radio" name="gender" id="female"
                               value="FEMALE" onChange={this.handleInputChange}/>
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male"
                               value="MALE" onChange={this.handleInputChange}/>
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                </div>
                <div className="col">
                    <div>Neutered</div>
                    <div className="form-check form-check-inline">
                        <input defaultChecked className="form-check-input" type="radio" name="isNeutered" id="true"
                               value="true" onChange={this.handleInputChange}/>
                        <label className="form-check-label" htmlFor="true">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNeutered" id="false"
                               value="false" onChange={this.handleInputChange}/>
                        <label className="form-check-label" htmlFor="false">No</label>
                    </div>
                </div>
            </div>
        );
    }

    renderFormGroup4() {
        return (
            <div className="form-row m-3">
                <div className="col">
                    <label htmlFor="size">Size</label>
                    <select className="form-control" id="size" name="size" onChange={this.handleInputChange}>
                        <option value="EXTRA_SMALL">Extra small</option>
                        <option value="SMALL">Small</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LARGE">Large</option>
                        <option value="EXTRA_LARGE">Extra large</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" id="status" name="status" onChange={this.handleInputChange}>
                        <option value="AVAILABLE">Looking for owner</option>
                        <option value="PENDING">Pending</option>
                        <option value="ADOPTED">Adopted</option>
                        <option value="DEAD">Passed away</option>
                    </select>
                </div>
            </div>
        );
    }

    renderFormGroup5() {
        return (
            <div>
                <div className="form-group m-3">
                    <label htmlFor="personalityTrait">Personality trait</label>
                    <textarea className="form-control" id="personalityTrait" placeholder="Describe personality"
                              name="personalityTrait" rows="5" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="dreamHome">Dream home</label>
                    <textarea className="form-control" id="dreamHome" placeholder="Describe dream home"
                              name="dreamHome" rows="5" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="specialFeatures">Special features</label>
                    <textarea className="form-control" id="specialFeatures" placeholder="Describe special features"
                              name="specialFeatures" rows="5" onChange={this.handleInputChange}/>
                </div>
            </div>
        );
    }

    renderSubmitButton() {
        return (
            <div className="m-3">
                <input type="submit" formMethod="post" className="btn btn-dark"/>
            </div>
        );
    }
}

export default AddDog;