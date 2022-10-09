import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ToolbarSearchButton = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  opacity: 1;
  font-family: FiraSans-SemiBold;
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 1rem;
  &:hover {
    background-color: #24399b;
    color: white;
  }
`;

export const ToolbarSearchContainer = styled.div`
  margin: 1rem 0;
  width: 30%;
  display: flex;
`;

export const ToolbarSearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: FiraSans-Light;
  outline: none;
  border: 0.25px solid #676767;
  border-radius: 12px;
`;

export const ToolbarFilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolbarFilterButton = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  opacity: 1;
  font-family: FiraSans-SemiBold;
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 1rem;
  margin: 1rem 1rem;

  &:hover {
    background-color: #24399b;
    color: white;
  }

  background-color: ${(props) =>
    props["name"] === props["id"] ? "#24399b" : "white"};
  color: ${(props) => (props["name"] === props["id"] ? "white" : "black")};
`;
