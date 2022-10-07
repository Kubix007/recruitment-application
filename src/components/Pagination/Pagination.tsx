import * as React from "react";
import { useEffect, useState } from "react";
import {
  PaginationContainer,
  PaginationLabel,
  PaginationSelect,
  PaginationLabelInfo,
} from "./Pagination.style";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  changePerPage,
  changePage,
} from "../../features/pagination/paginationSlice";
import { IPageSettings } from "../../shared/types";

const Pagination = ({
  usersPerPage,
  setUsersPerPage,
  pageNumber,
  setPageNumber,
  totalUsers,
  data,
}: any) => {
  const [pageCount, setPageCount] = useState<number>(0);
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

  let pagesNumber: number[] = [];
  for (let i: number = 1; i <= pageCount; i++) {
    pagesNumber.push(i);
  }

  let perPageNumber: number[] = [];
  for (let i: number = 1; i <= 5; i++) {
    perPageNumber.push(i);
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
          {perPageNumber.map((option) => {
            if (option === pagination.perPage) {
              return (
                <option selected={true} value={option}>
                  {option}
                </option>
              );
            }
            return <option value={option}>{option}</option>;
          })}
        </PaginationSelect>
        <PaginationLabel htmlFor="page">Strona:</PaginationLabel>
        <PaginationSelect name="page" id="page" onChange={handleChangePage}>
          {pagesNumber.map((option) => {
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
