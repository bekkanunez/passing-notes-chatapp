// import models
const Message = require('./Message');
const Conversation = require('./Conversation');
const Groupmember = require('./Groupmember');
const Contact = require('./Contact');

// Message hasOne Conversation
Message.hasOne(Conversation, {
    foreignKey: 'conversation_id',
});
// Conversation hasMany Groupmember
Conversation.hasMany(Message, {
  
});
// Groupmember belongTo Conversation
Groupmember.belongsTo(Conversation, {
  foreignKey: 'contact_id',
  foreignKey: 'conversation_id'
});

// Contact hasMany Groupmember
Contact.hasMany(Groupmember, {
    
});


module.exports = {
  Message,
  Conversation,
  Groupmember,
  Contact,
};
