import React from 'react'

export default props => {
        const {breed, age, gender, size, neutered, shelter} = props.details
        const ERROR_MSG = 'no data'

        return (
            <div style={props.style}>
                    <p>Breed: {breed ? breed : ERROR_MSG}</p>
                    <p>Age: {age ? age : ERROR_MSG}</p>
                    <p>Sex: {gender ? setSex(gender) : ERROR_MSG}</p>
                    <p>Size: {size ? size : ERROR_MSG}</p>
                    <p>Neutered: {neutered != undefined ? setNeutered(neutered) : ERROR_MSG}</p>
                    <p>Shelter: {shelter ? shelter.name : ERROR_MSG}</p>
            </div>
        )
}

const setSex = gender => {
    return gender === "FEMALE" ? "Female" : "Male"
}

const setNeutered = neutered => {
    return neutered ? 'Yes' : 'No'
}