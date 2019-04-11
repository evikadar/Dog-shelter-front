import React from 'react';
import styled from 'styled-components';

export default props => {
  const DEFAULT = 'no data';
  const { dreamHome, personalityTrait, specialFeatures } = props.details
    .description
    ? props.details.description
    : {
        dreamHome: DEFAULT,
        personalityTrait: DEFAULT,
        specialFeatures: DEFAULT
      };
  return props.details.description ? (
    <StyleWrapper>
      <MainTitle>Dog Details:</MainTitle>

      <label>Dream Home:</label>
      <div>{dreamHome}</div>

      <label>Personality Trait:</label>
      <div>{personalityTrait}</div>

      <label>Special Features: </label>
      <div>{specialFeatures}</div>
    </StyleWrapper>
  ) : (
    'details'
  );
};

const StyleWrapper = styled.div`
  padding: 10px;
  margin-top: 50px;

  div {
      font-size: 16px;
      padding: 0px 5px 10px 0px;
      font-weight: 300;
      margin-bottom: 10px
  }

  label {
      font-weight: 400;
  }
`;

const MainTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
