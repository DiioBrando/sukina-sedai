export interface IReg extends ILogin {
  login: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  login: string;
  email: string;
  password: string;
  roles: Array<string>;
  isActivated: boolean;
}

export interface IAuthBoolean {
  auth: boolean;
  setAuth: (e: boolean) => {};
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
