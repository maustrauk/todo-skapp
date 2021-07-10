import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../assets/skynet_logo.svg';
import StyledImg from '../styles/styledImg';

const loadinImgSpin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const LoadingImg = styled(StyledImg)`
    animation: ${loadinImgSpin} infinite 20s linear;
`


const Loading = () => {
    return (<div>
        <p>Loading...</p>
        <LoadingImg src={logo} alt="logo" />
    </div>)
}

export default Loading;