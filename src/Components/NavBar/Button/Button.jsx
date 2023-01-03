import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  padding: 8px;
  height: 40px;
  cursor: pointer;
  width: fit-content;
  font-weight: ${({ bold }) => bold && 700};
`;
const DarkContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: #000;
  opacity: 0;
  transition: all ease 300ms;
  &:hover {
    opacity: 0.2;
  }
`;
const Floating = styled.div`
  position: absolute;
  bottom: 3px;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  height: 5px;
  width: 60%;
  background-color: #ff5d00;
`;

const Button = ({ text, url }) => {
  const location = useLocation();
  const actualUrl = '..' + location.pathname;

  return (
    <Link to={url} className='nav-link'>
      <Container bold={url === actualUrl}>
        <DarkContainer />
        {text}
        {url === actualUrl && <Floating />}
      </Container>
    </Link>
  );
};

export default Button;
