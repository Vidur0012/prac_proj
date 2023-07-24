const express = require('express');
const { body } = require('express-validator');

const { signup, signin } = require('../controllers/user.controller.js');
const router = express.Router();
const { User } = require('../models/user.model.js');

router.post(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom(async (value, { req }) => {
                const user = await User.findOne({ where: { email: value } })
                if (user) {
                    return Promise.reject('E-Mail address already exists!');
                };
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Password length should be atleast 5.')
    ],
    signup
);

router.post(
    '/signin',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.'),
        body('password')
            .trim()
            .not()
            .isEmpty()
            .withMessage("Password must not be empty.")
    ],
    signin
);

module.exports = router;