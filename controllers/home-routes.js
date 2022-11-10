const router = require("express").Router();

router.get('/messages', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/messages');
      return;
    }
  
    const templateData = {firstName: 'My first name', email: 'admin@gmail.com'};

    res.render('messages', templateData);
  });

module.exports = router;



