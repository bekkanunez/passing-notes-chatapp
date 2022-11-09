const router = require('express').Router();
<<<<<<< HEAD
const { GroupMember } = require('../../models');

router.post('/login', async (req, res) => {
    try {
      const memberData = await GroupMember.findOne({ where: { email: req.body.email } });
=======
const { Groupmember } = require('../../models');
const { addUser } = require('../../src/database');


router.post('/login', async (req, res) => {
    try {
    //  const user = await addUser(req.body.name, req.body.lastname , req.body.email );
      const memberData = await Groupmember.findOne({ where: { email: req.body.email } });
>>>>>>> 556f13f (modified database.js)
  
      if (!memberData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      const correctPassword = await memberData.checkPassword(req.body.password);
  
      if (!correctPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
    

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {

      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }

  });
  
  module.exports = router;
  

