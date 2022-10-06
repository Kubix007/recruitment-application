import React, { useEffect } from "react";
import { ILoginFormData } from "../../shared/types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { login, reset } from "../../features/auth/authSlice";
import {
  LoginButton,
  LoginForm,
  LoginFormGroup,
  LoginHeading,
  LoginLabel,
  LoginInput,
  LoginContainer,
  LoginInputWrapper,
  EmailInputIcon,
  PasswordInputIcon,
  ParagraphError,
} from "./Login.style";
import { ReactComponent as EmailIcon } from "../../img/Email.svg";
import { ReactComponent as PasswordIcon } from "../../img/Password.svg";
import { AppDispatch, RootState } from "../../app/store";
import { useFormik, FormikHelpers } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email("*niepoprawny adres e-mail")
    .required("*Pole wymagane"),
  password: yup
    .string()
    .min(8, "*zbyt mała ilość znaków")
    .required("*Pole wymagane"),
});

const Login = () => {
  const onSubmit = async (
    values: ILoginFormData,
    actions: FormikHelpers<ILoginFormData>
  ) => {
    const userData = {
      username: values.username,
      password: values.password,
    };
    dispatch(login(userData));
    actions.resetForm();
  };

  const handleClick = () => {
    const userData = {
      username: values.username,
      password: values.password,
    };
    dispatch(login(userData));
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
      username: "",
      password: "",
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
    <LoginContainer>
      <LoginHeading>
        <h1>Logowanie</h1>
      </LoginHeading>

      <LoginForm>
        <form onSubmit={handleSubmit} autoComplete="off">
          <LoginFormGroup>
            <LoginLabel htmlFor="username">E-mail</LoginLabel>
            <LoginInputWrapper>
              <LoginInput
                value={values.username}
                onChange={handleChange}
                id="username"
                type="username"
                placeholder="Wprowadź swój adres e-mail"
                onBlur={handleBlur}
                className={
                  errors.username && touched.username ? "input-error" : ""
                }
              />
              <EmailInputIcon>
                <EmailIcon />
              </EmailInputIcon>
            </LoginInputWrapper>
            <ParagraphError>
              {errors.username && touched.username && errors.username}
            </ParagraphError>
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginLabel htmlFor="password">Hasło</LoginLabel>
            <LoginInputWrapper>
              <LoginInput
                id="password"
                type="password"
                placeholder="Minimum 8 znaków"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              <PasswordInputIcon>
                <PasswordIcon />
              </PasswordInputIcon>
            </LoginInputWrapper>
            <ParagraphError>
              {errors.password && touched.password && errors.password}
            </ParagraphError>
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginButton
              onClick={handleClick}
              disabled={!(isValid && dirty)}
              type="submit"
            >
              Zaloguj się
            </LoginButton>
          </LoginFormGroup>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
