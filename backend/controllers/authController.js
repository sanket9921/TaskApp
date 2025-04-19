const user = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwtUtils');
const logger = require('../utils/logger');


exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        logger.info('Signup request received');
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            logger.warn(`Signup failed: User with email ${email} already exists`);
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ email, password: hashedPassword });
        await newUser.save();
        logger.info(`User with email ${email} created successfully`);
        res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        logger.error('Server error during signup', error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            logger.warn(`Login failed: User with email ${email} not found`);
            return res.status(400).json({ message: "user not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            logger.warn(`Login failed: Invalid password for user with email ${email}`);
            return res.status(400).json({ message: "invalid password" });
        }

        const token = generateToken({ id: existingUser._id });
        logger.info(`User with email ${email} logged in successfully`);
        res.status(200).json({ message: "login successful", token });
    }
    catch (error) {
        logger.error('Server error during login', error);
        res.status(500).json({ message: "server error" });
    }
}


