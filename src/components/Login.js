import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {

    const {handleMySkyLogin} = props;

    return (<div>
        <button onClick={handleMySkyLogin}>Login</button>
    </div>)
}

Login.propTypes ={
    handleMySkyLogin: PropTypes.func.isRequired,
};

export default Login;