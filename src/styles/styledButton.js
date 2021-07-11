import styled from 'styled-components';

const StyledButton = styled.button`
    margin-top: 30px;
    border: 3px solid hsl(198, 1%, 29%);
    border-radius: 8px;
    padding: 10px 15px;
    font-family: "Architects Daughter", sans-serif;
    font-size: 0.9rem;
    &:hover {
        background-color: gray;
    }
`;

export default StyledButton;