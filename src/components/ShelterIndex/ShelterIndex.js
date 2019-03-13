import React from 'react'

function Title(props) {
    return <h1 className='title'>{props.value}</h1>
}

class ShelterIndex extends React.Component {

    render() {
        const dogName = "Zeus";
        const dogStatus = "Pending";
        const dogImage = "";
        return(
            <div>
                <Title value={this.props.value}/>
                <DogBox dogName={dogName} dogStatus={dogStatus} dogImage={dogImage} />
            </div>
        )
    }
}

class DogBox extends React.Component {

    render() {
        return (
            <div>
                <h3 class="dogBox dogName">
                    {this.props.dogName}
                </h3>
                <div>
                    Status: {this.props.dogStatus}
                </div>
                <img src={this.props.dogImage}/>
            </div>
        )
    }
}

export default ShelterIndex;