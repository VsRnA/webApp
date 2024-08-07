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
