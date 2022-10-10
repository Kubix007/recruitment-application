import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media all and (max-width: 767px) {
     {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ToolbarSearchButton = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  opacity: 1;
  font-family: FiraSans-SemiBold;
  background-color: white;
  color: black;
  padding: 10px;
  width: 70%;
  font-size: 1rem;
  &:hover {
    background-color: #24399b;
    color: white;
  }
  @media all and (max-width: 767px) {
     {
      width: 100%;
    }
  }
`;

export const ToolbarSearchContainer = styled.div`
  margin: 1rem 0;
  width: 30%;
  display: flex;
  @media all and (max-width: 767px) {
     {
      flex-direction: row;
      justify-content: center;
      width: -webkit-fill-available;
    }
  }
`;

export const ToolbarSearchInput = styled.input`
  height: 100%;
  padding: 10px;
  font-size: 1rem;
  width: 180%;
  font-family: FiraSans-Light;
  outline: none;
  border: 0.25px solid #676767;
  border-radius: 12px;
  @media all and (max-width: 767px) {
     {
      width: 150%;
      font-size: 15px;
      align-self: center;
    }
  }
`;

export const ToolbarFilterContainer = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 767px) {
     {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const ToolbarFilterButton = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  font-family: FiraSans-SemiBold;
  background-color: white;
  color: black;
  padding: 10px;
  width: 120%;
  font-size: 1rem;
  margin: 1rem 0.5rem;

  &:hover {
    background-color: #24399b;
    color: white;
  }

  background-color: ${(props) =>
    props["name"] === props["id"] ? "#24399b" : "white"};
  color: ${(props) => (props["name"] === props["id"] ? "white" : "black")};
`;
