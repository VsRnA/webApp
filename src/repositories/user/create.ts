import { CreatePayload } from '#controllers/user/create';
import { WhereOptions } from 'sequelize';
import { hashPassword } from '#services/user/hash';
import User from '#models/user.model';
import { plainify } from '#common/types/sequelize';

export async function createUser(payload: CreatePayload) {
  const where: WhereOptions = {};
  const hash = hashPassword(payload.password);

  if (payload.name) where.name = payload.name;
  if (payload.email) where.email = payload.email;
  if (payload.phone) where.phone = payload.phone;
  where.hash = hash;

  const user = plainify(await User.create(where));

  if (!user) throw new Error('[USER] USER DOES NOT CREATE');
}
