require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' } // Token validity (optional)
        );

        // Determine redirection based on role
        let redirectTo = '';
        if (user.role === 'Admin') {
            redirectTo = '/admin/dashboard';
        } else if (user.role === 'editor') {
            redirectTo = '/cashier/dashboard';
        } else {
            return res.status(403).json({ message: 'Unauthorized role' });
        }

        // Send response with the token and redirection URL
        res.status(200).json({
            message: 'Login successful',
            token,
            role: user.role,
            redirectTo,
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({
            message: 'Login failed',
            error: err.message,
        });
    }
};

exports.register = async (req, res) => {
    try {
        const { username,password, fullname, role } = req.body;

        // Validate required fields
        if (!fullname || !username || !password || !role) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check for valid role
        if (!['Admin', 'editor'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role specified.' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user
        const newUser = await User.create({
            username,
            password: hashedPassword,
            fullname,
            role,
        });

        // Generate a token for the new user
        const token = jwt.sign(
            { id: newUser.id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' } // Optional: token expiration
        );

        // Respond with success and the token
        res.status(201).json({
            message: 'User registered successfully.',
            user: {
                id: newUser.id,
                fullname: newUser.fullname,
                username: newUser.username,
                role: newUser.role,
            },
            token,
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Registration failed.', error: error.message });
    }
};

