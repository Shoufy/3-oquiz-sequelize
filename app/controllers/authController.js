const User = require("../models/User");

const authController = {
    loginPage: (req, res) => {
        res.render('login');
    },
    loginAction: (req, res) => {
        //console.log("req.body", req.body);
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({
            where: { email : email}
        }).then((user) => {
            if (!user) {
                return res.render('login', {
                    error: `L'adresse email ne correspond à aucun compte`
                });
            }
            console.log("utilisateur trouvé, connexion en cours de ", user.toJSON());
            res.render('login');
            
        })
    }
}

module.exports = authController;