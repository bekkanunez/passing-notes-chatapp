<<<<<<< HEAD
const router = require("express").Router();
=======
const router = require('express').Router();


router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/messages');
    return;
  }

  res.render('messages');
});
>>>>>>> 556f13f (modified database.js)

router.get('/messages', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/messages');
      return;
    }
  
    res.render('messages');
  });

module.exports = router;



