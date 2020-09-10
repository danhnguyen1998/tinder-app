import {configServices} from '@src/utils';

export const getAccountInfor = async () => {
  try {
    const response = await configServices.getService('api/v1/accounts/get_account_by_id');
    return response.data;
  } catch (error) {
    throw error;
  }
};
