import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Style from './styles'

const Wrapper = styled.main`
    ${Style.main}
`


const Navigation = () => {
    return (
        <Wrapper>
            <img height={50} width={50}  src={`https://banner2.kisspng.com/20180630/ias/kisspng-arctic-wolf-dog-logo-bucky-barnes-drawing-5b37c2d6245b67.1298494215303810141489.jpg`}/>
            <ul>
                <li>
                    <NavLink exact activeClassName='active' to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to='/dogs' >Dogs</NavLink>
                </li>
            </ul>
        </Wrapper>
    );
}

export default Navigation