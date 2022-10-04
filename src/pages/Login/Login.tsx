import React, { useEffect, useState } from "react";
import { LoginFormData } from "../../shared/types";
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
} from "./Login.style";
import { ReactComponent as EmailIcon } from "../../img/Email.svg";
import { ReactComponent as PasswordIcon } from "../../img/Password.svg";
import { AppDispatch, RootState } from "../../app/store";

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const { username, password } = formData;

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onClick = () => {
    const userData: LoginFormData = {
      username,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <LoginContainer>
      <LoginHeading>
        <h1>Logowanie</h1>
      </LoginHeading>

      <LoginForm>
        <form onSubmit={onSubmit}>
          <LoginFormGroup>
            <LoginLabel htmlFor="username">E-mail</LoginLabel>
            <LoginInputWrapper>
              <LoginInput
                type="text"
                id="username"
                name="username"
                placeholder="Wprowadź swój adres email"
                onChange={onChange}
                value={username}
              />
              <EmailInputIcon>
                <EmailIcon />
              </EmailInputIcon>
            </LoginInputWrapper>
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginLabel htmlFor="password">Hasło</LoginLabel>
            <LoginInputWrapper>
              <LoginInput
                type="text"
                id="password"
                name="password"
                placeholder="Minimum 8 znaków"
                onChange={onChange}
                value={password}
              />
              <PasswordInputIcon>
                <PasswordIcon />
              </PasswordInputIcon>
            </LoginInputWrapper>
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginButton onClick={onClick}>Zaloguj się</LoginButton>
          </LoginFormGroup>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
