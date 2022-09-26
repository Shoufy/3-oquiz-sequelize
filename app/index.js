const dotenv = require('dotenv');
//const sequelize = require('./dataBase');
const express = require('express');
dotenv.config();
const router = require('./router');

const app = express();
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(router); // ajout du router

app.listen(port, () => {
    console.log(`lecture de l app sur : http://localhost:${port}`)
})





//TEST EXOS
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

//raw true nous permet de récupérer un objet (et NON plus le model) utilisé qd on veut JSON
Tag.findByPk(2, {raw: true}) // soit Tag.findByPk(2) tout simplement
    .then((tag) => {
        console.log('tag number 2 : ', tag);
    })
    .catch((error) => {
        console.error('Erreur capturé : ', {
            name: error.name,
            message: error.message
        })
    })
*/

 /*
 sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully !');
              Answer.findAll()
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
                  }) 
    })
    .catch((error) => {
        console.error('Unable to connect to the database : ', error);
    })
    */

// Test des relations : Récupération utilisateur + ses quiz
/* User.findOne({ include : 'quizzes'}) // Utilisation de l'alias qu'on a donné à la relation
    .then((user) => {
        //console.log(user);
        console.log(user.quizzes); // toutes les questions de l'utilisateur
    })

    Quiz.findOne({ include : 'questions'}) // Utilisation de l'alias qu'on a donné à la relation
    .then((quiz) => {
        //console.log(user);
        console.log(quiz); // toutes les questions de l'utilisateur
    })

    Quiz.findOne({ include : 'tags'})
        .then((quiz) => {
            console.log(quiz);
        })

    Question.findOne({ include : 'good_answer'})
        .then((question) => {
            console.log(question);
            console.log(question.answers);
        })
    Question.findOne({ include : 'answers'})
        .then((question) => {
            console.log(question);
            console.log(question.answers);
        }) 
Question.findOne({ include: 'level'})
        .then((question) => {
            console.log(question);
        })

User.findOne({ include : {
    association: 'quizzes',
    include: ['tags', 'questions']
    }
}) // Utilisation de l'alias qu'on a donné à la relation
    .then((user) => {
        //console.log(user);
        console.log(user.quizzes); // toutes les questions de l'utilisateur
    })
    
    User.findOne({ include : {
        association: 'quizzes',
        include: ['tags', {
            association: 'questions',
        include: ['good_answer']
        }]
    }}) // Utilisation de l'alias qu'on a donné à la relation
        .then((user) => {
            //console.log(user);
            console.log(user.quizzes[0].questions[0].good_answer.description); // toutes les questions de l'utilisateur
        })
  */