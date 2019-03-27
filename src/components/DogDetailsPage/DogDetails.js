import React, { useState, useEffect } from 'react'
import InfoBox from './InfoBox'
import Description from './Description'
import {
  mainContainer,
  infoBox,
  description,
  leftSide,
  rightSide,
  btn
} from './styles'

export default props => {
  const [details, setDetails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const RIGHT_SIDE_WIDTH = 450
  const LEFT_SIDE_WIDTH = 400
  const ERROR_MSG = '500 server error'
  const ACTION_TITLE = 'Take me home!'

  useEffect(() => {
    fetch(`http://localhost:8080/dog/${props.match.params.id}`)
      .then(response => response.json())
      .then(json => {
        setDetails(json)
        setIsLoaded(true)
      })
  }, [])

  return (
    <>
      {!isLoaded ? (
        ERROR_MSG
      ) : (
        <div style={mainContainer}>
          <div style={leftSide(LEFT_SIDE_WIDTH)}>
            <div style={{ paddingLeft: 10 }}>{details.name}</div>
            <InfoBox style={infoBox} details={details} />
            <Description style={description} details={details} />
          </div>
          <div style={rightSide}>
            <img
              src={`http://localhost:8080/img/${details.photoPath}`}
              height="400"
              width={RIGHT_SIDE_WIDTH}
              alt={'dog'}
            />
            <button style={btn(RIGHT_SIDE_WIDTH)}>{ACTION_TITLE}</button>
          </div>
        </div>
      )}
    </>
  )
}
