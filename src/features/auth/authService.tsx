import axios from "axios";
import {
  LoginFormData,
  RegisterFormData,
  RegisterUserData,
} from "../../shared/types";

//const API_URL = "/api/v1/";
const API_URL = "http://api.ultimate.systems/public/index.php/api/v1/";

//Register user
const register = async (userData: RegisterUserData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData: LoginFormData) => {
  const response = await axios.post(API_URL + "login/check", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
