const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase');

class Question extends Model {

}

Question.init({
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anecdote: {
        type: DataTypes.STRING,
    },
    wiki: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    tableName: "question",
    timestamps: false
})

module.exports = Question;