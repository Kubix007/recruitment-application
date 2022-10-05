import { useState } from "react";
import "./Table.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Toolbar from "../Toolbar";
import { Props } from "./types";
import { IFetchedUsers } from "../../shared/types";

function Table(data: Props) {
  const [users, setUsers] = useState(data.data);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

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
    usersCopy.sort((userA: IFetchedUsers, userB) => {
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
    usersCopy.sort((userA, userB) => {
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
    usersCopy.sort((userA, userB) => {
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
    usersCopy.sort((userA, userB) => {
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
        <li className="table-row">
          <div className="col col-1" data-label="Id">
            {user.id}
          </div>
          <div className="col col-2" data-label="Imię">
            {user.name}
          </div>
          <div className="col col-3" data-label="Nazwisko">
            {user.surname}
          </div>
          <div className="col col-4" data-label="Email">
            {user.email}
          </div>
          <div className="col col-5" data-label="Data">
            {user.birth_date}
          </div>
        </li>
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
      <Toolbar setUsers={setUsers} data={users} dataCopy={[...users]} />
      <ul className="responsive-table">
        <li className="table-header">
          <div onClick={sortById} className="col col-1">
            Id
            {renderArrow()}
          </div>
          <div onClick={sortByName} className="col col-2">
            Imię
            {renderArrow()}
          </div>
          <div onClick={sortBySurname} className="col col-3">
            Nazwisko
            {renderArrow()}
          </div>
          <div onClick={sortByEmail} className="col col-4">
            Email
            {renderArrow()}
          </div>
          <div onClick={sortByBirthDate} className="col col-5">
            Data
            {renderArrow()}
          </div>
        </li>
        {render()}
      </ul>
    </>
  );
}

export default Table;
