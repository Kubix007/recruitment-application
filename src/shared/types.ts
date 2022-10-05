export interface IRegisterFormData {
  email: string;
  password: string;
  password2: string;
}

export interface ILoginFormData {
  username: string;
  password: string;
}

export interface IRegisterUserData {
  email: string;
  plainPassword: string;
}

export interface IAuthToken {
  token?: string;
  refresh_token: string;
}

export interface IFetchedUsers {
  id: number;
  name: string;
  surname: string;
  email: string;
  birth_date: string;
  is_activated: boolean;
}
