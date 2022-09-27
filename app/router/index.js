const mainController = require('../controllers/mainController');
const quizController = require('../controllers/quizController');
const tagsController = require('../controllers/tagsController');
const authController = require('../controllers/authController');

const router = require('express').Router();

// Page d'accueil
router.get('/', mainController.indexAction);
// Page détail quiz
router.get('/quiz/:id', quizController.detailAction);
// Page de listing des tags
router.get('/tags', tagsController.indexAction);
// Page détail d'un tag
router.get('/tag/:id', tagsController.detailAction);
// Page login
router.get('/login', authController.loginPage);
// Soumission d'un login
router.post('/login', authController.loginAction);
// Page profil
router.get('/profil', mainController.profilPage);

module.exports = router;