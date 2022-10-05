export interface RegisterFormData {
  email: string;
  password: string;
  password2: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface RegisterUserData {
  email: string;
  plainPassword: string;
}

export interface AuthToken {
  token?: string;
  refresh_token: string;
}
