import { SetState } from "immer/dist/internal";
import { Dispatch } from "react";
import { IFetchedUsers, ISorted } from "../../../shared/types";

const sortById = (
  users: IFetchedUsers[],
  setUsers: (value: IFetchedUsers[]) => void,
  setSorted: (value: ISorted) => void,
  sorted: ISorted
) => {
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

const sortByBirthDate = (
  users: IFetchedUsers[],
  setUsers: (value: IFetchedUsers[]) => void,
  setSorted: (value: ISorted) => void,
  sorted: ISorted
) => {
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
  console.log("Birth_date");
};

const sortByEmail = (
  users: IFetchedUsers[],
  setUsers: (value: IFetchedUsers[]) => void,
  setSorted: (value: ISorted) => void,
  sorted: ISorted
) => {
  let usersCopy = [...users];
  usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
    if (sorted.reversed) {
      return userB.email ? userB.email.localeCompare(userA.email) : 1;
    }
    return userA.email ? userA.email.localeCompare(userB.email) : -1;
  });
  setUsers(usersCopy);
  setSorted({ sorted: "email", reversed: !sorted.reversed });
  console.log("Email");
};

const sortByName = (
  users: IFetchedUsers[],
  setUsers: (value: IFetchedUsers[]) => void,
  setSorted: (value: ISorted) => void,
  sorted: ISorted
) => {
  let usersCopy = [...users];
  usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
    if (sorted.reversed) {
      return userB.name ? userB.name.localeCompare(userA.name) : 1;
    }
    return userA.name ? userA.name.localeCompare(userB.name) : -1;
  });
  setUsers(usersCopy);
  setSorted({ sorted: "name", reversed: !sorted.reversed });
  console.log("Name");
};

const sortBySurname = (
  users: IFetchedUsers[],
  setUsers: (value: IFetchedUsers[]) => void,
  setSorted: (value: ISorted) => void,
  sorted: ISorted
) => {
  let usersCopy = [...users];
  usersCopy.sort((userA: IFetchedUsers, userB: IFetchedUsers) => {
    if (sorted.reversed) {
      return userB.surname ? userB.surname.localeCompare(userA.surname) : 1;
    }
    return userA.surname ? userA.surname.localeCompare(userB.surname) : -1;
  });
  setUsers(usersCopy);
  setSorted({ sorted: "surname", reversed: !sorted.reversed });
  console.log("Surname");
};

const tableFunctions = {
  sortByBirthDate,
  sortByEmail,
  sortByName,
  sortBySurname,
  sortById,
};

export default tableFunctions;
