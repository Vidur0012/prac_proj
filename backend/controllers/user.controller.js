const { validationResult } = require('express-validator');
const { ValidationFailureError } = require('../customErrors/errors');
const userService = require("../services/user.service.js");

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            const error = new ValidationFailureError('Input validation failed.');
            error.data = errors.array();
            throw error;
        }
        const { email, password } = req.body;
        const createdUser = await userService.signup(email, password);
        res.status(201).json({ message: 'User signed up!', userId: createdUser.id });
    }
    catch (err) {
        next(err);
    }
};

exports.signin = async (req, res, next) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            const error = new ValidationFailureError('Input validation failed.');
            error.data = errors.array();
            throw error;
        }
        const { email, password } = req.body;

        const user = await userService.signin(email, password);
        res.status(200).json({ message: "Succesfully signed in!", userId: user.id.toString() });
    }
    catch (err) {
        next(err);
    }
};