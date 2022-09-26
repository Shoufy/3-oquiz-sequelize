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
    }
}

module.exports = mainController;