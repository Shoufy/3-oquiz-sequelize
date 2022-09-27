module.exports = (req, res, next) => {
    if (req.session.userConnected) {
        if (['admin', 'user'].includes(req.session.userConnected.role)) {
            return next();
        }
    }

    return res.status(401).render('error/401');

}