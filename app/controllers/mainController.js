const mainController = {
    indexAction: (req, res) => {
        res.sendFile('/public/index.html', {
            root: __dirname + '../..'
        });       
    }
}

module.exports = mainController;