const router = require("express").Router();

<<<<<<< HEAD
const memberRoutes = require('./member-routes');
const messageRoutes = require('./message-routes');
const contactRoutes = require('./contact-router');
=======
const memberRoutes = require("./member-routes");
const messageRoutes = require("./message-routes");
// const contactRoutes = require("./contact-router");
>>>>>>> 289d2db746740793f9bdfdae6c01a648c7ec22ba

router.use("/member", memberRoutes);
router.use("/message", messageRoutes);
// router.use("/contact", contactRoutes);

module.exports = router;
