// const { v4:UUIDV4 } = require('uuid');
const { User } = require("../models");
const bcrypt = require("bcrypt");

const seedUsers = async () => {
  const userData = [
    {
      firstName: "admin",
      lastName: "admin",
      userEmail: "admin@admin.com",
      password: await bcrypt.hash("root", 10),
    },
  ];

  await User.bulkCreate(userData);
};

module.exports = seedUsers;
