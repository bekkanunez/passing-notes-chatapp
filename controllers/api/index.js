const router = require("express").Router();

const userRoutes = require("./userRoute");
// const messageRoutes = require("./message-routes");
// // const contactRoutes = require("./contact-router");

router.use("/user", userRoutes);
// router.use("/message", messageRoutes);
// // router.use("/contact", contactRoutes);

module.exports = router;
