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
} from "./Login.style";

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
            <LoginInput
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Wprowadź swój adres email"
              onChange={onChange}
              value={email}
            />
          </LoginFormGroup>
          <LoginFormGroup>
            <LoginLabel htmlFor="password">Hasło</LoginLabel>
            <LoginInput
              type="text"
              className="form-control"
              id="password"
              name="password"
              placeholder="Wprowadź swoje hasło"
              onChange={onChange}
              value={password}
            />
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
