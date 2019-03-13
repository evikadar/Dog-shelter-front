import React from 'react'

export default props => {
    const {dreamHome, personalityTrait, specialFeatures} = props.details.description
    return (

        <div style={props.style}>DogDetails
            <p>{dreamHome}</p>
            <p>{personalityTrait}</p>
            <p>{specialFeatures}</p>
        </div>
    )
}