import { ModalProps } from "./types";
import {
  ModalBackground,
  ModalContainer,
  TitleCloseContainer,
  ModalButtonConfirm,
  ModalButtonCancel,
} from "./Modal.style";
import { ReactComponent as Button } from "../../img/Button.svg";
import ModalForm from "../ModalForm";
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { IUserDetails } from "../../shared/types";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { getUsers, patchUser } from "../../features/users/userSlice";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("*niepoprawny adres e-mail")
    .required("*Pole wymagane"),
  name: yup.string().required("*Pole wymagane"),
  surname: yup.string().required("*Pole wymagane"),
  birthDate: yup.string().required("*Pole wymagane"),
  phonePrefix: yup.string().required("*Pole wymagane"),
  phoneNumber: yup.string().required("*Pole wymagane"),
  privacyPolicy: yup.boolean().oneOf([true], "*Pole wymagane"),
  sellingRegulation: yup.boolean().oneOf([true], "*Pole wymagane"),
});

const Modal = ({ setIsOpen }: ModalProps) => {
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = async (
    values: IUserDetails,
    actions: FormikHelpers<IUserDetails>
  ) => {
    const userData = {
      email: values.email,
      name: values.name,
      surname: values.surname,
      birthDate: values.birthDate,
      phonePrefix: values.phonePrefix,
      phoneNumber: values.phoneNumber,
      privacyPolicy: values.privacyPolicy,
      marketingAgreements: values.marketingAgreements,
      sellingRegulation: values.sellingRegulation,
    };
    console.log(userData);
    dispatch(patchUser(userData));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      birthDate: "",
      phonePrefix: "+48",
      phoneNumber: "",
      privacyPolicy: false,
      marketingAgreements: false,
      sellingRegulation: false,
    },
    validationSchema,
    onSubmit,
  });

  const handleClick = () => {
    const userData = {
      email: values.email,
      name: values.name,
      surname: values.surname,
      birthDate: `${new Date(values.birthDate).getFullYear()}-${
        new Date(values.birthDate).getMonth() + 1
      }-${new Date(values.birthDate).getDate()}`,
      phonePrefix: values.phonePrefix,
      phoneNumber: values.phoneNumber,
      privacyPolicy: values.privacyPolicy,
      marketingAgreements: values.marketingAgreements,
      sellingRegulation: values.sellingRegulation,
    };
    dispatch(patchUser(userData));
    setIsOpen(false);
  };

  const props = {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    validationSchema,
    onSubmit,
    setFieldValue,
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseContainer>
          <button onClick={() => setIsOpen(false)}>
            <Button />
          </button>
        </TitleCloseContainer>
        <div className="title">Edycja danych</div>
        <div className="body">
          <ModalForm props={props} />
        </div>
        <div className="footer">
          <ModalButtonCancel onClick={() => setIsOpen(false)}>
            Anuluj
          </ModalButtonCancel>
          <ModalButtonConfirm
            disabled={!(isValid && dirty)}
            onClick={handleClick}
            type="submit"
          >
            Zapisz
          </ModalButtonConfirm>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
