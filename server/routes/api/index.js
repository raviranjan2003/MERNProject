const express = require('express');
const router = express.Router();
const contactForm = require('../../controllers/contact-controller');
// const { contactSchema } = require('../../validators/authValidator');
// const validate = require('../../middlewares/validateMiddleware');

router.use('/auth', require("./auth-api"));

router.post('/contact',contactForm);

module.exports = router;