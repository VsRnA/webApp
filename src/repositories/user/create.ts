import { CreatePayload } from '#controllers/user/create';
import { WhereOptions } from 'sequelize';
import { hashPassword } from '#services/user/hash';
import User from '#models/user.model';
import { plainify } from '#common/types/sequelize';

export async function createUser(payload: CreatePayload) {
  const hashPass = hashPassword(payload.password);

  const where: WhereOptions = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    hash: hashPass,
  };

  const user = plainify(await User.create(where));

  if (!user) throw new Error('[USER] USER DOES NOT CREATE');
}
