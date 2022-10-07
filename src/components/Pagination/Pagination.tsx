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
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/userSlice";
import {
  changePerPage,
  changePage,
} from "../../features/pagination/paginationSlice";
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
  pageNumber,
  setPageNumber,
  totalUsers,
  data,
}: any) => {
  const [pageCount, setPageCount] = useState(0);
  const { pagination } = useSelector((state: RootState) => state.pagination);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setPageCount(Math.ceil(totalUsers / usersPerPage));
  }, [usersPerPage, data, totalUsers]);

  const handleChangePage = (e: any) => {
    const pageSettings: IPageSettings = {
      page: e.target.value,
      perPage: usersPerPage,
    };
    console.log(pageSettings);
    setPageNumber(e.target.value);
    dispatch(changePage(e.target.value * 1));
  };

  const handleChangePerPage = (e: any) => {
    const pageSettings: IPageSettings = {
      page: pageNumber,
      perPage: e.target.value,
    };
    console.log(pageSettings);
    setUsersPerPage(e.target.value);
    dispatch(changePerPage(e.target.value * 1));
  };

  let totalPages: number[] = [];
  for (let i = 1; i <= pageCount; i++) {
    totalPages.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationLabelInfo>W trakie rozbudowy</PaginationLabelInfo>
      <div>
        <PaginationLabel htmlFor="perPage">Na stronie:</PaginationLabel>
        <PaginationSelect
          name="perPage"
          id="perPage"
          onChange={handleChangePerPage}
        >
          {perPageNumbers.map((option) => {
            if (option.value === pagination.perPage) {
              return (
                <option selected={true} value={option.value}>
                  {option.label}
                </option>
              );
            }
            return <option value={option.value}>{option.label}</option>;
          })}
        </PaginationSelect>
        <PaginationLabel htmlFor="page">Strona:</PaginationLabel>
        <PaginationSelect name="page" id="page" onChange={handleChangePage}>
          {totalPages.map((option) => {
            if (option * 1 === pagination.page) {
              return (
                <option selected={true} value={option}>
                  {option}
                </option>
              );
            }
            return <option value={option}>{option}</option>;
          })}
        </PaginationSelect>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
