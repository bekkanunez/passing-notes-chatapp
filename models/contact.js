const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Contact model
class Contact extends Model {}

// create fields/columns for Contact model
Contact.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // profile_pic: {
    //   
    // },
    receiver_num: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "contact",
  }
);

module.exports = Contact;
