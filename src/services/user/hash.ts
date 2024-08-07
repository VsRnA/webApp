import bcrypt from 'bcrypt';
import { env } from '#infrastructure/env/index';

export function hashPassword(password: string) {
  const hash = bcrypt.hashSync(password, env.get('PASSWORD_SALT'));
  return hash;
}
