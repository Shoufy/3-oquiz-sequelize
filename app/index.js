const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./dataBase');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully !');
    })
    .catch((error) => {
        console.error('Unable to connect to the database : ', error);
    })