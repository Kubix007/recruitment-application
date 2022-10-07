import axios from "axios";
import { IUserDetails } from "../../shared/types";

const API_URL = "http://api.ultimate.systems/public/index.php/api/v1/";

const getUsers = async (token: string, page: number, perPage: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page: page,
      perPage: perPage,
    },
  };

  const response = await axios.get(API_URL + "auth/users", config);

  return response.data;
};

const patchUser = async (token: string, userData: IUserDetails) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(API_URL + "auth/user", userData, config);
  return response.data;
};

const userService = {
  getUsers,
  patchUser,
};

export default userService;
