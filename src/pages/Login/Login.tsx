import React, { useState } from "react";
import { LoginFormData } from "../../shared/types";
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

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

  return (
    <LoginContainer>
      <LoginHeading>
        <h1>Logowanie</h1>
      </LoginHeading>

      <LoginForm>
        <form onSubmit={onSubmit}>
          <LoginFormGroup>
            <LoginLabel htmlFor="email">E-mail</LoginLabel>
            <LoginInputWrapper>
              <LoginInput
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Wprowadź swój adres email"
                onChange={onChange}
                value={email}
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
                className="form-control"
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
            <LoginButton>Zaloguj się</LoginButton>
          </LoginFormGroup>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
