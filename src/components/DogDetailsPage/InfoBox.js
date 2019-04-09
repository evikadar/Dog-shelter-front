import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

const StyleWrapper = styled.div`
    padding: 10px;
    marginTop: 20px;
    fontSize: 25px;
`

export default props => {
    const {breed, age, gender, size, neutered, shelter} = props.details;
    const ERROR_MSG = 'no data';

    return (
        <StyleWrapper>
            <p>Breed: {breed ? breed : ERROR_MSG}</p>
            <p>Age: {age ? age : ERROR_MSG}</p>
            <p>Sex: {gender ? setSex(gender) : ERROR_MSG}</p>
            <p>Size: {size ? size : ERROR_MSG}</p>
            <p>Neutered: {neutered != undefined ? setNeutered(neutered) : ERROR_MSG}</p>
            <p>Shelter: {shelter ? <NavLink to={`/shelter/${shelter.id}`}>{shelter.name}</NavLink> : ERROR_MSG}</p>
        </StyleWrapper>
    );
}

const setSex = gender => {
    return gender === "FEMALE" ? "Female" : "Male"
};

const setNeutered = neutered => {
    return neutered ? 'Yes' : 'No'
};