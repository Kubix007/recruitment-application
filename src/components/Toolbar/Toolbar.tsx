import {
  ToolbarContainer,
  ToolbarSearchButton,
  ToolbarSearchContainer,
  ToolbarSearchInput,
  ToolbarFilterContainer,
  ToolbarFilterButton,
} from "./Toolbar.style";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/search/searchSlice";

const Toolbar: React.FC = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const searchSettings = useSelector((state: RootState) => state.search);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setSearchPhrase(searchSettings.search);
  }, [searchSettings.search]);

  const handleClick = () => {
    dispatch(setSearch(searchPhrase));
  };

  return (
    <ToolbarContainer>
      <ToolbarSearchContainer>
        <ToolbarSearchInput
          type="text"
          placeholder="Filtruj po imię, nazwisko"
          value={searchPhrase}
          onChange={(event) => setSearchPhrase(event.target.value)}
        />
        <ToolbarSearchButton onClick={handleClick}>Szukaj</ToolbarSearchButton>
      </ToolbarSearchContainer>
      <ToolbarFilterContainer>
        <ToolbarFilterButton>Wszyscy</ToolbarFilterButton>
        <ToolbarFilterButton>Aktywni</ToolbarFilterButton>
        <ToolbarFilterButton>Nieaktywni</ToolbarFilterButton>
      </ToolbarFilterContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
