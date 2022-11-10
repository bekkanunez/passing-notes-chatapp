// // import models
const Message = require('./Message');
// const Conversation = require('./Conversation');
// const GroupMember = require('./GroupMember');
// const Contact = require('./Contact');
const User = require('./User');

// User.hasMany(Message, {
//     primaryKey: "message_id",
// })
// // Message hasOne Conversation
// Message.hasOne(Conversation, {
//     foreignKey: 'conversation_id',
// });
// // Conversation hasMany GroupMember
// Conversation.hasMany(Message, {
  
// });
// // GroupMember belongTo Conversation
// GroupMember.belongsTo(Conversation, {
//   foreignKey: 'contact_id',
//   foreignKey: 'conversation_id'
// });

// // Contact hasMany GroupMember
// Contact.hasMany(GroupMember, {
    
// });


module.exports = {
  User,
  Message
//   GroupMember,
//   Contact,
};
