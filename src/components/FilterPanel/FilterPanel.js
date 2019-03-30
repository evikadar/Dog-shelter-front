import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Select from "react-select";

const Wrapper = styled.div`
	padding: 30px 10px 50px 10px;
	text-align: center;
`;

const SelectWrapper = styled.div`
	display: inline-block;
	width: 200px;
	margin: 0px 30px;
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
                <label>Neutered</label>
                <Select isSearchable={false} isClearable={true} options={[
                    {value: true, label: 'Yes'},
                    {value: false, label: 'No'}
                ]} onChange={x => {
                    setState({...state, isNeutered: x ? x.value : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                <label>Age</label>
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'PUPPY', label: 'Puppy'},
                    {value: 'YOUNG', label: 'Young'},
                    {value: 'ADULT', label: 'Adult'},
                    {value: 'SENIOR', label: 'Senior'}
                ]} onChange={x => {
                    setState({...state, age: x ? x.value : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                <label>Size</label>
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'EXTRA_SMALL', label: 'Extra small'},
                    {value: 'SMALL', label: 'Small'},
                    {value: 'MEDIUM', label: 'Medium'},
                    {value: 'LARGE', label: 'Large'},
                    {value: 'EXTRA_LARGE', label: 'Extra large'}
                ]} onChange={x => {
                    setState({...state, dogSize: x ? x.value : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                <label>Gender</label>
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'MALE', label: 'Male'},
                    {value: 'FEMALE', label: 'Female'}
                ]} onChange={x => {
                    setState({...state, gender: x ? x.value : null});
                }}/>
            </SelectWrapper>

            <SelectWrapper>
                <label>Breed</label>
                <Select isSearchable={false} isClearable={true} options={[
                    {value: 'COLLIE', label: 'Collie'},
                    {value: 'HUSKY', label: 'Husky'},
                    {value: 'LABRADOR', label: 'Labrador'},
                    {value: 'RETRIEVER', label: 'Retriever'},
                    {value: 'MIXED', label: 'Mixed'},
                    {value: 'HOUND', label: 'Hound'},
                    {value: 'PUG', label: 'Pug'},
                    {value: 'CHIHUAHUA', label: 'Chihuahua'},
                    {value: 'BEAGLE', label: 'Beagle'},
                    {value: 'JACK_RUSSEL_TERRIER', label: 'Jack russel terrier'},
                    {value: 'GERMAN_SHEPHERD', label: 'German shepherd'},
                    {value: 'BORDER_COLLIE', label: 'Border collie'},
                    {value: 'REDBONE_COONHOUND', label: 'Redbone coonhound'},
                    {value: 'TERRIER', label: 'Terrier'}
                ]} onChange={x => {
                    setState({...state, breed: x ? x.value : null});
                }}/>
            </SelectWrapper>

        </Wrapper>
    )
};

export default FilterPanel