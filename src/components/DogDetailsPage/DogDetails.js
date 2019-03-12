import React, {useState, useEffect} from 'react'
import InfoBox from './InfoBox'
import Description from './Description'
import { container, infoBox, description, leftSide, rightSide, btn} from './styles'

export default () => {
    const [details, setDetails] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const RIGHT_SIDE_WIDTH = 450
    const LEFT_SIDE_WIDTH = 400

    useEffect(() => {
        fetch(`http://localhost:8080/dogs`)
            .then(response => response.json())
            .then(json => {
                setDetails(json);
                setIsLoaded(true)
            })
    }, [])

    return (
        <>
            {!isLoaded
                ? ''
                :
                <div style={container}>
                    <div style={leftSide(LEFT_SIDE_WIDTH)}>
                        <div>{details[0].name}</div>
                        <InfoBox style={infoBox} details={details[0]}/>
                        <Description style={description} details={details[0]}/>
                    </div>
                    <div style={rightSide}>
                        <img src={`http://localhost:8080/imgs/${details[0].photoPath}`} height="400" width={RIGHT_SIDE_WIDTH} alt={"dog"}/>
                        <button style={btn(RIGHT_SIDE_WIDTH)}>Action</button>
                    </div>
                </div>
            }
        </>
    )
}