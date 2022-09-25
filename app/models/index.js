const Answer = require('./Answer');
const Level = require('./Level');
const Question = require('./Question');
const Quiz = require('./Quiz');
const Tag = require('./Tag');
const User = require('./User');

//User et Quiz (relation OneToMany)
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    as: 'quizzes',
})
Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
})

//Question et Quiz (relation OneToMany)
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions'
})
Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'quizzes'
})

//Quiz et Tag (relation ManyToMany)
Quiz.belongsToMany(Tag, {
    foreignKey: 'quiz_id', // la clé étrangère de quiz
    as: 'tags',
    otherKey: 'tag_id',
    through: 'quiz_tag', // a travers la table de corespondance
    timestamps: false,
})
Tag.belongsToMany(Quiz, {
    foreignKey: 'tag_id', // la clé étrangère de tag
    as: 'quizzes',
    otherKey: 'quiz_id',
    through: 'quiz_tag',
    timestamps: false,
})

// Question et Reponse (valider relation OneToOne)
Question.belongsTo(Answer, {
    foreignKey: 'answer_id',
    as: 'good_answer',
})
Answer.hasOne(Question, {
    foreignKey: 'answer_id',
    as: 'question_answered',
})

// Question et Reponse (posséder relation OneToMany)
Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers',
})
Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'questions'
})

// Question et Level (relation oneToMany)
Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level',
})
Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions'
})

module.exports = { Answer, Level, Question, Quiz, Tag, User}