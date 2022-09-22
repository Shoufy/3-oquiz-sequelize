const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase');

class Level extends Model {

}

Level.init({
    name: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    tableName: "level",
    timestamps: false
})

module.exports = Level;