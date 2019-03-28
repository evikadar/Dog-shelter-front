import React from "react";

class ShelterEdit extends React.Component {

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
        return (
            <div>
                <form>
                    <div className="card m-3">
                        <h3 className="text-center m-3">General and contact data:</h3>
                        <div className="row mt-0 ml-3 mr-3 mb-3">
                            <div className="col m-2">
                                <label htmlFor="shelter-name">Shelter name:</label>
                                <input type="text" className="form-control" id="shelter-name"
                                       placeholder="Example input"/>
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
                                       placeholder="Example input"/>
                            </div>
                            <div className="col m-2">
                                <label htmlFor="shelter-phone">Phone number:</label>
                                <input type="text" className="form-control" id="shelter-phone"
                                       placeholder="Example input"/>
                            </div>
                        </div>
                    </div>
                    <div className="card m-3">
                        <h3 className="text-center m-3">Address:</h3>
                        <div className="row mt-0 ml-3 mr-3 mb-3">
                            <div className="col m-3">
                                <label htmlFor="shelter-address-country">Country:</label>
                                <input type="text" className="form-control" id="shelter-address-country"
                                       placeholder="Example input"/>
                            </div>
                            <div className="col m-3">
                                <label htmlFor="shelter-address-city">City:</label>
                                <input type="text" className="form-control" id="shelter-address-city"
                                       placeholder="Example input"/>
                            </div>
                        </div>
                        <div className="row mt-0 ml-3 mr-3 mb-3">
                            <div className="col m-3">
                                <label htmlFor="shelter-address-address">Address (street, house number):</label>
                                <input type="text" className="form-control" id="shelter-address-address"
                                       placeholder="Example input"/>
                            </div>
                            <div className="col m-3">
                                <label htmlFor="shelter-address-zip">Zip-code:</label>
                                <input type="text" className="form-control" id="shelter-address-zip"
                                       placeholder="Example input"/>
                            </div>
                        </div>
                    </div>
                    <div className="card m-3">
                        <h3 className="text-center m-3">Description:</h3>
                        <div className="row mt-0 ml-3 mr-3 mb-3">
                            <div className="col m-3">
                                <label htmlFor="shelter-description">Shelter description (motto, about the adoption-process, etc. ... ): </label>
                                <textarea className="form-control" id="shelter-description"
                                          rows="3"></textarea>
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
}

export default ShelterEdit;