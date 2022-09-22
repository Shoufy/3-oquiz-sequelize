const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./dataBase');

const Answer = require('./models/Answer');
const Level = require('./models/Level');

//creation of new Level, SAME BELOW
/* const newLevel = new Level({ name: "Invincible" });
newLevel.save()
    .then((levelSaved) => {
        console.log("levelSaved: ", levelSaved);
    }) 
// same same but different 
Level.create({ name: "Very invincible" })
    .then((levelSaved) => {
        console.log("levelSaved: ", levelSaved);
    })
*/

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully !');
        /*       Answer.findAll()
                  .then((answers) => {
                      console.log('Answers: ', answers);
                  }) 
                  Answer.findOne()
                  .then((answer) => {
                      //console.log('Answer: ', answer);
                      //console.log('Answer: ', answer.getDataValue('description'));
                      console.log('Answer: ', answer.description);
                  })
                  
                  Level.findAll()
                  .then((levels) => {
                      console.log('Levels: ', levels);
                  }) 
                  Level.findOne()
                  .then((level) => {
                      console.log('Level: ', level.name);
                  }) */
    })
    .catch((error) => {
        console.error('Unable to connect to the database : ', error);
    })