import { IUserData, logintypes } from '../../types';
import { EUserTypes } from '../constants';
import { IUser } from '../types';
interface IReduxAction<T> {
  type: T;
  payload: any;
}

export interface IUserState {
  users?: IUser[];
  selectedUser?: IUser;
  token?: string;
  isLogin?: boolean;
  errorMessage: string;
  hasError: boolean;
}
export const initialState: IUserState = {
  hasError: false,
  errorMessage:'',

};
const userReducer = (
  state = initialState,
  action: IReduxAction<EUserTypes>,
) => {
  switch (action.type) {
    case EUserTypes.SET_USERS_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case EUserTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case EUserTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case EUserTypes.SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case EUserTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case EUserTypes.SET_HAS_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
