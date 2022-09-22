const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase');

class Quiz extends Model {

}

Quiz.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    theme: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    tableName: "quiz",
    timestamps: false
})

module.exports = Quiz;