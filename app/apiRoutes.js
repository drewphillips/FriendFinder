var friends = require("../app/data/friends");

module.exports = function (app) {
    app.post("api/friends", function (req, res) {
        var userData = req.body;
        console.log(userData);

    var bestmatch;
    var bestscore = 999;

    for (var i = 0; i < friends.length; i++) {
        var score = 0;
        for (var j = 0; j < 10; j++) {
            var partialsum = Math.abs(friends[i].scores[j] - friends.scores);
            score += partialsum;
        }
        if (score < bestscore) {
            bestscore = score;
            bestmatch = i;
        }
    }
    res.json(friends[bestmatch]);
})
}