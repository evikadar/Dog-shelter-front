import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Select from "react-select";

const Wrapper = styled.div`
	padding: 10px;
`;

const SelectWrapper = styled.div`
	display: inline-block;
	width: 200px;
`;

const FilterPanel = ({invokeDataRefresh: passToParent}) => {
    const [state, setState] = useState(
        {
            isNeutered: null,
            age: null,
            breed: null,
            gender: null,
            dogSize: null,
        }
    );

    useEffect(() => {
        fetch('http://localhost:8080/dogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(res => passToParent(res));

    }, [state]);


    return (
        <Wrapper>

            <SelectWrapper>
                Neutered
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'Yes', label: 'Yes'},
                    {value: 'No', label: 'No'}
                ]} onChange={value => {
                    setState({...state, isNeutered: value ? value.label === 'Yes' ? 'true' : 'false' : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                Age
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'Puppy', label: 'Puppy'},
                    {value: 'Young', label: 'Young'},
                    {value: 'Adult', label: 'Adult'},
                    {value: 'Senior', label: 'Senior'}
                ]} onChange={value => {
                    setState({...state, age: value ? value.label.toUpperCase() : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                Size
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'Extra small', label: 'Extra small'},
                    {value: 'Small', label: 'Small'},
                    {value: 'Medium', label: 'Medium'},
                    {value: 'Large', label: 'Large'},
                    {value: 'Extra large', label: 'Extra large'}
                ]} onChange={value => {
                    setState({...state, dogSize: value ? value.label.toUpperCase().replace(' ', '_') : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                Gender
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'Male', label: 'Male'},
                    {value: 'Female', label: 'Female'}
                ]} onChange={value => {
                    setState({...state, gender: value ? value.label.toUpperCase() : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                Breed
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'Collie', label: 'Collie'},
                    {value: 'Husky', label: 'Husky'},
                    {value: 'Labrador', label: 'Labrador'},
                    {value: 'Retriever', label: 'Retriever'},
                    {value: 'Mixed', label: 'Mixed'},
                    {value: 'Hound', label: 'Hound'},
                    {value: 'Pug', label: 'Pug'},
                    {value: 'Chihuahua', label: 'Chihuahua'},
                    {value: 'Beagle', label: 'Beagle'},
                    {value: 'Ack russel terrier', label: 'Ack russel terrier'},
                    {value: 'German shepherd', label: 'German shepherd'},
                    {value: 'Border collie', label: 'Border collie'},
                    {value: 'Redbone coonhound', label: 'Redbone coonhound'},
                    {value: 'Rterrier', label: 'Rterrier'}
                ]} onChange={value => {
                    setState({...state, breed: value ? value.label.toUpperCase().replace(' ', '_') : null});
                }}/>
            </SelectWrapper>

        </Wrapper>
    )
};

export default FilterPanel