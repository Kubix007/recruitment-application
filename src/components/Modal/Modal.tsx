import { ModalProps } from "./types";
import {
  ModalBackground,
  ModalContainer,
  TitleCloseContainer,
} from "./Modal.style";
import { ReactComponent as Button } from "../../img/Button.svg";

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseContainer>
          <button onClick={() => setIsOpen(false)}>
            <Button />
          </button>
        </TitleCloseContainer>
        <div className="title">
          <h1>Tytuł</h1>
        </div>
        <div className="body">
          <p>Body</p>
        </div>
        <div className="footer">
          <button onClick={() => setIsOpen(false)}>Anuluj</button>
          <button>Zapisz</button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
