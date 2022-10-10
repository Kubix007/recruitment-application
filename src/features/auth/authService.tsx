import axios from "axios";
import { ILoginFormData, IRegisterUserData } from "../../shared/types";

//const API_URL = "/api/v1/";
const API_URL = "http://api.ultimate.systems/public/index.php/api/v1/";

//Register user
const register = async (userData: IRegisterUserData) => {
  const config = {
    headers: {
      crossOriginIsolated: true,
    },
  };
  const response = await axios.post(API_URL + "register", userData, config);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData: ILoginFormData) => {
  const config = {
    headers: {
      crossOriginIsolated: true,
    },
  };
  const response = await axios.post(API_URL + "login/check", userData, config);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

//Refresh token
const refreshToken = async (refreshToken: any) => {
  const response = await axios.post(
    API_URL + "auth/token/refresh",
    refreshToken
  );
  return response.data;
};

const authService = {
  register,
  logout,
  login,
  refreshToken,
};

export default authService;
