import React, {useState} from 'react';
import styled from 'styled-components'
import Select from "react-select";

const Wrapper = styled.div`
	padding: 10px;
`

const SelectWrapper = styled.div`
	display: inline-block;
	width: 200px;
`

const FilterPanel = props => {
    const [state, setState] = useState(
        {
            isNeutered: '',
            age: '',
            breed: '',
            gender: '',
            dogSize: '',
        }
    );

    const handleChange = value => {
        setState({isNeutered: value.label})
    };

    return (
        <Wrapper>

            <SelectWrapper>
                Neutered
                <Select isSearchable={false} options={[
                    {value: 'Yes', label: 'Yes'},
                    {value: 'No', label: 'No'}
                ]} onChange={handleChange}/>
            </SelectWrapper>

            <SelectWrapper>
                Age
                <Select isSearchable={false} options={[
                    {value: 'Puppy', label: 'Puppy'},
                    {value: 'Young', label: 'Young'},
                    {value: 'Adult', label: 'Adult'},
                    {value: 'Senior', label: 'Senior'}
                ]} onChange={handleChange}/>
            </SelectWrapper>

            <SelectWrapper>
                Size
                <Select isSearchable={false} options={[
                    {value: 'Extra small', label: 'Extra small'},
                    {value: 'Small', label: 'Small'},
                    {value: 'Medium', label: 'Medium'},
                    {value: 'Large', label: 'Large'},
                    {value: 'Extra large', label: 'Extra large'}
                ]} onChange={handleChange}/>
            </SelectWrapper>

            <SelectWrapper>
                Gender
                <Select isSearchable={false} options={[
                    {value: 'Male', label: 'Male'},
                    {value: 'Female', label: 'Female'}
                ]} onChange={handleChange}/>
            </SelectWrapper>

            <SelectWrapper>
                Breed
                <Select isSearchable={false} options={[
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
                ]} onChange={handleChange}/>
            </SelectWrapper>

        </Wrapper>
    )
};

export default FilterPanel