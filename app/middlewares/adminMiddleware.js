module.exports = (req, res, next) => {
    if (req.session.userConnected) {
        if (req.session.userConnected.role === 'admin') {
            return next();
        }
        else {
            return res.status(403).render('error/403');
        }
    }

    return res.status(401).render('error/401');

}