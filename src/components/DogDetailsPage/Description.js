import React from 'react'
import styled from 'styled-components'

const StyleWrapper = styled.div`
    padding: 10px;
    margin-top: 50px;
`

export default props => {
    const DEFAULT = 'no data'
    const {dreamHome, personalityTrait, specialFeatures} = props.details.description
        ? props.details.description
        : {dreamHome: DEFAULT, personalityTrait: DEFAULT, specialFeatures: DEFAULT}
    return (

        props.details.description ? (
        <StyleWrapper>DogDetails
            <label>Dream Home:</label>
            <p>{dreamHome}</p>

            <label>Personality Trait:</label>
            <p>{personalityTrait}</p>

            <label>Special Features: </label>
            <p>{specialFeatures}</p>
        </StyleWrapper>
        )
            : 'details'
    )
}