import * as React from "react";
import { useEffect, useState } from "react";
import {
  StyledUl,
  StyledLi,
  StyledAnchor,
  PaginationContainer,
  PaginationLabel,
  PaginationSelect,
  PaginationLabelInfo,
} from "./Pagination.style";
import ReactPaginate from "react-paginate";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { getUsers } from "../../features/users/userSlice";
import { IPageSettings } from "../../shared/types";

const perPageNumbers = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
];

const Pagination = ({
  usersPerPage,
  setUsersPerPage,
  totalUsers,
  data,
}: any) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const endOffset = itemOffset + usersPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalUsers / usersPerPage));
  }, [itemOffset, usersPerPage, data, totalUsers]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * usersPerPage) % totalUsers;
    setItemOffset(newOffset);
    const pageSettings: IPageSettings = {
      page: event.selected + 1,
      perPage: usersPerPage,
    };
    console.log(
      "Numer strony:",
      event.selected + 1,
      "Na stronie:",
      usersPerPage
    );
    dispatch(getUsers(pageSettings));
    console.log(pageCount);
  };

  const handleChange = (e: any) => {
    const pageSettings: IPageSettings = {
      page: e.target.value,
      perPage: usersPerPage,
    };
    dispatch(getUsers(pageSettings));
  };

  return (
    <PaginationContainer>
      <PaginationLabelInfo htmlFor="">W trakie rozbudowy</PaginationLabelInfo>
      <div>
        <PaginationLabel htmlFor="perPage">Na stronie:</PaginationLabel>
        <PaginationSelect
          name="perPage"
          id="perPage"
          onChange={(e) => setUsersPerPage(e.target.value)}
        >
          {perPageNumbers.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </PaginationSelect>
        <PaginationLabel htmlFor="perPage">Strona:</PaginationLabel>
        <PaginationSelect name="perPage" id="perPage" onChange={handleChange}>
          {perPageNumbers.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </PaginationSelect>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        containerClassName="pagination"
        pageLinkClassName="pageNumber"
        previousLinkClassName="pageNumber"
        nextClassName="nextpage"
        activeLinkClassName="active"
      />
    </PaginationContainer>
  );
};

export default Pagination;
