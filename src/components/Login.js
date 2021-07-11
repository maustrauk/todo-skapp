import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledButton from '../styles/styledButton';
import StyledA from '../styles/styledA';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    @media only screen and (max-width: 900px) {
        font-size: 2rem;
    }
`;

const LoginLink = styled(StyledA)`
    background-color: #FFEAA7;
    font-size: 50%;
    margin-top: 10%;
`;

const LoginButton = styled(StyledButton)`
    margin-top: 20%;
    margin-left: 25%;
    margin-right: 25%;
    font-size: 100%;
    border: 5px solid hsl(198, 1%, 29%);
`;

const Login = (props) => {

    const {handleMySkyLogin} = props;

    return (<StyledLogin>
        <LoginButton onClick={handleMySkyLogin}>Login to Todo-Skapp</LoginButton>
        <LoginLink href="https://maustrauk.github.io/portfolio/">Made by Iaroslav Mokroguz</LoginLink>
    </StyledLogin>)
}

Login.propTypes ={
    handleMySkyLogin: PropTypes.func.isRequired,
};

export default Login;