import { validateData } from '#errors/validate';
import { UserAttribute } from '#models/user.model';
import { createUser } from '#repositories/user/create';
import { RequestCreateSchema } from '#schemas/user/create';

export type CreatePayload = Pick<UserAttribute, 'name' | 'email' | 'phone' > & {
  password: string
}

export async function create(payload: CreatePayload) {
  validateData(RequestCreateSchema, payload);

  await createUser(payload);

  return { data: true };
}
