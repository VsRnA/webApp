import { JSONSchema } from '#common/types/jsonSchema';

export const schema = {
  type: 'object',
  properties: {
    PORT: {
      type: 'number',
      description: 'Server Port',
    },
    MYSQL_USERNAME: {
      type: 'string',
      description: 'Username in mysql server',
    },
    MYSQL_PASSWORD: {
      type: 'string',
      description: 'Password in mysql server',
    },
    MYSQL_DATABASE: {
      type: 'string',
      description: 'Name DB in mysql server',
    },
    MYSQL_HOST: {
      type: 'string',
      description: 'Name host in mysql server',
    },
    MYSQL_PORT: {
      type: 'number',
      description: 'Port in mysql server',
    },
    MYSQL_DIALECT: {
      type: 'string',
      description: 'dialect',
    },
  },
  required: [
    'PORT',
    'MYSQL_USERNAME',
    'MYSQL_PASSWORD',
    'MYSQL_DATABASE',
    'MYSQL_HOST',
    'MYSQL_PORT',
    'MYSQL_DIALECT',
  ],
} as const satisfies JSONSchema;
