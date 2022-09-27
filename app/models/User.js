const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataBase');

class User extends Model {

}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    tableName: "user",
    timestamps: false
})

module.exports = User;