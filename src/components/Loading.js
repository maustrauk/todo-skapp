import React from 'react';
import styled, { keyframes } from 'styled-components';

import loadSVG from '../assets/loading.svg';
import StyledImg from '../styles/styledImg';

const loadinImgSpin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const LoadingImg = styled(StyledImg)`
    animation: ${loadinImgSpin} infinite 10s linear;
`


const Loading = () => {
    return (<div>
        <LoadingImg src={loadSVG} alt="loading" />
    </div>)
}

export default Loading;