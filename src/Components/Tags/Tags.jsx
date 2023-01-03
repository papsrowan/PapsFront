import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 20px;
  padding: 7px 10px;
  font-size : 20px;
  width: fit-content;
  cursor: pointer;
  z-index: 5;
  font-weight:300;

  ${({ color1, color2, fontColor1, fontColor2, x, y }) => {
    if (x) {
      return `
        color : ${fontColor1};
        background-color: ${color1};
        transition : all ease 300ms;
        position : absolute;
        top : ${y};
        left : ${x};
        &:hover{
            background-color: ${color2};
            color : ${fontColor2};
        }
    `;
    }
    return `
        color : ${fontColor1};
        background-color: ${color1};
        transition : all ease 300ms;
        &:hover{
            background-color: ${color2};
            color : ${fontColor2};
        }
    `;
  }}
`;

const Tags = ({ color1, color2, fontColor1, fontColor2, text, x, y }) => {
  return (
    <Container color1={color1} color2={color2} fontColor1={fontColor1} fontColor2={fontColor2} x={x} y={y}>
      {text}
    </Container>
  );
};

export default Tags;
