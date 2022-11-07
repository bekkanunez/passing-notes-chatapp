const { UUIDV4, Message } = require('../models');

const messageData = [
  {
    sender_num: '512-920-7889',
    text_message: '',
    message_time: 'TIMESTAMP',
    conversation_id: UUIDV4
  },
  {
    sender_num: '818-620-5105',
    text_message: '',
    message_time: 'TIMESTAMP',
    conversation_id: UUIDV4
  },
  {
    sender_num: '512-876-4878',
    text_message: '',
    message_time: 'TIMESTAMP',
    conversation_id: UUIDV4
  },
  {
    sender_num: '512-586-4433',
    text_message: '',
    message_time: 'TIMESTAMP',
    conversation_id: UUIDV4
  },
];

const seedMessages = () => Message.bulkCreate(messageData);

module.exports = seedMessages;
