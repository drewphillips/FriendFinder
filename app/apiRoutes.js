module.exports = function (app) {
    app.post("/api/frineds", function(req, res){
        console.log(req.body)
        res.json(req.body)

        var userData = req.body;
        console.log(userData);

        console.log(friends);
        friends.push(userData);
    })
}

var bestmatch;
        var bestscore = 999;

        for (var i = 0; i < friends.length; i++) {
            var score = 0;
            for (var j = 0; j < 10; j++) {
                var partialsum = Math.abs(friends[i].scores[j] - userData.scores[j]);
                score += partialsum;
            }
            if (score < bestscore) {
                bestscore = score;
                bestmatch = i;
            }
        }

        res.json(friends[bestmatch]);
