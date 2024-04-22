import $api from '@/features/auth/api/api';
import { AxiosResponse } from 'axios';
import { IUser } from '@/entities/models/IAuth';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/getAll');
  }
}
