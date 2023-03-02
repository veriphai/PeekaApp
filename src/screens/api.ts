import {PetApi, UserApi,Configuration} from '../../generated';

const config = new Configuration();

const petApi = new PetApi(config, 'http://ec2-65-0-104-33.ap-south-1.compute.amazonaws.com:8080/crud/creators',);
const userApi = new UserApi(config, 'example.com',);

export {petApi, userApi};