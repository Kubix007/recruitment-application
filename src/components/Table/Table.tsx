import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Toolbar from "../Toolbar";
import { IFetchedUsers } from "../../shared/types";
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

const Table: React.FC<TableProps> = ({ data, setIsOpen }) => {
  const [users, setUsers] = useState<IFetchedUsers[]>(data);
  const [sorted, setSorted] = useState<{ sorted: string; reversed: boolean }>({
    sorted: "id",
    reversed: false,
  });

  const sortById = () => {
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id;
      }
      return userB.id - userA.id;
    });
    setUsers(usersCopy);
    setSorted({ sorted: "id", reversed: !sorted.reversed });
  };

  const sortByBirthDate = () => {
    let usersCopy = [...users];
    usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
      if (sorted.reversed) {
        return userA.birth_date
          ? new Date(userA.birth_date).getTime() -
              new Date(userB.birth_date).getTime()
          : 1;
      }
      return userB.birth_date
        ? new Date(userB.birth_date).getTime() -
            new Date(userA.birth_date).getTime()
        : -1;
    });
    setUsers(usersCopy);
    setSorted({ sorted: "birth_date", reversed: !sorted.reversed });
  };

  const sortByEmail = () => {
    let usersCopy = [...users];
    usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
      if (sorted.reversed) {
        return userB.email ? userB.email.localeCompare(userA.email) : 1;
      }
      return userA.email ? userA.email.localeCompare(userB.email) : -1;
    });
    setUsers(usersCopy);
    setSorted({ sorted: "email", reversed: !sorted.reversed });
  };

  const sortByName = () => {
    let usersCopy = [...users];
    usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
      if (sorted.reversed) {
        return userB.name ? userB.name.localeCompare(userA.name) : 1;
      }
      return userA.name ? userA.name.localeCompare(userB.name) : -1;
    });
    setUsers(usersCopy);
    setSorted({ sorted: "name", reversed: !sorted.reversed });
  };

  const sortBySurname = () => {
    let usersCopy = [...users];
    usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
      if (sorted.reversed) {
        return userB.surname ? userB.surname.localeCompare(userA.surname) : 1;
      }
      return userA.surname ? userA.surname.localeCompare(userB.surname) : -1;
    });
    setUsers(usersCopy);
    setSorted({ sorted: "surname", reversed: !sorted.reversed });
  };

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
          <TableColumn1 onClick={sortById} className="col-1">
            Id
            {renderArrow()}
          </TableColumn1>
          <TableColumn2 onClick={sortByName} className="col-2">
            Imię
            {renderArrow()}
          </TableColumn2>
          <TableColumn3 onClick={sortBySurname} className="col-3">
            Nazwisko
            {renderArrow()}
          </TableColumn3>
          <TableColumn4 onClick={sortByEmail} className="col-4">
            Email
            {renderArrow()}
          </TableColumn4>
          <TableColumn5 onClick={sortByBirthDate} className="col-5">
            Data
            {renderArrow()}
          </TableColumn5>
        </TableHeader>
        {render()}
      </ResponsiveTable>
    </>
  );
};

export default Table;
