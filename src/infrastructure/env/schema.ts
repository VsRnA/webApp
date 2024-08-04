import { JSONSchema } from '#common/types/jsonSchema';

export const schema = {
  type: 'object',
  properties: {
    PORT: {
      type: 'number',
      description: 'Server Port',
      default: 3000,
    },
  },
  required: ['PORT'],
} as const satisfies JSONSchema;
