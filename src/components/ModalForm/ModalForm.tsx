import DatePicker from "react-datepicker";

import {
  ModalFormTextInput,
  ModalFormSelectInput,
  ModalFormError,
  FirstModalFormGroup,
  SecondModalFormGroup,
  ModalFormLabel,
  ModalFormInputWrapper,
  FirstModalFormInputContainer,
  SecondModalFormInputContainer,
  ModelFormPhoneWrapper,
  ModalFormPrefixInput,
  ModalFormPhoneInput,
  ModalFormCheckboxGroup,
  ThirdModalFormInputContainer,
  ModalFormCheckboxError,
} from "./ModalForm.style";
import "react-datepicker/dist/react-datepicker.css";

const ModalForm = ({ props }: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FirstModalFormInputContainer>
        <FirstModalFormGroup>
          <ModalFormLabel htmlFor="email">* E-mail</ModalFormLabel>
          <ModalFormInputWrapper>
            <ModalFormTextInput
              value={props.values.email}
              onChange={props.handleChange}
              id="email"
              type="text"
              onBlur={props.handleBlur}
              className={
                props.errors.email && props.touched.email ? "input-error" : ""
              }
            />
          </ModalFormInputWrapper>
          <ModalFormError>
            {props.errors.email && props.touched.email && props.errors.email}
          </ModalFormError>
        </FirstModalFormGroup>
        <FirstModalFormGroup>
          <ModalFormLabel htmlFor="name">* Imię</ModalFormLabel>
          <ModalFormInputWrapper>
            <ModalFormTextInput
              value={props.values.name}
              onChange={props.handleChange}
              id="name"
              type="text"
              onBlur={props.handleBlur}
              className={
                props.errors.name && props.touched.name ? "input-error" : ""
              }
            />
          </ModalFormInputWrapper>
          <ModalFormError>
            {props.errors.name && props.touched.name && props.errors.name}
          </ModalFormError>
        </FirstModalFormGroup>
        <FirstModalFormGroup>
          <ModalFormLabel htmlFor="surname">* Nazwisko</ModalFormLabel>
          <ModalFormInputWrapper>
            <ModalFormTextInput
              value={props.values.surname}
              onChange={props.handleChange}
              id="surname"
              type="text"
              onBlur={props.handleBlur}
              className={
                props.errors.surname && props.touched.surname
                  ? "input-error"
                  : ""
              }
            />
          </ModalFormInputWrapper>
          <ModalFormError>
            {props.errors.surname &&
              props.touched.surname &&
              props.errors.surname}
          </ModalFormError>
        </FirstModalFormGroup>
      </FirstModalFormInputContainer>
      <SecondModalFormInputContainer>
        <SecondModalFormGroup>
          <ModalFormLabel htmlFor="birthDate">* Data urodzenia</ModalFormLabel>
          <ModalFormInputWrapper>
            <DatePicker
              selected={props.values.birthDate}
              dateFormat="dd-MM-yyyy"
              id="birthDate"
              name="birthDate"
              onChange={(date) => props.setFieldValue("birthDate", date)}
              onBlur={props.handleBlur}
              wrapperClassName="datePicker"
            />
          </ModalFormInputWrapper>
          <ModalFormError>
            {props.errors.birthDate &&
              props.touched.birthDate &&
              props.errors.birthDate}
          </ModalFormError>
        </SecondModalFormGroup>
        <SecondModalFormGroup>
          <ModalFormLabel htmlFor="phonePrefix">
            * Telefon(prefix,9 cyfr)
          </ModalFormLabel>
          <ModelFormPhoneWrapper>
            <ModalFormPrefixInput
              value={props.values.phonePrefix}
              onChange={props.handleChange}
              id="phonePrefix"
              type="text"
              onBlur={props.handleBlur}
              className={
                props.errors.phonePrefix && props.touched.phonePrefix
                  ? "input-error"
                  : ""
              }
            />

            <ModalFormPhoneInput
              value={props.values.phoneNumber}
              onChange={props.handleChange}
              id="phoneNumber"
              type="text"
              onBlur={props.handleBlur}
              className={
                props.errors.phoneNumber && props.touched.phoneNumber
                  ? "input-error"
                  : ""
              }
            />
          </ModelFormPhoneWrapper>
          <ModalFormError>
            {props.errors.phoneNumber &&
              props.touched.phoneNumber &&
              props.errors.phoneNumber}
          </ModalFormError>
        </SecondModalFormGroup>
        <SecondModalFormGroup></SecondModalFormGroup>
      </SecondModalFormInputContainer>
      <ThirdModalFormInputContainer>
        <ModalFormCheckboxError>
          <ModalFormCheckboxGroup>
            <ModalFormLabel htmlFor="privacyPolicy">
              *Polityka prywatności
            </ModalFormLabel>
            <ModalFormInputWrapper>
              <ModalFormTextInput
                checked={props.values.privacyPolicy}
                onChange={props.handleChange}
                id="privacyPolicy"
                type="checkbox"
                onBlur={props.handleBlur}
                className={
                  props.errors.privacyPolicy && props.touched.privacyPolicy
                    ? "input-error"
                    : ""
                }
              />
            </ModalFormInputWrapper>
          </ModalFormCheckboxGroup>
          <ModalFormError>
            {props.errors.privacyPolicy &&
              props.touched.privacyPolicy &&
              props.errors.privacyPolicy}
          </ModalFormError>
        </ModalFormCheckboxError>
        <ModalFormCheckboxError>
          <ModalFormCheckboxGroup>
            <ModalFormLabel htmlFor="marketingAgreements">
              Zgody marketingowe
            </ModalFormLabel>
            <ModalFormInputWrapper>
              <ModalFormTextInput
                checked={props.values.marketingAgreements}
                onChange={props.handleChange}
                id="marketingAgreements"
                type="checkbox"
                onBlur={props.handleBlur}
              />
            </ModalFormInputWrapper>
          </ModalFormCheckboxGroup>
        </ModalFormCheckboxError>
        <ModalFormCheckboxError>
          <ModalFormCheckboxGroup>
            <ModalFormLabel htmlFor="sellingRegulation">
              *Regulamin sprzedaży
            </ModalFormLabel>
            <ModalFormInputWrapper>
              <ModalFormTextInput
                checked={props.values.sellingRegulation}
                onChange={props.handleChange}
                id="sellingRegulation"
                type="checkbox"
                onBlur={props.handleBlur}
                className={
                  props.errors.sellingRegulation &&
                  props.touched.sellingRegulation
                    ? "input-error"
                    : ""
                }
              />
            </ModalFormInputWrapper>
          </ModalFormCheckboxGroup>
          <ModalFormError>
            {props.errors.sellingRegulation &&
              props.touched.sellingRegulation &&
              props.errors.sellingRegulation}
          </ModalFormError>
        </ModalFormCheckboxError>
      </ThirdModalFormInputContainer>
    </form>
  );
};

export default ModalForm;
