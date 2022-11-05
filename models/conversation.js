const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Conversation model
class Conversation extends Model {}

// create fields/columns for Conversation model
Conversation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "conversation",
  }
);

module.exports = Conversation;