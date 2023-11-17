'use strict';

var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    User = mongoose.model('User');

exports.register = async (req, res) => {
    if (req.user) {
        var newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        await newUser.save().then((user) => {
            user.hash_password = undefined;
            return res.json(user);
        }).catch(err => {
            console.log(err);
            return res.status(400).send({
                message: "This email already exists."
            });
        });
    }
    else {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


exports.sign_in = function (req, res) {
    User.findOne({
        email: req.body.email
    }).then((user) => {
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ email: user.email, firstName: user.firstName, lastName: user.lastName, _id: user._id }, 'RESTFULAPIs') });
    }).catch(err => {
        throw err
    });
};



exports.get_all = function (req, res) {
    if (req.user) {
        User.find({
        }).then((user) => {

            return res.json(user);
        })
            .catch(err => {
                throw err
            });
    }
    else {
        return res.status(401).json({ message: 'Invalid token' });
    }

}



exports.edit = async function (req, res) {
    if (req.user) {
        const { id } = req.params;
        try {
            const user = await User.findByIdAndUpdate(id, { firstName: req.body.firstName, lastName: req.body.lastName }, { new: true });
            return res.json(user);
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

