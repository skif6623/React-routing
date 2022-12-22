import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  color: black;
  font-size: 20px;
  background-color: tomato;
  text-decoration: none;
  padding: 10px 15px;

  &.active {
    background-color: red;
    color: white;
  }

  :hover:not(.active),
  :focus:not(.active) {
    background-color: red;
    color: white;
  }
`;
