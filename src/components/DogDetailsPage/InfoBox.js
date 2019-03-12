import React from 'react'

export default props => {
        const {breed, age, boy, size, neutered, shelter} = props.details
        const ERROR_MSG = 'no data'

        return (
            <div style={props.style}>
                    <p>Breed {breed ? breed : ERROR_MSG}</p>
                    <p>Age {age}</p>
                    <p>Isboy {boy ? boy : ERROR_MSG}</p>
                    <p>Size {size ? size : ERROR_MSG}</p>
                    <p>Is neutered: {neutered ? neutered : ERROR_MSG}</p>
                    <p>Shelter: {shelter ? shelter : ERROR_MSG}</p>
            </div>
        )
}