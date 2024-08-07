import { JSONSchema } from '#common/types/jsonSchema';
import { createdAt, updatedAt, deletedAt } from '#common/schemas/sequelizeTimestamps';

export default {
  type: 'object',
  required: [
    'id',
    'name',
    'email',
    'phone',
    'role',
    'active',
    'hash',
    'createdAt',
    'updatedAt',
    'deletedAt',
  ],
  properties: {
    id: {
      type: 'number',
      description: 'ID формы',
      minimum: 1,
    },
    name: {
      type: 'string',
      description: 'Имя пользователя',
      minLength: 1,
    },
    email: {
      type: 'string',
      description: 'Почта пользователя',
      format: 'email',
    },
    phone: {
      type: 'string',
      description: 'Телефон пользователя',
      minLength: 1,
    },
    role: {
      type: 'string',
      description: 'Роль пользователя',
      minLength: 1,
    },
    active: {
      type: 'boolean',
      description: 'Активация пользователя',
      default: 'false',
    },
    hash: {
      type: 'string',
      description: 'Хэшированный пароль',
      minLength: 1,
    },
    createdAt,
    updatedAt,
    deletedAt,
  },
} as const satisfies JSONSchema;
