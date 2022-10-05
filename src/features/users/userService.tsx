import axios from "axios";

const API_URL = "http://api.ultimate.systems/public/index.php/api/v1/";

const getUsers = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page: 5,
      perPage: 50,
    },
  };

  const response = await axios.get(API_URL + "auth/users", config);

  return response.data;
};

const userService = {
  getUsers,
};

export default userService;
