import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;

  .formated-logo-first {
    color: ${({ color1 }) => {
      return color1;
    }};
  }
  .formated-logo-second {
    color: ${({ color2 }) => color2};
  }
`;

const FormatedLogo = ({ text1, text2, color1, color2, fontSize }) => {
  return (
    <Container color1={color1} color2={color2} fontSize={fontSize}>
      <span className="formated-logo-first">{text1}</span>
      <span className="formated-logo-second">{text2}</span>
    </Container>
  );
};

export default FormatedLogo;
