import React, { useState, useEffect } from 'react'
import InfoBox from './InfoBox'
import Description from './Description'
import styled from 'styled-components'

const Main = styled.div`
  padding: 100px 150px 50px 150px;
`

const LeftSide = styled.div`
    width: 400px;
    float: left;
    font-size: 25px;
    margin-bottom: 100px;
`

const RightSide = styled.div`
  float: right;

  img {
    height: 400px;
    width: 450px;
  }

  button {
    margin-top: 20px;
    display: block;
    padding: 20px;
    font-size: 50px;
    width: 450px;
  }
`

export default props => {
    const [details, setDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const RIGHT_SIDE_WIDTH = 450;
    const ERROR_MSG = '500 server error';
    const ACTION_TITLE = 'Take me home!';

    useEffect(() => {

        fetch(`http://localhost:8080/dog/${props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                setDetails(json);
                setIsLoaded(true)
            })

    }, []);

  return (
    <div>
      {!isLoaded ? (
        ERROR_MSG
      ) : (
        <Main>
          <LeftSide>
            <div style={{ paddingLeft: 10 }}>{details.name}</div>
            <InfoBox details={details} />
            <Description details={details} />
          </LeftSide>
          <RightSide>
            <img
              src={`http://localhost:8080/${details.photoPath}`}
              alt={'dog'}
            />
            <button>{ACTION_TITLE}</button>
          </RightSide>
        </Main>
      )}
    </div>
  )
}