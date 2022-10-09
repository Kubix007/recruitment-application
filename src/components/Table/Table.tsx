import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Toolbar from "../Toolbar";
import { IFetchedUsers, ISortState } from "../../shared/types";
import { EditAccountButton, ButtonContainer } from "./Table.style";
import { TableProps } from "./types";
import {
  ResponsiveTable,
  TableHeader,
  TableRow,
  TableColumn1,
  TableColumn2,
  TableColumn3,
  TableColumn4,
  TableColumn5,
} from "./Table.style";
import Pagination from "../Pagination/Pagination";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import AvatarIcon from "../AvatarIcon";
import { setSorting } from "../../features/search/searchSlice";

let sortSettings: ISortState = {
  reversed: false,
  name: "",
  surname: "",
  birth_date: "",
  email: "",
};

const Table: React.FC<TableProps> = ({ data, setIsOpen, totalUsers }) => {
  const [users] = useState<IFetchedUsers[]>(data);
  const { pagination } = useSelector((state: RootState) => state.search);
  const { sort } = useSelector((state: RootState) => state.search);

  const [usersPerPage, setUsersPerPage] = useState(pagination.perPage);
  const [pageNumber, setPageNumber] = useState(pagination.page);
  const dispatch: AppDispatch = useDispatch();

  const sliceAvatarText = (name: string, surname: string) => {
    if (name === null) {
      name = "";
    }
    if (surname === null) {
      surname = "";
    }
    return `${name.slice(0, 1)}${surname.slice(0, 1)}`;
  };

  const sortByBirthDate = () => {
    if (sort.reversed) {
      sortSettings = {
        reversed: false,
        name: sort.name,
        surname: sort.surname,
        birth_date: "desc",
        email: sort.email,
      };
    } else {
      sortSettings = {
        reversed: true,
        name: sort.name,
        surname: sort.surname,
        birth_date: "asc",
        email: sort.email,
      };
    }
    dispatch(setSorting(sortSettings));
  };

  const sortByEmail = () => {
    if (sort.reversed) {
      sortSettings = {
        reversed: false,
        name: sort.name,
        surname: sort.surname,
        birth_date: sort.birth_date,
        email: "desc",
      };
    } else {
      sortSettings = {
        reversed: true,
        name: sort.name,
        surname: sort.surname,
        birth_date: sort.birth_date,
        email: "asc",
      };
    }

    dispatch(setSorting(sortSettings));
  };

  const sortByName = () => {
    if (sort.reversed) {
      sortSettings = {
        reversed: false,
        name: "desc",
        surname: sort.surname,
        birth_date: sort.birth_date,
        email: sort.email,
      };
    } else {
      sortSettings = {
        reversed: true,
        name: "asc",
        surname: sort.surname,
        birth_date: sort.birth_date,
        email: sort.email,
      };
    }

    dispatch(setSorting(sortSettings));
  };

  const sortBySurname = () => {
    if (sort.reversed) {
      sortSettings = {
        reversed: false,
        name: sort.name,
        surname: "desc",
        birth_date: sort.birth_date,
        email: sort.email,
      };
    } else {
      sortSettings = {
        reversed: true,
        name: sort.name,
        surname: "asc",
        birth_date: sort.birth_date,
        email: sort.email,
      };
    }

    dispatch(setSorting(sortSettings));
  };

  const render = () => {
    return users.map((user) => {
      return (
        <TableRow key={user.id}>
          <TableColumn1 className="col-1" data-label="Id">
            <AvatarIcon text={sliceAvatarText(user.name, user.surname)} />
          </TableColumn1>
          <TableColumn2 className="col-2" data-label="Imię">
            {user.name}
          </TableColumn2>
          <TableColumn3 className="col-3" data-label="Nazwisko">
            {user.surname}
          </TableColumn3>
          <TableColumn4 className="col-4" data-label="Email">
            {user.email}
          </TableColumn4>
          <TableColumn5 className="col-5" data-label="Data">
            {user.birth_date}
          </TableColumn5>
        </TableRow>
      );
    });
  };

  const renderArrow = () => {
    if (sort.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <>
      <Toolbar />
      <ButtonContainer>
        <EditAccountButton onClick={() => setIsOpen(true)}>
          Edytuj swoje konto
        </EditAccountButton>
      </ButtonContainer>
      <ResponsiveTable>
        <TableHeader className="table-header">
          <TableColumn1 className="col-1"></TableColumn1>
          <TableColumn2 onClick={() => sortByName()} className="col-2">
            Imię
            {renderArrow()}
          </TableColumn2>
          <TableColumn3 onClick={() => sortBySurname()} className="col-3">
            Nazwisko
            {renderArrow()}
          </TableColumn3>
          <TableColumn4 onClick={() => sortByEmail()} className="col-4">
            Email
            {renderArrow()}
          </TableColumn4>
          <TableColumn5 onClick={() => sortByBirthDate()} className="col-5">
            Data
            {renderArrow()}
          </TableColumn5>
        </TableHeader>
        {render()}
      </ResponsiveTable>
      <Pagination
        usersPerPage={usersPerPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setUsersPerPage={setUsersPerPage}
        totalUsers={totalUsers}
        data={users}
      />
    </>
  );
};

export default Table;
