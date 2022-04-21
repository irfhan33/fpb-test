import React from "react";
import styled from "styled-components";

const Button = ({ children, textColor, primary, bordernone }) => {
  return (
    <Container textColor={textColor} primary={primary} bordernone={bordernone}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid black;
  border: ${({ bordernone }) => bordernone && "none"};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 800;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  color: ${({ textColor }) => textColor};
  background-color: ${({ primary }) => primary && "rgba(49, 53, 59, 0.96)"};
`;
