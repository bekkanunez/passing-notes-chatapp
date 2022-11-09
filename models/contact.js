// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // create our Contact model
// class Contact extends Model {}

// // create fields/columns for Contact model
// Contact.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // profile_pic: {

//     // },
//     receiver_email: {
//       type: DataTypes.STRING,
//       validate: {
//         isEmail: true,
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "contact",
//   }
// );

// module.exports = Contact;
