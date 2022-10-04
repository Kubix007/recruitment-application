import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterFormData, RegisterUserData } from "../../shared/types";
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
} from "./Register.style";
import { ReactComponent as EmailIcon } from "../../img/Email.svg";
import { ReactComponent as PasswordIcon } from "../../img/Password.svg";
import Spinner from "../../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

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
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData: RegisterUserData = {
        email,
        plainPassword: password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <RegisterContainer>
      <RegisterHeading>
        <h1>Zaczynamy!</h1>
      </RegisterHeading>

      <RegisterForm>
        <form onSubmit={onSubmit}>
          <RegisterFormGroup>
            <RegisterLabel htmlFor="email">E-mail</RegisterLabel>
            <RegisterInputWrapper>
              <RegisterInput
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
            </RegisterInputWrapper>
          </RegisterFormGroup>
          <RegisterFormGroup>
            <RegisterLabel htmlFor="password">Hasło</RegisterLabel>
            <RegisterInputWrapper>
              <RegisterInput
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
            </RegisterInputWrapper>
          </RegisterFormGroup>
          <RegisterFormGroup>
            <RegisterLabel htmlFor="password2">Powtórz hasło</RegisterLabel>
            <RegisterInputWrapper>
              <RegisterInput
                type="text"
                className="form-control"
                id="password2"
                name="password2"
                placeholder="Minimum 8 znaków"
                onChange={onChange}
                value={password2}
              />
              <PasswordInputIcon>
                <PasswordIcon />
              </PasswordInputIcon>
            </RegisterInputWrapper>
          </RegisterFormGroup>
          <RegisterFormGroup>
            <RegisterButton onClick={onClick}>Zarejestruj się</RegisterButton>
          </RegisterFormGroup>
        </form>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
