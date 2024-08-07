import sequelize from '#config/sequelize';
import { CreationOptional, Model, InferAttributes, InferCreationAttributes, DataTypes, Attributes, CreationAttributes } from 'sequelize';
import User from '#models/user.model';
import Group from '#models/group.model';

export type EmploymentAttribute = Attributes<Employment>
export type EmploymentCreationAttrubute = CreationAttributes<Employment>

export default class Employment extends Model<InferAttributes<Employment>, InferCreationAttributes<Employment>> {
  /** ID */
  declare id: CreationOptional<number>;
  /** Дата создания */
  declare createdAt: CreationOptional<string>;
  /** Дата обновления */
  declare updatedAt: CreationOptional<string>;
  /** Дата софт-удаления */
  declare deletedAt: CreationOptional<string | null>;
}

Employment.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: 'trainings',
  modelName: 'training',
  paranoid: true,
});

Employment.hasOne(User);
Employment.hasOne(Group);
