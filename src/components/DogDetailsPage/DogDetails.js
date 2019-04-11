import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import Description from './Description';
import styled from 'styled-components';

export default props => {
  const [details, setDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const ERROR_MSG = '500 server error';
  const ACTION_TITLE = 'Take me home!';

  useEffect(() => {
    fetch(`http://localhost:8080/dog/${props.match.params.id}`)
      .then(response => response.json())
      .then(json => {
        setDetails(json);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        ERROR_MSG
      ) : (
        <Main>
          <LeftSide>
            <InfoBox details={details} />
            <Description details={details} />
          </LeftSide>
          <RightSide>
            <img
              src={`http://localhost:8080/image/${details.photoPath}`}
              alt={'dog'}
            />
            <button>{ACTION_TITLE}</button>
          </RightSide>
        </Main>
      )}
    </div>
  );
};

const Main = styled.div`
  padding: 100px 130px 50px 130px;
`;

const LeftSide = styled.div`
  width: 550px;
  float: left;
  font-size: 25px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 5px;
  padding 5px 20px;
`;

const RightSide = styled.div`
  float: right;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  padding-bottom: 30px;

  img {
    height: 400px;
    width: 450px;
  }

  button {
    margin-top: 50px;
    display: block;
    padding: 20px;
    font-size: 30px;
    font-weight: 200;
    border-radius: 10px;
    color: white;
    width: 450px;
    background-color: #1fa8d8;
  }
`;
