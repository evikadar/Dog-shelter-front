import React from 'react'
import './ShelterIndex.css'
import NavLink from "react-router-dom/es/NavLink";
import Pagination from 'react-js-pagination';

class ShelterIndex extends React.Component {
    DOGS_PER_PAGE = 3;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            activePage: 1,
            dogData: [],
            shelterId: props.match.params.id
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/shelter/${this.state.shelterId}/dogs`, {
            method: "get",
        })
            .then(response => response.json())
            .then((result) => this.setState({
                isLoaded: true,
                dogData: result
            }))
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <NavLink className="btn btn-dark m-3" to={`/shelter/${this.state.shelterId}/add-dog`}>Add new
                        dog</NavLink>
                </div>
                <div>
                    {this.renderDogCards()}
                </div>

                <div aria-label="Page navigation" className={"d-flex justify-content-center"}>
                    <Pagination
                        className={'pagination'}
                        itemClass='page-item page-link'
                        prevPageText='prev'
                        nextPageText='next'
                        firstPageText='first'
                        lastPageText='last'
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.DOGS_PER_PAGE}
                        totalItemsCount={this.state.dogData.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber})
    };

    renderDogCards() {
        return (
            <div className="container-fluid">
                {this.state.dogData.length > 0 ? (
                    this.renderAllDogCards()
                ) : (
                    <div>Upload your first dog!</div>
                )
                }
            </div>
        );
    }

    renderAllDogCards() {
        let activePage = this.state.activePage;
        let dogCards = [];
        let dogData = this.state.dogData.slice((activePage - 1) * this.DOGS_PER_PAGE, activePage * this.DOGS_PER_PAGE);

        for (let i = 0; i < dogData.length; i++) {
            let dog = dogData[i];
            dogCards.push(<div>
                <DogCard dogName={dog.name} dogStatus={dog.status}
                         dogImage={dog.photoPath} dogGender={dog.gender}
                         dogBreed={dog.breed} dogSize={dog.size} dogAge={dog.age}
                         isNeutered={dog.isNeutered} dogId={dog.id} shelterId={this.state.shelterId}/>
            </div>)
        }
        return dogCards;
    }
}

class DogCard extends React.Component {

    render() {
        return (
            <div className="card border-light mb-3">
                <div className="card-header">{this.props.dogName}</div>
                <div className="card-body">
                    <img className="shelterDogImage card-img-left"
                         src={this.props.dogImage ? `http://localhost:8080/image/${this.props.dogImage}` : "/dummyDogImage.jpg"}
                         alt="dog"/>
                    <div className="row">
                        <div className="col">
                            <h4 className="mt-1">Status</h4>
                            <div>
                                {this.props.dogStatus}
                            </div>
                            <h4 className="mt-1">Gender</h4>
                            <div>
                                {this.props.dogGender}
                            </div>
                            <h4 className="mt-1">Neutered</h4>
                            <div>
                                {this.props.isNeutered ? "Yes" : "No"}
                            </div>
                        </div>
                        <div className="col">
                            <h4 className="mt-1">Breed</h4>
                            <div>
                                {this.props.dogBreed}
                            </div>
                            <h4 className="mt-1">Size</h4>
                            <div>
                                {this.props.dogSize}
                            </div>
                            <h4 className="mt-1">Age</h4>
                            <div>
                                {this.props.dogAge}
                            </div>
                        </div>
                    </div>
                    <NavLink className="btn btn-dark m-3"
                             to={`/shelter/${this.props.shelterId}/dog/${this.props.dogId}`}>
                        Details
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default ShelterIndex;
