import { validateRequest } from '#errors/validate';
import { UserAttribute } from '#models/user.model';
import { findUserByEmail } from '#repositories/user/find';
import { RequestCreateSchema, ResponseCreateSchema } from '#schemas/user/create';

export type RegisterType = Pick<UserAttribute, 'name' | 'email' | 'phone' >  & {
  password: string,
}

export async function create(payload: RegisterType) {
  validateRequest(RequestCreateSchema, payload);

  const user =
  
  if (pretendent) throw Error('[CREATE USER] Пользователей с таким ${}');
  return { data: user };
}
