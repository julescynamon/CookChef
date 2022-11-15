const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../../database/models/user.model');
const { key, keyPub } = require('../../keys');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email }).exec();
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({}, key, {
                    subject: user._id.toString(),
                    expiresIn: 3600 * 24 * 30 * 6, // 6 months
                    algorithm: 'RS256',
                });
                res.cookie('token', token, { httpOnly: true });
                res.json(user);
            } else {
                res.status(400).json('Invalid email or password');
            }
        } else {
            res.status(400).json('Invalid email or password');
        }
    } catch (error) {
        return res.status(400).json('Invalid email or password');
    }
});

router.get('/current', async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        try {
            const decodedToken = jwt.verify(token, keyPub);
            const currentUser = await UserModel.findById(decodedToken.sub)
                .select('-password -__v')
                .exec();
            if (currentUser) {
                res.json(currentUser);
            } else {
                res.json(null);
            }
        } catch (err) {
            res.json(null);
        }
    } else {
        res.json(null);
    }
});

module.exports = router;
