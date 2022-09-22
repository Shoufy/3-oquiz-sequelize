const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase');

class Answer extends Model {
  
}

Answer.init({
    description: {
        type: DataTypes.STRING,
    },
}, {
    sequelize: sequelize,
    timestamps: false, //Pr éviter d'avoir les champs createdAt et updatedAt
    tableName: 'answer', //Pr imposer un nom de table, sinon il prend le model au pluriel par défaut
    //modelName: 'Answer' //facultatif
});

        


module.exports = Answer;