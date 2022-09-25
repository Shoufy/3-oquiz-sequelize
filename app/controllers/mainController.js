const mainController = {
    indexAction: (req, res) => {
        res.sendFile(__dirname + '../../integration/index.html');
    }
}

module.exports = mainController;