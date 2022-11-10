// const { UUIDV4, Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // create our Message model
// class Message extends Model {}

// // create fields/columns for Message model
// Message.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       defaultValue: UUIDV4,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//     },
//     sender_num: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     text_message: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     message_time: {
//       type: "TIMESTAMP",
//       defaultValue: [sequelize.literal("CURRENT_TIMESTAMP"), "MM/DD/YYY 00:00"],
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "message",
//   }
// );

// module.exports = Message;
