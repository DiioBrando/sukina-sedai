export interface IReg extends ILogin {
  login: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  login: string;
  email: string;
  roles: Array<string>;
  isActivated: boolean;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
