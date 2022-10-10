import styled from "styled-components";

export const FirstModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 10%;
  padding: 10px 0px 10px 0px;
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10%;
  }
`;

export const SecondModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 10%;
  justify-content: space-evenly;
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ThirdModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  gap: 20%;
  padding: 10px 0px 10px 0px;
  @media all and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: self-start;
  }
`;
export const FirstModalFormGroup = styled.div``;

export const SecondModalFormGroup = styled.div``;

export const ModalFormLabel = styled.label`
  font-family: FiraSans-Light;
  font-size: 15.43px;
`;

export const ModelFormPhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
`;

export const ModalFormInputWrapper = styled.div`
  input#birthDate {
    font-family: FiraSans-Light;
    font-size: 25px;
    width: 100%;
    border: 0px;
    border-bottom: 1px solid grey;
    &:focus {
      outline: none;
      border-bottom: 2px solid black;
    }
  }
`;

export const ModalFormCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
  gap: 10%;
`;

export const ModalFormTextInput = styled.input`
  font-family: FiraSans-Light;
  font-size: 25px;
  width: 100%;
  border: 0px;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const ModalFormPrefixInput = styled.input`
  width: 12%;
  font-family: FiraSans-Light;
  font-size: 25px;
  border: 0px;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;
export const ModalFormPhoneInput = styled.input`
  width: 36%;
  font-family: FiraSans-Light;
  font-size: 25px;
  border: 0px;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const ModalFormError = styled.p`
  font-family: FiraSans-Light;
  font-size: 10px;
  color: #ff1d25;
  text-align: left;
  width: 100%;
  margin-top: 10px;
`;

export const ModalFormCheckboxError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
