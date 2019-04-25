import React from "react";
import * as ReactDOM from "react-dom";
import Redirect from "react-router-dom/es/Redirect";
import FormSelect from "./FormSelect";

class AddDog extends React.Component {

    dogData = [
        "shelterId", "name", "dateOfBirth",
        "breed", "size", "gender", "isNeutered",
        "status", "personalityTrait", "dreamHome",
        "specialFeatures"
    ];

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            shelterId: props.match.params.id,
            name: "",
            dateOfBirth: "",
            breed: "",
            size: "",
            gender: "",
            isNeutered: null,
            status: "",
            personalityTrait: null,
            dreamHome: null,
            specialFeatures: null,
            breedOptions: [],
            statusOptions: [],
            sizeOptions: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    componentDidMount() {
        fetch("http://localhost:8080/dogs/enums")
            .then(response => response.json())
            .then((result) => {
                let breeds = this.getOptionsArray(result.breeds);
                let sizes = this.getOptionsArray(result.sizes);
                let statuses = this.getOptionsArray(result.statuses);
                this.setState(
                    {
                        isLoaded: true,
                        sizeOptions: sizes,
                        breedOptions: breeds,
                        statusOptions: statuses
                    }
                )
            }).catch(function (err) {
            console.log(err);
        })
    }

    getOptionsArray(options) {
        let optionsArray = [];
        for (let optionKey in options) {
            optionsArray.push({value: optionKey, label: options[optionKey]})
        }
        return optionsArray;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const key = target.name;

        this.setState({
            [key]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = this.getDogFormData();
        const options = {
            method: "post",
            body: data
        };
        fetch("http://localhost:8080/shelter/dog", options).then(response => {
            if (response.ok) {
                window.location.href = `/shelter/${this.state.shelterId}/index`;
            }
        }).catch(error => console.log(error))
    }

    getDogFormData() {
        let data = new FormData();
        for (let key of this.dogData) {
            data.append(key, this.state[key]);
        }
        data.append("file", this.fileInput.current.files[0]);
        return data;
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
                    <label htmlFor="dogName">Name:  <span
                        style={{color: 'red'}}>* required</span></label>
                    <input required type="text" className="form-control" id="dogName" name="name"
                           value={this.state.name}
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
                    <label htmlFor="dateOfBirth">Date of birth:  <span
                        style={{color: 'red'}}>* required</span></label>
                    <input id="dateOfBirth" name="dateOfBirth" required type="date" className="form-control"
                           value={this.state.dateOfBirth} placeholder="Enter date of birth"
                           onChange={this.handleInputChange}/>
                </div>
                <div className="col">
                    <FormSelect id="breed" labelName="Breed" className="form-control" name={"breed"}
                                onChange={this.handleInputChange} placeholderText="Please select a breed"
                                value={this.state.breed == null ? 0 : this.state.breed}
                                defaultDisabled={this.state.breed == null ? null : true}
                                options={this.state.breedOptions}
                                required={true}/>
                </div>
            </div>
        );
    }

    renderFormGroup3() {
        return (
            <div className="form-row m-3">
                <div className="col">
                    <div>Gender:  <span
                        style={{color: 'red'}}>* required</span></div>
                    <div className="form-check form-check-inline">
                        <input required className="form-check-input" type="radio" name="gender" id="female"
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
                    <div>Neutered?  <span
                        style={{color: 'red'}}>* required</span></div>
                    <div className="form-check form-check-inline">
                        <input required className="form-check-input" type="radio" name="isNeutered" id="true"
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
                    <FormSelect id="size" labelName="Size" className="form-control" name="size"
                                onChange={this.handleInputChange} placeholderText="Please select size"
                                value={this.state.size == null ? 0 : this.state.size}
                                defaultDisabled={this.state.size == null ? null : true}
                                options={this.state.sizeOptions}
                                required={true}/>
                </div>
                <div className="col">
                    <FormSelect id="status" labelName="Status" className="form-control" name="status"
                                onChange={this.handleInputChange} placeholderText="Please select status"
                                value={this.state.status == null ? 0 : this.state.status}
                                defaultDisabled={null}
                                options={this.state.statusOptions}
                                required={null}/>
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