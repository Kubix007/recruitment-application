import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Toolbar from "../Toolbar";
import { IFetchedUsers, ISorted } from "../../shared/types";
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
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import tableFunctions from "./sortingFunctions/TableFunctions";

const Table: React.FC<TableProps> = ({ data, setIsOpen, totalUsers }) => {
  const [users, setUsers] = useState<IFetchedUsers[]>(data);
  const { pagination } = useSelector((state: RootState) => state.pagination);

  const [usersPerPage, setUsersPerPage] = useState(pagination.perPage);
  const [pageNumber, setPageNumber] = useState(pagination.page);

  const [sorted, setSorted] = useState<ISorted>({
    sorted: "id",
    reversed: false,
  });

  const render = () => {
    return users.map((user) => {
      return (
        <TableRow key={user.id}>
          <TableColumn1 className="col-1" data-label="Id">
            {user.id}
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
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <>
      <Toolbar setUsers={setUsers} data={users} />
      <ButtonContainer>
        <EditAccountButton onClick={() => setIsOpen(true)}>
          Edytuj swoje konto
        </EditAccountButton>
      </ButtonContainer>
      <ResponsiveTable>
        <TableHeader className="table-header">
          <TableColumn1
            onClick={() =>
              tableFunctions.sortById(users, setUsers, setSorted, sorted)
            }
            className="col-1"
          >
            Id
            {renderArrow()}
          </TableColumn1>
          <TableColumn2
            onClick={() =>
              tableFunctions.sortByName(users, setUsers, setSorted, sorted)
            }
            className="col-2"
          >
            Imię
            {renderArrow()}
          </TableColumn2>
          <TableColumn3
            onClick={() =>
              tableFunctions.sortBySurname(users, setUsers, setSorted, sorted)
            }
            className="col-3"
          >
            Nazwisko
            {renderArrow()}
          </TableColumn3>
          <TableColumn4
            onClick={() =>
              tableFunctions.sortByEmail(users, setUsers, setSorted, sorted)
            }
            className="col-4"
          >
            Email
            {renderArrow()}
          </TableColumn4>
          <TableColumn5
            onClick={() =>
              tableFunctions.sortByBirthDate(users, setUsers, setSorted, sorted)
            }
            className="col-5"
          >
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
