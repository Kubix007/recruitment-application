import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ToolbarSearchButton = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  opacity: 1;
  font-family: FiraSans-SemiBold;
  background-color: #24399b;
  color: white;
  height: 10%;
  margin: 1rem 1rem;
  padding: 10px;
  font-size: 1rem;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ToolbarSearchContainer = styled.div`
  margin: 1rem 0;
  width: 25%;
`;

export const ToolbarSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: FiraSans-Light;
  outline: none;
  border: 0.25px solid #676767;
  border-radius: 12px;
`;
