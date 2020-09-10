import { configServices } from '@src/utils';

export const getRandomUserService = async () => {
  try {
    const result = await configServices.getService('api/0.4', {randomapi: 0});
    console.log(result, "1");
    return await configServices.getService('api/0.4', {randomapi: 0});
  } catch (error) {
    throw error;
  }
};
