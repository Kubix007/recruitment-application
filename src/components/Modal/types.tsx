import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
