const router = require('express').Router();

const memeberRoutes = require('./member-routes');
const messageRoutes = require('./message-routes');
const contactRoutes = require('./contact-router');

router.use('/member', memberRoutes);
router.use('/message', messageRoutes);
router.use('/contact', contactRoutes);

module.exports = router;