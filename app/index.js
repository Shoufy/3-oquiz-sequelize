const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./dataBase');

const Answer = require('./models/Answer');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully !');
  /*       Answer.findAll()
            .then((answers) => {
                console.log('Answers: ', answers);
            }) */

            Answer.findOne()
            .then((answer) => {
                //console.log('Answer: ', answer);
                //console.log('Answer: ', answer.getDataValue('description'));
                console.log('Answer: ', answer.description);
            })
    })
    .catch((error) => {
        console.error('Unable to connect to the database : ', error);
    })