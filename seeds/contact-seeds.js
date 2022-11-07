const { Contact } = require('../models');

const contactData = [
  {
    first_name: 'Penelope',
    last_name: 'Leung',
    // profile_pic: 0,
    receiver_num: '512-920-7889',
  },
  {
    first_name: 'Rebecca',
    last_name: 'Nunze',
    // profile_pic: 0,
    receiver_num: '818-620-5105',
  },
  {
    first_name: 'Lindsey',
    last_name: 'Jones',
    // profile_pic: 0,
    receiver_num: '512-876-4878',
  },
  {
    first_name: 'Keshon',
    last_name: 'Royster',
    // profile_pic: 0,
    receiver_num: '512-586-4433',
  },
 
 
 
];

const seedContacts = () => Contact.bulkCreate(contactData);

module.exports = seedContacts;
