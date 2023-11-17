import {put, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {
  getUsersData,
  setIsLogin,
  setToken,
  setUsersData,
} from '../actions/user-action';
import api from '../../services/apis';
import {setTauRusApiAuthorizationHeader} from '../../services/keys';
import {EUserTypes} from '../constants';

function* onGetUsersData(): Generator {
  try {
    const res = yield api.getAll();
    yield put(setUsersData(res));
  } catch (ex) {
    console.log(ex);
  }
}
function* onSelectUser({payload}: any): Generator {
  try {
    yield put(setUsersData(payload));
  } catch (ex) {
    console.log(ex);
  }
}

function* login({payload}: any): Generator {
  try {
    const {data} = payload;
    const res = yield api.signIn(data);
    yield setTauRusApiAuthorizationHeader(res.token);
    yield AsyncStorage.setItem('token', res.token);
    yield put(setToken(res.token));
    yield put(setIsLogin(true));
  } catch (ex) {
    console.log(ex);
  }
}
function* logout(): Generator {
  try {
    yield AsyncStorage.clear();
    yield put(setIsLogin(false));
  } catch (ex) {
    console.log(ex);
  }
}

function* registerUser({payload}: any): Generator {
  try {
    yield api.registration(payload.data);
    yield put(getUsersData());
    yield payload.cb();
  } catch (ex) {
    //console.log(ex);
  }
}
function* checkToken(): Generator {
  try {
    const token = yield AsyncStorage.getItem('token');
    if (token) {
      yield put(setIsLogin(true));
      yield setTauRusApiAuthorizationHeader(token);

      yield put(setToken(token));
    } else {
      yield put(setIsLogin(false));
    }
  } catch (ex) {
    console.log(ex);
  }
}
function* onEditUserData({payload}: any): Generator {
  try {
    yield api.editUser(payload.data);
    yield put(getUsersData());
    yield payload.cb();
  } catch (ex) {
    console.log(ex);
  }
}

export function* watchUserSaga() {
  yield takeEvery(EUserTypes.GET_USERS_DATA as any, onGetUsersData);
  yield takeEvery(EUserTypes.LOGIN as any, login);
  yield takeEvery(EUserTypes.LOGOUT as any, logout);
  yield takeEvery(EUserTypes.SELECT_USER as any, onSelectUser);
  yield takeEvery(EUserTypes.REGISTER_USER as any, registerUser);
  yield takeEvery(EUserTypes.CHECK_TOKEN as any, checkToken);
  yield takeEvery(EUserTypes.EDIT_USER_DATA as any, onEditUserData);
}
