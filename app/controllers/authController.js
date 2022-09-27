const User = require("../models/User");
const bcrypt = require('bcrypt');

const authController = {
    loginPage: (req, res) => {
        res.render('login');
    },
    loginAction: (req, res, next) => {
        //console.log("req.body", req.body);
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({
            where: { email: email }
        }).then((user) => {
            if (!user) {
                return res.render('login', {
                    error: `L'adresse email ne correspond à aucun compte`,
                    email
                });
            }

            bcrypt.compare(password, user.password, (err, isCorrect) => {
                if (err) {
                    return next(err);
                }

                if (!isCorrect) {
                    return res.render('login', {
                        error: `Le mot de passe n'est pas correct`,
                        email
                    });
                }
                //console.log("utilisateur trouvé, connexion en cours de ", user.toJSON());
                req.session.userConnected = user;
                res.redirect('/');
            });
        })
        .catch((error) => {
            next(error);
        });
    }
}

module.exports = authController;