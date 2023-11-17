import {EUserTypes} from '../constants';
import {
  IRegisterRequest,
  IUser,
  ISignInRequest,
  IRequstEditUser as IRequestEditUser,
} from '../types';

export const setUsersData = (payload: IUser[]) => {
  return {
    type: EUserTypes.SET_USERS_DATA,
    payload,
  };
};

export const getUsersData = () => {
  return {
    type: EUserTypes.GET_USERS_DATA,
  };
};

export const onLogin = (payload: {data: ISignInRequest}) => {
  return {
    type: EUserTypes.LOGIN,
    payload,
  };
};

export const logout = () => {
  return {
    type: EUserTypes.LOGOUT,
  };
};

export const editUserData = (payload: {
  data: IRequestEditUser;
  cb: () => void;
}) => {
  return {
    type: EUserTypes.EDIT_USER_DATA,
    payload,
  };
};

export const onSelectUser = (payload: IUser) => {
  return {
    type: EUserTypes.SELECT_USER,
    payload,
  };
};

export const changeSelectedUserData = (payload: IUser | undefined) => {
  return {
    type: EUserTypes.CREATE_ORDER_DATA,
    payload,
  };
};

export const setIsLogin = (payload: boolean) => {
  return {
    type: EUserTypes.SET_IS_LOGIN,
    payload,
  };
};
export const setToken = (payload: string) => {
  return {
    type: EUserTypes.SET_TOKEN,
    payload,
  };
};
export const onRegisterUser = (payload: {
  data: IRegisterRequest;
  cb: () => void;
}) => {
  return {
    type: EUserTypes.REGISTER_USER,
    payload,
  };
};
export const onCheckToken = () => {
  return {
    type: EUserTypes.CHECK_TOKEN,
  };
};

export const setErrorMessage = (payload: string) => {
  return {
    type: EUserTypes.SET_ERROR_MESSAGE,
    payload,
  };
};
export const setHasError = (payload: boolean) => {
  return {
    type: EUserTypes.SET_HAS_ERROR,
    payload,
  };
};
