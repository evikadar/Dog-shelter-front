import {NavLink} from "react-router-dom";
import FilterPanel from "./FilterPanel/FilterPanel";
import React from "react";
import Pagination from 'react-js-pagination';

class DogList extends React.Component {
    DOGS_PER_PAGE = 3;

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activePage: 1
        };
        this.refreshDogCards = this.refreshDogCards.bind(this);
    }

    refreshDogCards(dogs) {
        this.setState({data: dogs});
        this.makeManyCards();
    };

    render() {
        let dogs = this.state.data;
        return (
            <div>
                <FilterPanel invokeDataRefresh={this.refreshDogCards}/>
                <div className="card-columns">
                    {this.makeManyCards()}
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
                        totalItemsCount={dogs.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber})
    };


    makeManyCards() {
        let activeNumber = this.state.activePage;
        let dogs = this.state.data.slice((activeNumber - 1) * this.DOGS_PER_PAGE, activeNumber * this.DOGS_PER_PAGE);
        let actualDogs = [];

        try {
            if (dogs[0].name) {

                for (let i = 0; i < dogs.length; i++) {
                    actualDogs.push(
                        <div>
                            <span className='oneDog'
                                  key={i}>{this.makeACard(dogs[i].name, dogs[i].age, dogs[i].breed, dogs[i].photoPath, dogs[i].id)}</span>
                        </div>
                    )
                }
            }
        } catch (e) {
            console.log(e);
        }
        return actualDogs;
    }

    makeACard(dogName, dogAge, dogBreed, dogPhoto, dogId) {
        return (
            <div className="DogList">
                <div className="card w-100">
                    <img
                        className="card-img-top"
                        src={'http://localhost:8080/image/' + dogPhoto}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h4 className="card-title">{dogName}</h4>
                        <p className="card-text">Age: {dogAge}</p>
                        <p className="card-text">Breed: {dogBreed}</p>
                        <NavLink to={`/dog/${dogId}`} className="btn btn-primary">
                            See more
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default DogList;
