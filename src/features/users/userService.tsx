import axios from "axios";
import { ISortState, IUserDetails } from "../../shared/types";

const API_URL = "http://api.ultimate.systems/public/index.php/api/v1/";

const getUsers = async (
  page: number,
  perPage: number,
  search: string,
  is_activated: string,
  sort: ISortState,
  token?: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin":
        "'http://api.ultimate.systems/public/index.php/api/v1/login/check",
      "Content-Security-Policy": "upgrade-insecure-requests",
    },
    params: {
      page: page,
      perPage: perPage,
      search: search,
    },
  };

  const response = await axios.get(
    API_URL +
      `auth/users?filter%5Bis_activated%5D=${is_activated}&sort%5Bemail%5D=${sort.email}&sort%5Bname%5D=${sort.name}&sort%5Bsurname%5D=${sort.surname}&sort%5Bbirth_date%5D=${sort.birth_date}`,
    config
  );

  return response.data;
};

const patchUser = async (userData: IUserDetails, token?: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin":
        "'http://api.ultimate.systems/public/index.php/api/v1/login/check",
      "Content-Security-Policy": "upgrade-insecure-requests",
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
