import { IRequstEditUser } from '../store/types';
import authApi from './keys';

interface IDATA { }
class Static implements IDATA {
  async registration(data: any) {
    try {
      const response = await authApi.post('auth/register', data);
      return response.data;
    } catch (ex: any) {
      throw ex;
    }
  }
  async signIn(data: any) {
    try {
      const response = await authApi.post('auth/sign_in', data);
      return response.data;
    } catch (ex: any) {
      throw ex;
    }
  }
  async getAll() {
    try {
      const response = await authApi.get('get_all');
      return response.data;
    } catch (ex: any) {
      console.log(ex);

      throw ex;
    }
  }
  async editUser(data: IRequstEditUser) {
    try {
      const body = {
        firstName: data.firstName,
        lastName: data.lastName,
      };
      const response = await authApi.put(`edit/${data.id}`, body);
      return response.data;
    } catch (ex: any) {
      throw ex;
    }
  }
}
const api = new Static();
export default api;
