const { Tag } = require("../models");

const tagsController = {
    indexAction: (req, res) => {
        Tag.findAll()
            .then((tags) => {
                res.render('tags', {
                    tags
                });
            })
            .catch((error) => {
                next(error);
            });
    },

    detailAction: (req, res) => {
        const tagId = req.params.id;
        Tag.findByPk(tagId, {
            include: {
                association: 'quizzes',
                include: 'user'
            }
        }).then((tag) => {
            //console.log("tag : ", tag.toJSON());
            res.render('tag', tag.dataValues);
        })
        
    }
}

module.exports = tagsController;