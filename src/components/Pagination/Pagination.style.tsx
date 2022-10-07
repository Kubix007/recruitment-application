import styled from "styled-components";

export const PaginationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1%;
  & > .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    font-size: 18px;
    font-family: FiraSans-SemiBold;
    gap: 5px;
    & .pageNumber {
      cursor: pointer;
      padding: 8px 15px;
      &.pageNumber:hover {
        background-color: black;
        border-radius: 20px;
        color: white;
      }
    }
    & .active {
      background-color: black;
      border-radius: 20px;
      color: white;
    }
  }
`;
export const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2%;
`;

export const StyledLi = styled.li``;

export const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: FiraSans-SemiBold;
`;

export const PaginationLabel = styled.label`
  font-family: FiraSans-Light;
`;

export const PaginationLabelInfo = styled.label`
  font-family: FiraSans-Light;
  color: red;
`;

export const PaginationSelect = styled.select`
  font-family: FiraSans-Light;
  margin-bottom: 10px;
`;
