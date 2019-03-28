import React from 'react';
import './ShelterDetails.css'
import {NavLink} from 'react-router-dom'


function Title(props) {
    return <h1 className='title'>{props.value}</h1>
}

class ShelterDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            shelterData: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/shelter/${this.props.match.params.id}`) //
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    shelterData: result
                })
            });
    }

    render() {
        return (
            <div>
                <Title value={this.props.value}/>
                {this.displayShelterData()}
            </div>
        )
    }

    displayShelterData() {
        return (
            <div className="container">
                {this.state.shelterData.length > 0 ? (
                    this.getShelterData()
                ) : (
                    <div>Please wait..</div>
                )
                }
            </div>
        );
    }

    getShelterData() {
        let shelterInfo = [];
        for (let i = 0; i < this.state.shelterData.length; i++) {
            let shelter = this.state.shelterData[i];
            shelterInfo.push(
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">{shelter.name} </h1>
                            <div className="text-left">
                                <NavLink exact activeClassName='active' to='/dogs' className="btn btn-secondary"><h2> ...
                                    Our dogs ... </h2></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            <div className="col-6">
                                <div className="card border-dark mb-3 text-center">
                                    <h3 className="card-title">Contact us:</h3>
                                    <li className="list-group-item">
                                        <i className="cui-envelope-closed">  </i>
                                          {shelter.email}
                                    </li>
                                    <li className="list-group-item">
                                        <i className="cui-phone">  </i>
                                        {shelter.phoneNumber}
                                    </li>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="card border-dark mb-3 text-center">
                                    <h3 className="card-title">Address:</h3>
                                    <div className="card-text">
                                        <div>{shelter.address.address}</div>
                                        <div>{shelter.address.city}, {shelter.address.country}</div>
                                        <div>{shelter.address.zipCode}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="card border-dark mb-3">
                                    <h3 className="card-title text-center">About us:</h3>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {shelter.shelterDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <ShelterLogo shelterLogo={shelter.photoPath}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return shelterInfo;
    }
}

class ShelterLogo extends React.Component {
    render() {
        return (
            <div>
                <img className="shelterLogo"
                     src={"http://localhost:8080/" + this.props.shelterLogo} alt="logo"/>
            </div>
        )
    }
}

export default ShelterDetails;
