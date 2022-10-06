import styled from "styled-components";

export const FirstModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 10%;
`;

export const SecondModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 10%;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const ThirdModalFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  gap: 10%;
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
  .datePicker {
    & > .react-datepicker__input-container {
      font-family: FiraSans-Light;
      font-size: 25px;
      width: 100%;
      border: 0px;
      &:focus {
        outline: none;
        border-bottom: 2px solid black;
      }
    }
  }
  & > .pickerData {
    font-family: FiraSans-Light;
    font-size: 25px;
    width: 100%;
    border: 0px;
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
export const ModalFormSelectInput = styled.input``;

export const ModalFormError = styled.p`
  font-family: FiraSans-Light;
  font-size: 10px;
  color: #ff1d25;
  text-align: left;
  width: 100%;
`;

export const ModalFormCheckboxError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
