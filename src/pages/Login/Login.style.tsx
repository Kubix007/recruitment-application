import styled from "styled-components";

export const LoginContainer = styled.div`
  /* UI Properties */
  padding-box;
  border: 0.5px solid #c6ceda;
  border-radius: 11px;
  opacity: 1;
  padding: 10%;
`;
export const LoginButton = styled.button`
  transform: matrix(1, 0, 0, 1, 0, 0);
  border: 1px solid #24399b;
  border-radius: 7px;
  opacity: 1;
  width: 100%;
  font-family: FiraSans-Book;
  background-color: #24399b;
  color: white;
  padding: 5%;
  &:hover {
    background-color: white;
    color: black;
  }
  font-size: 28.77px;
`;

export const LoginForm = styled.form`
  width: 70%;
  margin: 0 auto;
`;

export const LoginFormGroup = styled.div`
  margin-bottom: 10px;
  display: block;
`;

export const LoginHeading = styled.section`
  font-size: 37.69px;
  font-weight: 900;
  margin-bottom: 50px;
  padding: 0 20px;
  font-family: FiraSans-Bold;
`;

export const LoginLabel = styled.label`
  font-family: FiraSans-Medium;
  font-size: 17.95px;
  text-align: left;
  display: block;
  width: 100%;
`;
export const LoginInput = styled.input`
  font-family: FiraSans-Light;
  font-size: 21.54px;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 50px;
  box-sizing: border-box;
  padding-left: 3rem;
  left: 10px;
`;

export const LoginInputWrapper = styled.div`
  position: relative;
`;

export const EmailInputIcon = styled.div`
  height: 2.5rem;
  width: 1.5rem;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
`;

export const PasswordInputIcon = styled.div`
  height: 2.5rem;
  width: 1.5rem;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 43%;
  left: 9px;
  transform: translateY(-50%);
`;

export const ParagraphError = styled.p`
  font-family: FiraSans-Light;
  font-size: 17.95px;
  color: #ff1d25;
  text-align: left;
  display: block;
  width: 100%;
`;
