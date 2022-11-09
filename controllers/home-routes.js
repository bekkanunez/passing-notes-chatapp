const router = require('express').Router();


router.get('/messages', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/messages');
      return;
    }
  
    res.render('messages');
  });

module.exports = router;


