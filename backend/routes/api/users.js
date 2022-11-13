const router = require('express').Router();
const UserModel = require('../../database/models/user.model');

router.post('/', (req, res) => {
    const body = req.body;
    const newUser = new UserModel(body);
    newUser.save((err, user) => {
        if (err) {
            return res
                .status(400)
                .json("erreur lors de la création de l'utilisateur");
        } else {
            return res.status(200).json(user);
        }
    });
});

module.exports = router;
