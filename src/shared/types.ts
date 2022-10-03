export interface RegisterFormData {
  login: string;
  email: string;
  password: string;
  password2?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
