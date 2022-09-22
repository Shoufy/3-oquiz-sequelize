const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase');

class Tag extends Model {

}

Tag.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "tag",
    timestamps: false
})

module.exports = Tag;