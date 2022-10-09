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
import { setSearch, setIsActivated } from "../../features/search/searchSlice";

const Toolbar: React.FC = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const searchSettings = useSelector((state: RootState) => state.search);
  const [isSelected, setIsSelected] = useState({
    all: true,
    active: false,
    inactive: false,
  });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setSearchPhrase(searchSettings.search);
  }, [searchSettings.search]);

  const handleSearchButton = () => {
    dispatch(setSearch(searchPhrase));
  };

  const handleFilterButton = (buttonName: string) => {
    if (buttonName === "all") {
      setIsSelected({
        all: true,
        active: false,
        inactive: false,
      });
      dispatch(setIsActivated("ACTIVE%2CINACTIVE"));
    } else if (buttonName === "active") {
      setIsSelected({
        all: false,
        active: true,
        inactive: false,
      });
      dispatch(setIsActivated("ACTIVE"));
    } else if (buttonName === "inactive") {
      setIsSelected({
        all: false,
        active: false,
        inactive: true,
      });
      dispatch(setIsActivated("INACTIVE"));
    }
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
        <ToolbarSearchButton onClick={handleSearchButton}>
          Szukaj
        </ToolbarSearchButton>
      </ToolbarSearchContainer>
      <ToolbarFilterContainer>
        <ToolbarFilterButton
          onClick={() => handleFilterButton("all")}
          name={searchSettings.is_activated}
          id="ACTIVE%2CINACTIVE"
        >
          Wszyscy
        </ToolbarFilterButton>
        <ToolbarFilterButton
          onClick={() => handleFilterButton("active")}
          name={searchSettings.is_activated}
          id="ACTIVE"
        >
          Aktywni
        </ToolbarFilterButton>
        <ToolbarFilterButton
          onClick={() => handleFilterButton("inactive")}
          name={searchSettings.is_activated}
          id="INACTIVE"
        >
          Nieaktywni
        </ToolbarFilterButton>
      </ToolbarFilterContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
