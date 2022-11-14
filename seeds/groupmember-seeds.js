const { v4:UUIDV4 } = require('uuid');
const { GroupMember } = require('../models');

const groupMemberData = [
  {
    conversation_id: UUIDV4(),
    joined_time: 'TIMESTAMP',
    left_time:'TIMESTAMP'
  },
  {
    conversation_id: UUIDV4(),
    joined_time: 'TIMESTAMP',
    left_time:'TIMESTAMP'
  },
  {
    conversation_id: UUIDV4(),
    joined_time: 'TIMESTAMP',
    left_time:'TIMESTAMP'
  },
  {
    conversation_id: UUIDV4(),
    joined_time: 'TIMESTAMP',
    left_time:'TIMESTAMP'
  },
 
 
 
];

const seedGroupMembers = () => GroupMember.bulkCreate(groupMemberData);

module.exports = seedGroupMembers;