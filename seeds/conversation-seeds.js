const { Conversation } = require('../models');

const conversationData = [
  {
    group_name: 'UT Bootcamp'
  },
  {
    group_name: 'Frontend'
  },
  {
    group_name: 'Backend'
  },
  {
    group_name: 'Database'
  },
  {
    group_name: "N/A"
  },

 
 
 
];

const seedConversations = () => Conversation.bulkCreate(conversationData);

module.exports = seedConversations;
