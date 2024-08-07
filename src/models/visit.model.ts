import sequelize from '#config/sequelize';
import { CreationOptional, Model, InferAttributes, InferCreationAttributes, DataTypes, Attributes, CreationAttributes } from 'sequelize';
import User from '#models/user.model';
import Player from '#models/player.model';
import Group from '#models/group.model';
import Employment from '#models/employment.model';

export type VisitAttribute = Attributes<Visit>
export type VisitCreationAttrubute = CreationAttributes<Visit>

export default class Visit extends Model<InferAttributes<Visit>, InferCreationAttributes<Visit>> {
  /** ID */
  declare id: CreationOptional<number>;
  /** Дата создания */
  declare createdAt: CreationOptional<string>;
  /** Дата обновления */
  declare updatedAt: CreationOptional<string>;
  /** Дата софт-удаления */
  declare deletedAt: CreationOptional<string | null>;
}

Visit.init({
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
  tableName: 'visits',
  modelName: 'visit',
  paranoid: true,
});

Visit.hasOne(User);
Visit.hasOne(Group);
Visit.hasOne(Employment);
Visit.hasMany(Player);
