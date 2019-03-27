import React from 'react';

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
                console.log(result);
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
            <div className="card-columns">
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
                    <div id="contactBox">
                        <div>
                            <h1>{shelter.name} </h1>
                        </div>
                        <div>{shelter.email}</div>
                        <div>{shelter.id}</div>
                    </div>
                    <div id="addressBox">
                        <div>{shelter.address.address}</div>
                        <div>{shelter.address.city}</div>
                        <div>{shelter.address.country}</div>
                        <div>{shelter.address.zipCode}</div>
                    </div>
                </div>
            )
        }
        return shelterInfo;
    }
}

export default ShelterDetails;
