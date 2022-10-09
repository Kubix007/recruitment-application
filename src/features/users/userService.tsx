import axios from "axios";
import { IUserDetails } from "../../shared/types";

const API_URL = "http://api.ultimate.systems/public/index.php/api/v1/";

const getUsers = async (
  page: number,
  perPage: number,
  search: string,
  is_activated: string,
  token?: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page: page,
      perPage: perPage,
      search: search,
    },
  };

  const response = await axios.get(
    API_URL + `auth/users?filter%5Bis_activated%5D=${is_activated}`,
    config
  );

  return response.data;
};

const patchUser = async (userData: IUserDetails, token?: string) => {
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
