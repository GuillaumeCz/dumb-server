import dotenv from 'dotenv';

const myEnv = dotenv.config().parsed;

const config = {
  port: myEnv.PORT,
  mongo: {
    host: myEnv.MONGO_HOST,
    port: myEnv.MONGO_PORT,
    name: myEnv.MONGO_NAME
  }
};

export { config as default };
