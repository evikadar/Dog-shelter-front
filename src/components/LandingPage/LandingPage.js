import React from 'react'
import {NavLink} from 'react-router-dom'
import './landingstyle.css'

class LandingPage extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.getDogs()
  }

  render() {
    return (
      <div>
        <div id="background">
          <div id="titles">
            <h1 id="maintitle">Dog Shelter Project</h1>
            <div id="subtitle">Find your dream dog!</div>
            <button id="all-dogs-main-page-button">
              <NavLink exact activeClassName="active" to="/dogs">
                Looking for a home
              </NavLink>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <h2 id="example-dogs-text">Recently added:</h2>
          </div>
          <div className="card-columns">
            {this.makeRandomDogs(0)}
            {this.makeRandomDogs(1)}
            {this.makeRandomDogs(2)}
          </div>
        </div>
      </div>
    )
  }

  makeRandomDogs(dogNumber) {
    return (
      <div className="DogList">
        {this.state.data.length > 0 ? (
          <div className="card w-100">
            <img
              className="example-dog-img"
              src={
                'http://localhost:8080/image/' +
                this.state.data[dogNumber].photoPath
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title">{this.state.data[dogNumber].name}</h4>
              <p className="card-text">Age: {this.state.data[dogNumber].age}</p>
              
              <NavLink
                exact
                to={`/dog/${this.state.data[dogNumber].id}`}
                className="btn btn-primary"
              >
                See more
              </NavLink>
            </div>
          </div>
        ) : (
          <div>Loading dog ...</div>
        )}
      </div>
    )
  }

  getDogs() {
    fetch('http://localhost:8080/dogs')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json })
      })
  }
}

export default LandingPage
