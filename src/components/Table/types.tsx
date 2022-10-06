import { Dispatch, SetStateAction } from "react";
import { IFetchedUsers } from "../../shared/types";

export interface TableProps {
  data: IFetchedUsers[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
