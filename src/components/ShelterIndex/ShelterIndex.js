import React from 'react'
import './ShelterIndex.css'

function Title(props) {
  return <h1 className="title">{props.value}</h1>
}

class ShelterIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      dogData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/shelter/index', {
      method: 'get'
    })
      .then(response => response.json())
      .then(result =>
        this.setState({
          isLoaded: true,
          dogData: result
        })
      )
      .catch(function(error) {
        alert(
          `Error: ${error}\nIf you see this, our testers did a sloppy job, and our developers an even sloppier`
        )
      })
  }

  render() {
    return (
      <div>
        <Title value={this.props.value} />
        {this.renderDogBoxes()}
      </div>
    )
  }

  renderDogBoxes() {
    return (
      <div className="card-columns">
        {this.state.dogData.length > 0 ? (
          this.renderAllBoxes()
        ) : (
          <div>Your dogs are loading...</div>
        )}
      </div>
    )
  }

  renderAllBoxes() {
    let dogBoxes = []
    for (let i = 0; i < this.state.dogData.length; i++) {
      let dog = this.state.dogData[i]
      dogBoxes.push(
        <div>
          <DogBox
            dogName={dog.name}
            dogStatus={dog.status}
            dogImage={dog.photoPath}
          />
        </div>
      )
    }
    return dogBoxes
  }
}

class DogBox extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <img
          className="shelterDogImage card-img-right"
          src={'http://localhost:8080/img/' + this.props.dogImage}
          alt="dog"
        />
        <div className="card-body">
          <h3 class="dogBox dogName">{this.props.dogName}</h3>
          <div>Status: {this.props.dogStatus}</div>
        </div>
      </div>
    )
  }
}

export default ShelterIndex
