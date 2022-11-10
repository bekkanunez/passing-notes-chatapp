// const seedContacts = require('./contact-seeds');
// const seedConversations = require('./conversation-seeds');
// const seedGroupMembers = require('./groupmember-seeds');
// const seedMessages = require('./message-seeds');
const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  // await seedContacts();
  // console.log('\n----- CONTACT SEEDED -----\n');

  // await seedConversations();
  // console.log('\n----- CONVERSATION SEEDED -----\n');

  // await seedGroupMembers();
  // console.log('\n----- GROUP MEMBER SEEDED -----\n');

  // await seedMessages();
  // console.log('\n----- Message SEEDED -----\n');

  await seedUsers();
  console.log('\n----- User SEEDED -----\n');

  console.log('\n----- DATABASE SYNCED -----\n');
  process.exit(0);
};

seedAll();
