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

export interface IUserDetails {
  email: string;
  name: string;
  surname: string;
  birthDate: string;
  phonePrefix: string;
  phoneNumber: string;
  privacyPolicy: boolean;
  marketingAgreements: boolean;
  sellingRegulation: boolean;
}
