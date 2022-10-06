import styled from "styled-components";

export const ResponsiveTable = styled.ul`
  min-width: 0;
  & > .col-1 {
    flex-basis: 10%;
  }
  & > .col-2 {
    flex-basis: 100%;
  }
  & > .col-3 {
    flex-basis: 25%;
  }
  & > .col-4 {
    flex-basis: 25%;
  }
  & > .col-5 {
    flex-basis: 20%;
  }

  & > .table-row {
    background-color: #fff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    font-family: FiraSans-Light;
  }

  & > .table-header {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-family: FiraSans-Light;
  }

  & > li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  @media all and (max-width: 767px) {
    & > .table-header {
      display: none;
    }
    & > li {
      display: block;
    }
    & > .col {
      flex-basis: 100%;
    }
    & > .col {
      display: flex;
      padding: 10px 0;
    }
    & > .col:before {
      color: #6c7a89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }
`;

export const TableHeader = styled.li`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-family: FiraSans-Light;
`;

export const TableRow = styled.li`
  background-color: #fff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  font-family: FiraSans-Light;
`;

export const TableColumn1 = styled.div`
  flex-basis: 10%;
`;
export const TableColumn2 = styled.div`
  flex-basis: 40%;
`;
export const TableColumn3 = styled.div`
  flex-basis: 25%;
`;
export const TableColumn4 = styled.div`
  flex-basis: 25%;
`;
export const TableColumn5 = styled.div`
  flex-basis: 20%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const EditAccountButton = styled.button`
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
