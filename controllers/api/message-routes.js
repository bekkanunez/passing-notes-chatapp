// const router = require('express').Router();
// const { Message } = require('../../models');

// router.get('/', (req, res) => {
//     readFromFile('./src/data.js').then((data) => res.json(JSON.parse(data)));
//   });
  
//   router.post('/', (req, res) => {
//     console.log(req.body);
  
//     const { id, sender_num, text_message, message_time, conversation_id } = req.body;
  
//     if (req.body) {
//       const newMessage = {
//         id,
//         sender_num,
//         text_message,
//         message_time,
//         conversation_id,
//       };
  
//       readAndAppend(newMessage, 'database');
//       res.json(`Message sent successfully`);
//     } else {
//       res.error('Message did not send');
//     }
//   });
  

// module.exports = router;

