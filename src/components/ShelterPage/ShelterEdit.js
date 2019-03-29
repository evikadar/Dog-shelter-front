import React from "react";

class ShelterEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            shelterData: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/shelter/${this.props.match.params.id}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    shelterData: result
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

    getForm() {
        let shelterInfo = [];
        for (let i = 0; i < this.state.shelterData.length; i++) {
            let shelter = this.state.shelterData[i];
            shelterInfo.push(
                <div>
                    <form>
                        <h2 className="text-center m-3">Change your shelter's profile data</h2>
                        <div className="card m-3">
                            <h3 className="text-center m-3">General and contact data:</h3>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-2">
                                    <label htmlFor="shelter-name">Shelter name:</label>
                                    <input type="text" className="form-control" id="shelter-name"
                                           defaultValue={shelter.name}/>
                                </div>
                                <div className="col m-2">
                                    <label htmlFor="shelter-logo-file">Upload shelter logo:</label>
                                    <input type="file" className="form-control-file" id="shelter-logo-file"/>
                                </div>
                            </div>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-2">
                                    <label htmlFor="shelter-email">E-mail:</label>
                                    <input type="text" className="form-control" id="shelter-email"
                                           placeholder="Example input" defaultValue={shelter.email}/>
                                </div>
                                <div className="col m-2">
                                    <label htmlFor="shelter-phone">Phone number:</label>
                                    <input type="text" className="form-control" id="shelter-phone"
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
                                           defaultValue={shelter.address && shelter.address.country ? shelter.address.country : ""}/>
                                </div>
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-city">City:</label>
                                    <input type="text" className="form-control" id="shelter-address-city"
                                           defaultValue={shelter.address && shelter.address.city ? shelter.address.city : ""}/>
                                </div>
                            </div>
                            <div className="row mt-0 ml-3 mr-3 mb-3">
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-address">Address (street, house number):</label>
                                    <input type="text" className="form-control" id="shelter-address-address"
                                           defaultValue={shelter.address && shelter.address.address ? shelter.address.address : ""}/>
                                </div>
                                <div className="col m-3">
                                    <label htmlFor="shelter-address-zip">Zip-code:</label>
                                    <input type="text" className="form-control" id="shelter-address-zip"
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
                                              rows="5" defaultValue={shelter.shelterDescription ? shelter.shelterDescription : ""}/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="row m-3">
                        <div className="col text-right">
                            <button type="cancel" className="btn btn-light" value="Cancel">Cancel</button>
                        </div>
                        <div className="col text-left">
                            <button type="submit" className="btn btn-success" value="Submit">Save changes</button>
                        </div>
                    </div>
                </div>
            )
        }
        return shelterInfo;
    }
}

export default ShelterEdit;