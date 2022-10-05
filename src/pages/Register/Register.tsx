import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IRegisterFormData } from "../../shared/types";
import { register, reset } from "../../features/auth/authSlice";
import { RootState, AppDispatch } from "../../app/store";
import {
  RegisterButton,
  RegisterForm,
  RegisterFormGroup,
  RegisterHeading,
  RegisterLabel,
  RegisterInput,
  RegisterContainer,
  RegisterInputWrapper,
  EmailInputIcon,
  PasswordInputIcon,
  ParagraphError,
} from "./Register.style";
import { ReactComponent as EmailIcon } from "../../img/Email.svg";
import { ReactComponent as PasswordIcon } from "../../img/Password.svg";
import Spinner from "../../components/Spinner";
import { useFormik, FormikHelpers } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("*niepoprawny adres e-mail")
    .required("*Pole wymagane"),
  password: yup
    .string()
    .min(8, "*zbyt mała ilość znaków")
    .required("*Pole wymagane")
    .test("passwords-match", "*różne hasła", function (value) {
      return this.parent.password2 === value;
    }),
  password2: yup
    .string()
    .min(8, "*zbyt mała ilość znaków")
    .required("*Pole wymagane")
    .test("passwords-match", "*różne hasła", function (value) {
      return this.parent.password === value;
    }),
});

const Register = () => {
  const onSubmit = async (
    values: IRegisterFormData,
    actions: FormikHelpers<IRegisterFormData>
  ) => {
    const userData = {
      email: values.email,
      plainPassword: values.password,
    };
    dispatch(register(userData));
    actions.resetForm();
  };

  const handleClick = () => {
    const userData = {
      email: values.email,
      plainPassword: values.password,
    };
    console.log("xd");
    dispatch(register(userData));
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
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validationSchema,
    onSubmit,
  });

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <RegisterContainer>
      <RegisterHeading>
        <h1>Zaczynamy!</h1>
      </RegisterHeading>

      <RegisterForm>
        <form onSubmit={handleSubmit} autoComplete="off">
          <RegisterFormGroup>
            <RegisterLabel htmlFor="email">E-mail</RegisterLabel>
            <RegisterInputWrapper>
              <RegisterInput
                value={values.email}
                onChange={handleChange}
                id="email"
                type="text"
                placeholder="Wprowadź swój adres e-mail"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              <EmailInputIcon>
                <EmailIcon />
              </EmailInputIcon>
            </RegisterInputWrapper>
            <ParagraphError>
              {errors.email && touched.email && errors.email}
            </ParagraphError>
          </RegisterFormGroup>
          <RegisterFormGroup>
            <RegisterLabel htmlFor="password">Hasło</RegisterLabel>
            <RegisterInputWrapper>
              <RegisterInput
                value={values.password}
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="Minimum 8 znaków"
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              <PasswordInputIcon>
                <PasswordIcon />
              </PasswordInputIcon>
            </RegisterInputWrapper>
            <ParagraphError>
              {errors.password && touched.password && errors.password}
            </ParagraphError>
          </RegisterFormGroup>
          <RegisterFormGroup>
            <RegisterLabel htmlFor="password2">Powtórz hasło</RegisterLabel>
            <RegisterInputWrapper>
              <RegisterInput
                value={values.password2}
                onChange={handleChange}
                id="password2"
                type="password"
                placeholder="Minimum 8 znaków"
                onBlur={handleBlur}
                className={
                  errors.password2 && touched.password2 ? "input-error" : ""
                }
              />
              <PasswordInputIcon>
                <PasswordIcon />
              </PasswordInputIcon>
            </RegisterInputWrapper>
            <ParagraphError>
              {errors.password2 && touched.password2 && errors.password2}
            </ParagraphError>
          </RegisterFormGroup>
          <RegisterFormGroup>
            <RegisterButton
              onClick={handleClick}
              disabled={!(isValid && dirty)}
              type="submit"
            >
              Zarejestruj się
            </RegisterButton>
          </RegisterFormGroup>
        </form>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
