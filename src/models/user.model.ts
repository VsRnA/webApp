import sequelize from '#config/sequelize';
import { CreationOptional, Model, InferAttributes, InferCreationAttributes, DataTypes, Attributes, CreationAttributes } from 'sequelize';

export type UserAttribute = Attributes<User>
export type UserCreationAttrubute = CreationAttributes<User>

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  /** ID */
  declare id: CreationOptional<number>;
  /** Имя */
  declare name: string;
  /** Почта */
  declare email: string;
  /** Телефон */
  declare phone: string;
  /** Роль */
  declare role: 'user' | 'admin' | 'manager' | 'coach';
  /** Активность аккаунта */
  declare active: boolean;
  /** Хэш пароля */
  declare hash: string;
  /** Дата создания */
  declare createdAt: CreationOptional<string>;
  /** Дата обновления */
  declare updatedAt: CreationOptional<string>;
  /** Дата софт-удаления */
  declare deletedAt: CreationOptional<string | null>;
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin', 'manager', 'coach'),
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: 'users',
  modelName: 'user',
  paranoid: true,
});
