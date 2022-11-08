const { UUIDV4, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Group Member model
class GroupMember extends Model {}

// create fields/columns for Group Member model
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
      defaultValue: UUIDV4,
      autoIncrement: true,
      allowNull: false,
      foreignKey: true,
      unique: true,
    },
    joined_time: {
      type: "TIMESTAMP",
      defaultValue: [sequelize.literal("CURRENT_TIMESTAMP"), "MM/DD/YYY 00:00"],
      allowNull: false,
    },
    left_time: {
      type: "TIMESTAMP",
      defaultValue: [sequelize.literal("CURRENT_TIMESTAMP"), "MM/DD/YYY 00:00"],
      allowNull: false,
    },
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
