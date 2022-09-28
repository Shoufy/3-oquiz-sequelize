const { Quiz } = require("../models")

const mainController = {
    indexAction: (req, res) => {
        Quiz.findAll({ 
            include : 'user'
        }).then((quizzes) => {
            console.log("quizzees: ", quizzes)
            res.render('index', { 
                quizzes
            })  
        }).catch((error) => {
            next(error);
        });
        //peut aussi s'écrire .catch(next);
    },
    profilPage: (req, res, next) => {
        res.render('profil');
    },
    adminPage: (req, res, next) => {
        res.render('admin');
    },
    signupPage: (req, res, next) => {
        res.render('signup');
    },
}

module.exports = mainController;