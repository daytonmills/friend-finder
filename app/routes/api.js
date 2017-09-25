const friendData = require('../data/friends');

module.exports = function(app)
{
    app.get('/api/friends', (req, res) =>
    {
        return res.json(friendData);
    });

    app.post('/api/friends', (req, res) =>
    {
        var user = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };
        // ¯\_(ツ)_/¯
    });
};