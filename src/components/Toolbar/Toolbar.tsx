import { Props } from "./types";
import {
  ToolbarContainer,
  ToolbarSearchButton,
  ToolbarSearchContainer,
  ToolbarSearchInput,
} from "./Toolbar.style";
import { IFetchedUsers } from "../../shared/types";
import { ChangeEvent, useState } from "react";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Toolbar: React.FC<Props> = ({ setUsers, data }) => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [temp, setTemp] = useState<IFetchedUsers[]>();
  const { users } = useSelector((state: RootState) => state.users);

  const search = (event: ChangeEvent) => {
    if ((event.target as HTMLInputElement).value === "") {
      setUsers(users.data);
    }
    const matchedUsers = data.filter((user: IFetchedUsers) => {
      return `${user.name} ${user.surname}`
        .toLowerCase()
        .includes((event.target as HTMLInputElement).value.toLowerCase());
    });
    setSearchPhrase((event.target as HTMLInputElement).value);
    setTemp(matchedUsers);
  };

  return (
    <ToolbarContainer>
      <ToolbarSearchContainer>
        <ToolbarSearchInput
          type="text"
          placeholder="Filtruj po imię, nazwisko"
          value={searchPhrase}
          onChange={search}
        />
      </ToolbarSearchContainer>
      <ToolbarSearchButton onClick={() => setUsers(temp)}>
        Szukaj
      </ToolbarSearchButton>
    </ToolbarContainer>
  );
};

export default Toolbar;
