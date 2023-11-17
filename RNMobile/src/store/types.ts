export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
  created: Date;
}
export interface IRegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export type ISignInResult = {
  token: string;
};

export interface IRequstEditUser {
  id: string;
  firstName: string;
  lastName: string;
}
