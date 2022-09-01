import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
 display: block;
 background-color:black;
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;