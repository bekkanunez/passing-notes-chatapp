const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our  model
class GroupMember extends Model {}

// create fields/columns for GroupMember model
GroupMember.init(
  {
    contact_id: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
      unique: true,
    },

    conversation_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      allowNull: false,
      foreignKey: true,
      unique: true,
    },
    joined: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    left: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "groupmember",
  }
);

module.exports = GroupMember;
