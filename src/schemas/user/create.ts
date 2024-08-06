import { createdAt, deletedAt, updatedAt } from '#common/schemas/sequelizeTimestamps';
import { JSONSchema } from '#common/types/jsonSchema';
import user from '#schemas/components/user';

export const RequestCreateSchema = {
  type: 'object',
  required: ['name', 'email', 'phone', 'password'],
  properties: {
    name: user.properties.name,
    email: user.properties.email,
    phone: user.properties.phone,
    password: {
      type: 'string',
      description: 'Пароль пользователя',
      minLength: 1,
    },
  },
} as const satisfies JSONSchema;

export const ResponseCreateSchema = {
  type: 'object',
  required: ['data'],
  properties: {
    data: {
      type: 'object',
      required: ['id', 'name', 'email', 'phone', 'role', 'active', 'hash', 'createdAt', 'updatedAt', 'deletedAt'],
      properties: {
        id: user.properties.id,
        name: user.properties.name,
        email: user.properties.email,
        phone: user.properties.phone,
        role: user.properties.role,
        active: user.properties.active,
        hash: user.properties.hash,
        createdAt,
        updatedAt,
        deletedAt,
      },
    },
  },
} as const satisfies JSONSchema;
