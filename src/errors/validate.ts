import Ajv from 'ajv';
import { JSONSchema, SchemaToType } from '#common/types/jsonSchema';

const ajv = new Ajv(
  {
    allErrors: true,
    coerceTypes: true,
    removeAdditional: true,
    useDefaults: true,
  },
);

export function validateResponse<T extends JSONSchema>(schema:T, data:any) {
  const dataValidate = { ...data } as SchemaToType<T>;
  const validate = ajv.compile(schema);
  if (!validate(dataValidate)) {
    throw new Error(JSON.stringify(validate.errors));
  }
  return true;
}

export function validateRequest<T extends JSONSchema>(schema:T, data:any) {
  const dataValidate = { ...data } as SchemaToType<T>;
  const validate = ajv.compile(schema);
  if (!validate(dataValidate)) {
    throw new Error(JSON.stringify(validate.errors));
  }
  return true;
}
