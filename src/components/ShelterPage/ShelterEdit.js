import React from "react";

class ShelterEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shelterName: '',
            shelterEmail: '',
            shelterPhoneNumber: '',
            shelterAddressCountry: '',
            shelterAddressCity: '',
            shelterAddressAddress: '',
            shelterAddressZip: '',
            description: '',
            isLoaded: false,
            shelterData: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }

    createJSONFromFormData(){
        let formData = {
            id: this.state.shelterData[0].id,
            name: this.state.shelterName,
            email: this.state.shelterEmail,
            phoneNumber: this.state.shelterPhoneNumber,
            address: {
                country: this.state.shelterAddressCountry,
                city: this.state.shelterAddressCity,
                address: this.state.shelterAddressAddress,
                zipCode: this.state.shelterAddressZip,
                id: this.state.shelterData[0].address.id
            },
            shelterDescription: this.state.description
        };
        return JSON.stringify(formData);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: this.createJSONFromFormData()
        };

        fetch(`http://localhost:8080/shelter/${this.props.match.params.id}/edit`, options)
            .then(response => {if (response.ok){
                this.routeChange();
            }})
            .catch(error => this.setState({error}));

    }

    componentDidMount() {
        fetch(`http://localhost:8080/shelter/${this.props.match.params.id}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                let details = result[0];

                this.setState({
                    shelterName: details.name,
                    shelterEmail: details.email,
                    shelterPhoneNumber: details.phoneNumber,
                    shelterAddressCountry: details.address.country,
                    shelterAddressCity: details.address.city,
                    shelterAddressAddress: details.address.address,
                    shelterAddressZip: details.address.zipCode,
                    description: details.shelterDescription,
                    isLoaded: true,
                    shelterData: result,

                })

            });


    }

    render() {
        return (
            <div className="container">
                <div>
                    <div>
                        {this.getForm()}
                    </div>
                </div>
            </div>
        )
    }

    /*
    <div className="col m-2">
    <label htmlFor="shelter-logo-file">Upload shelter logo:</label>
    <input type="file" className="form-control-file" id="shelter-logo-file"/>
    </div>
    */

    routeChange() {
        let path = `/shelter/${this.props.match.params.id}`;
        this.props.history.push(path);
    }

    getForm() {
        let shelterInfo = [];
        for (let i = 0; i < this.state.shelterData.length; i++) {
            let shelter = this.state.shelterData[i];
            shelterInfo.push(
                <div>
                    <form action={this.props.action} method="post" onSubmit={this.handleSubmit}>
                        <h2 className="text-center m-3">Change your shelter's profile data</h2>
                        <div className="card m-3">
                            <h3 className="text-center m-3">General and contact data:</h3>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-2">
                                    <label htmlFor="shelter-name">Shelter name:</label>
                                    <input type="text" className="form-control" id="shelter-name" name="shelterName"
                                           onChange={this.handleChange}
                                           defaultValue={shelter.name}/>
                                </div>
                            </div>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-2">
                                    <label htmlFor="shelter-email">E-mail:</label>
                                    <input type="text" className="form-control" id="shelter-email" name="shelterEmail"
                                           onChange={this.handleChange}
                                           placeholder="Example input" defaultValue={shelter.email}/>
                                </div>
                                <div className="col m-2">
                                    <label htmlFor="shelter-phone">Phone number:</label>
                                    <input type="text" className="form-control" id="shelter-phone"
                                           name="shelterPhoneNumber"
                                           onChange={this.handleChange}
                                           defaultValue={shelter.phoneNumber ? shelter.phoneNumber : ""}/>
                                </div>
                            </div>
                        </div>
                        <div className="card m-3">
                            <h3 className="text-center m-3">Address:</h3>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-country">Country:</label>
                                    <input type="text" className="form-control" id="shelter-address-country"
                                           name="shelterAddressCountry" onChange={this.handleChange}
                                           defaultValue={shelter.address && shelter.address.country ? shelter.address.country : ""}/>
                                </div>
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-city">City:</label>
                                    <input type="text" className="form-control" id="shelter-address-city"
                                           name="shelterAddressCity" onChange={this.handleChange}
                                           defaultValue={shelter.address && shelter.address.city ? shelter.address.city : ""}/>
                                </div>
                            </div>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-address">Address (street, house number):</label>
                                    <input type="text" className="form-control" id="shelter-address-address"
                                           name="shelterAddressAddress" onChange={this.handleChange}
                                           defaultValue={shelter.address && shelter.address.address ? shelter.address.address : ""}/>
                                </div>
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-zip">Zip-code:</label>
                                    <input type="text" className="form-control" id="shelter-address-zip"
                                           name="shelterAddressZip" onChange={this.handleChange}
                                           defaultValue={shelter.address && shelter.address.zipCode ? shelter.address.zipCode : ""}/>
                                </div>
                            </div>
                        </div>
                        <div className="card m-3">
                            <h3 className="text-center m-3">Description:</h3>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-3">
                                    <label htmlFor="shelter-description">Shelter description (motto, about the
                                        adoption-process, etc. ... ): </label>
                                    <textarea className="form-control" id="shelter-description"
                                              name="description" onChange={this.handleChange}
                                              rows="5"
                                              defaultValue={shelter.shelterDescription ? shelter.shelterDescription : ""}/>
                                </div>
                            </div>
                        </div>

                        <div className="row m-3">
                            <div className="col text-right">
                                <button type="cancel" className="btn btn-light" value="Cancel" onClick={this.routeChange}>Go back to profile</button>
                            </div>
                            <div className="col text-left">
                                <button type="submit" className="btn btn-success" value="Submit"
                                        >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        return shelterInfo;
    }
}

export default ShelterEdit;