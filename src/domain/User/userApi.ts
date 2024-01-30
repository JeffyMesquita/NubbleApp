import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

async function getById(id: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${id}`);
  return response.data;
}

export const userApi = {
  getById,
};
