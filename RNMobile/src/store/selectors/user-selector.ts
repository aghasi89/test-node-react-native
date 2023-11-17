import {IUserState} from '../reducers/user-reducer';
export const usersSelector = ({
  userReducer: {users},
}: {
  userReducer: IUserState;
}) => users;
export const selectedUserSelector = ({
  userReducer: {selectedUser},
}: {
  userReducer: IUserState;
}) => selectedUser;

export const tokenSelector = ({
  userReducer: {token},
}: {
  userReducer: IUserState;
}) => token;

export const isLoginSelector = ({
  userReducer: {isLogin},
}: {
  userReducer: IUserState;
}) => isLogin;
export const hasErrorSelector = ({
  userReducer: {hasError},
}: {
  userReducer: IUserState;
}) => hasError;
export const errorMessageSelector = ({
  userReducer: {errorMessage},
}: {
  userReducer: IUserState;
}) => errorMessage;
