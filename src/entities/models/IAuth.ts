export interface IPassword {
  passwordFirst?: string;
  passwordSecond?: string;
}
export interface IName {
  name?: string;
}

export interface IEmail {
  email?: string;
}

export interface IRegister extends IPassword, IEmail, IName {}
export interface ILogin extends IName, IPassword {}

export interface IAuthBoolean {
  auth: boolean;
  setAuth: (e: boolean) => {};
}
