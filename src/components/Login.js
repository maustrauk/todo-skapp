import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledButton from '../styles/styledButton';

const LoginButton = styled(StyledButton)`
    margin-top: 40vh;
    padding: 40px 60px;
    font-size: 4rem;
    border: 5px solid hsl(198, 1%, 29%);
`;

const Login = (props) => {

    const {handleMySkyLogin} = props;

    return (<div>
        <LoginButton onClick={handleMySkyLogin}>Login</LoginButton>
    </div>)
}

Login.propTypes ={
    handleMySkyLogin: PropTypes.func.isRequired,
};

export default Login;