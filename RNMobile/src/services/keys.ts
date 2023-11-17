import axios from 'axios';
import Config from 'react-native-config';

class Keys {
  static API_URL = 'http://192.168.27.34:3000/';
}

export const setTauRusApiAuthorizationHeader = (token: string | null) => {
  authApi.defaults.headers.common.Authorization = token ? `JWT ${token}` : null;
};
const authApi = axios.create({
  baseURL: Keys.API_URL,
});
export default authApi;
