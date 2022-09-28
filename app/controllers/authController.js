const { User } = require("../models");
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
    },

    signupAction: (req, res, next) => {
        // lastname, firstname, email, password, passwordConfirm (req.body)
        const { lastname, firstname, email, password, passwordConfirm } = req.body;
        // trim() retire les espaces en début et à la fin d'un string
        try {
            if (lastname.trim() === '') {
                throw new Error('Le nom n\'est pas saisi');
            }
            if (firstname.trim() === '') {
                throw new Error('Le prénom n\'est pas saisi');
            }
            if (email.trim() === '') {
                throw new Error('L\'email n\'est pas saisi');
            }
            if (password.trim() === '') {
                throw new Error('Le mot de passe n\'est pas saisi');
            }
            if (passwordConfirm.trim() !== password.trim()) {
                throw new Error('Les mots de passe ne correspondent pas');
            }

            let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexMail.test(email.toLowerCase())) {
                throw new Error('L\'adresse mail n\'est pas bien structurée');
            }

            User.findOne({ where: { email: email } })
                .then((user) => {
                    if (user) {
                        throw new Error('L\'utilisateur existe déjà');
                    }

                    const encryptedPassword = bcrypt.hashSync(password, 10);

                    User.create({
                        email,
                        firstname,
                        lastname,
                        password: encryptedPassword
                    }).then((createdUser) => {
                        req.session.userConnected = createdUser;
                        res.redirect('/');
                    }).catch((error) => {
                        return res.render('signup', {
                            error: error.message
                        });
                    })

                })
                .catch((error) => {
                    return res.render('signup', {
                        error: error.message
                    });
                });

        }

        catch (error) {
            return res.render('signup', {
                error: error.message
            });
        }
    },

    signoutAction: (req, res) => {
        req.session.userConnected = null;
        res.redirect('/');
    }
}

module.exports = authController;