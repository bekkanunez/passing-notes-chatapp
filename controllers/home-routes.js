const router = require('express').Router();


router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/messages');
    return;
  }

  res.render('messages');
});

router.get('/messages', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/messages');
      return;
    }
  
    res.render('messages');
  });


