import sequelize from '#config/sequelize';
import { CreationOptional, Model,
  InferAttributes, InferCreationAttributes,
  DataTypes, Attributes, CreationAttributes } from 'sequelize';
import User from '#models/user.model';

export type GroupAttribute = Attributes<Group>
export type GroupCreationAttrubute = CreationAttributes<Group>

export default class Group extends Model<InferAttributes<Group>, InferCreationAttributes<Group>> {
  /** ID */
  declare id: CreationOptional<number>;
  /** Название группы */
  declare name: string;
  /** Дата создания */
  declare createdAt: CreationOptional<string>;
  /** Дата обновления */
  declare updatedAt: CreationOptional<string>;
  /** Дата софт-удаления */
  declare deletedAt: CreationOptional<string | null>;
}

Group.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: 'groups',
  modelName: 'group',
  paranoid: true,
});

Group.hasOne(User);
