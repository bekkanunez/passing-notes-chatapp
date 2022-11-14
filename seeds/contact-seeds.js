const { Contact } = require('../models');

const contactData = [
  {
    first_name: 'Penelope',
    last_name: 'Leung',
    // profile_pic: 0,
    receiver_email: '',
  },
  {
    first_name: 'Rebecca',
    last_name: 'Nunze',
    // profile_pic: 0,
    receiver_email: '',
  },
  {
    first_name: 'Lindsey',
    last_name: 'Jones',
    // profile_pic: 0,
    receiver_email: '',
  },
  {
    first_name: 'Keshon',
    last_name: 'Royster',
    // profile_pic: 0,
    receiver_email: '',
  },
 
 
 
];

const seedContacts = () => Contact.bulkCreate(contactData);

module.exports = seedContacts;
