import React from 'react'

export default props => {
    const DEFAULT = 'no data'
    const {dreamHome, personalityTrait, specialFeatures} = props.details.description
        ? props.details.description
        : {dreamHome: DEFAULT, personalityTrait: DEFAULT, specialFeatures: DEFAULT}
    return (

        props.details.description ? (
        <div style={props.style}>DogDetails
            <p>{dreamHome}</p>
            <p>{personalityTrait}</p>
            <p>{specialFeatures}</p>
        </div>
        )
            : 'details'
    )
}