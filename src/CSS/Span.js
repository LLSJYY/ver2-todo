import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: block;
  background-color= black;
`;

const Span = ({children,...rest}) => {
  return <StyledSpan {...rest}>{children}</StyledSpan>;

}

export default Span;