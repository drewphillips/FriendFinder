module.exports = function (app) {
    app.post("/api/frineds", function(req, res){
        console.log(req.body)
        res.json(req.body)
    })
}