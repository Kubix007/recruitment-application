import { Dispatch, SetStateAction } from "react";
import { IFetchedUsers } from "../../shared/types";

export interface TableProps {
  data: any;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  totalUsers: number;
}
