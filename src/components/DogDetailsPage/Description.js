import React from 'react'

export default props => {
    console.log(props)
    const DEFAULT = 'no data'
    const {dreamHome, personalityTrait, specialFeatures} = props.details.description
        ? props.details.description
        : {dreamHome: DEFAULT, personalityTrait: DEFAULT, specialFeatures: DEFAULT}
    return (

        props.details.description ? (
        <div style={props.style}>DogDetails
            <label>Dream Home:</label>
            <p>{dreamHome}</p>

            <label>Personality Trait:</label>
            <p>{personalityTrait}</p>

            <label>Special Features: </label>
            <p>{specialFeatures}</p>
        </div>
        )
            : 'details'
    )
}