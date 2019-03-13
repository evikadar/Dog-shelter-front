import React from 'react'

export default props => {
        const {breed, age, boy, size, neutered, shelter} = props.details
        const ERROR_MSG = 'no data'

        return (
            <div style={props.style}>
                    <p>Breed: {breed ? breed : ERROR_MSG}</p>
                    <p>Age: {age ? age : ERROR_MSG}</p>
                    <p>Sex: {boy ? setSex(boy) : ERROR_MSG}</p>
                    <p>Size: {size ? size : ERROR_MSG}</p>
                    <p>Neutered: {neutered != undefined ? setNeutered(neutered) : ERROR_MSG}</p>
                    <p>Shelter: {shelter ? shelter.name : ERROR_MSG}</p>
            </div>
        )
}

const setSex = isBoy => {
    return isBoy ? 'Boy' : "Girl"
}

const setNeutered = neutered => {
    return neutered ? 'Yes' : 'No'
}