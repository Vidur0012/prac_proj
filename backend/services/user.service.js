const bcrypt = require('bcryptjs');
const { NotFoundError, UnauthorizedError } = require("../customErrors/errors.js")
const { User } = require('../models/user.model.js');

exports.signup = async (email, password) => {
    const hashedPw = await bcrypt.hash(password, 12);
    const user = await User.create({ email: email, password: hashedPw });
    return user;
};

exports.signin = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        throw new NotFoundError('A user with this username could not be found.');
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        throw new UnauthorizedError('Wrong password!');
    }
    return user;
};