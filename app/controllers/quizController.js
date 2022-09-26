const { Quiz } = require("../models");

const quizController = {
    detailAction: (req, res) => {
        const quizId = req.params.id;
        Quiz.findByPk(quizId, {
            include: [
                'user',
                'tags',
                {
                    association: 'questions',
                    include: ['answers', 'level']
                }
            ]
        }).then((quiz) => {
            1//console.log("Quiz", quiz.toJSON());
            res.render('quiz', quiz.dataValues);
        });
    }
}

module.exports = quizController;