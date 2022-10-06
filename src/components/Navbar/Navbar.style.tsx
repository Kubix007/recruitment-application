import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 60px;
`;

export const NavbarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  font-family: FiraSans-Book;
`;

export const NavbarLi = styled.li`
  margin-left: 20px;
  line-height: 2.2;
  font-family: FiraSans-Book;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-family: FiraSans-Book;
`;

export const NavbarButton = styled.button`
  border: 1px solid #24399b;
  border-radius: 7px;
  opacity: 1;
  width: 100%;
  font-family: FiraSans-Book;
  background-color: #24399b;
  color: white;
  padding: 5%;
  &:hover {
    background-color: white;
    color: black;
  }
`;
