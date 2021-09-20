import getInstance from '../api/instance';

const UserApi = {
  report: async (params: any) => {
    const instance = getInstance();
    const { data } = await instance.get('/user', { params });

    return data;
  },

  me: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/dashUser/me');

    return data;
  },

};

export default UserApi;
