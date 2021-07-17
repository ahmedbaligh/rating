import axiosDefault from './api';

const getUser = async () => {
  const { data } = await axiosDefault({
    url: '/api/services/app/Session/GetCurrentLoginInformations'
  });

  const id = data.result?.user?.id;

  if (!id)
    return new Promise(res => {
      res(0);
    });

  return axiosDefault({
    url: `/api/services/app/User/Get/?id=${id}`
  });
};

export default getUser;
