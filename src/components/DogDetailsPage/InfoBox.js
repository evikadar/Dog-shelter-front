import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default props => {
  const { name, breed, age, gender, size, neutered, shelter } = props.details;
  const ERROR_MSG = 'no data';

  const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <StyleWrapper>
      <DogName>{name}</DogName>

      <BreedGenderAge>
        <span>{breed ? capitalize(breed.toLowerCase()) : ERROR_MSG}</span>
        <Separator>•</Separator>
        <span>{gender ? setSex(gender) : ERROR_MSG}</span>
        <Separator>•</Separator>
        <span>{age != null || age != undefined ? age : ERROR_MSG}</span>
      </BreedGenderAge>

      <Title>
        Size: <span>{size ? capitalize(size.toLowerCase()) : ERROR_MSG}</span>
      </Title>
      <Title>
        Neutered:{' '}
        <span>{neutered != undefined ? setNeutered(neutered) : ERROR_MSG}</span>
      </Title>
      <Title>
        Shelter: {' '}
        <span>
          {shelter ? (
            <NavLink to={`/shelter/${shelter.id}`}>{shelter.name}</NavLink>
          ) : (
            ERROR_MSG
          )}
        </span>
      </Title>
    </StyleWrapper>
  );
};

const setSex = gender => {
  return gender === 'FEMALE' ? 'Female' : 'Male';
};

const setNeutered = neutered => {
  return neutered ? 'Yes' : 'No';
};

const StyleWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  font-size: 25px;
  padding-top: 0px;

  p {
    margin: 5px 0px;
  }
`;
const DogName = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const Separator = styled.span`
  margin: 30px;
`;

const BreedGenderAge = styled.p`
  span {
    font-size 20px;
  }
`;

const Title = styled.p`
  span {
    font-size 20px;
  }
`;
