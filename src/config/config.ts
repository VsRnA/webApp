import { env } from '#infrastructure/env/index';

const config = {
  port: env.get('PORT'),
  mysql: {
    username: env.get('MYSQL_USERNAME'),
    password: env.get('MYSQL_PASSWORD'),
    database: env.get('MYSQL_DATABASE'),
    host: env.get('MYSQL_HOST'),
    port: env.get('MYSQL_PORT'),
    dialect: env.get('MYSQL_DIALECT'),
    dialectOptions: {
      charset: 'utf8mb4',
    },
  },
  modelsDir: '',
};

export default config;
