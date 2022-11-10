const User = require("../models/user");
const router = require("express").Router();


router.get('/messages', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/messages');
      return;
    }
  
    const templateData = {firstName: 'My first name', email: 'admin@gmail.com'};

    res.render('messages', templateData);
  });

router.get('/', async (req, res) => {
  try {
    const userDataDb = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['email', 'password'],
        },
      ],
    })

    const users = userDataDb.map((User) =>
    users.get({ plain: true }));
    res.render('login', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





module.exports = router;



