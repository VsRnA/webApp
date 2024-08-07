import sequelize from '#config/sequelize';
import { CreationOptional, Model, InferAttributes, InferCreationAttributes, DataTypes, Attributes, CreationAttributes } from 'sequelize';
import Group from '#models/group.model';
import User from '#models/user.model';

export type PlayerAttribute = Attributes<Player>
export type PlayerCreationAttrubute = CreationAttributes<Player>

export default class Player extends Model<InferAttributes<Player>, InferCreationAttributes<Player>> {
  /** ID */
  declare id: CreationOptional<number>;
  /** Имя */
  declare name: string;
  /** Активность аккаунта */
  declare active: boolean;
  /** Дата создания */
  declare createdAt: CreationOptional<string>;
  /** Дата обновления */
  declare updatedAt: CreationOptional<string>;
  /** Дата софт-удаления */
  declare deletedAt: CreationOptional<string | null>;
}

Player.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: 'players',
  modelName: 'player',
  paranoid: true,
});

Player.hasMany(Group);
Player.hasMany(User);
