var db = require("./models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.Authors.findAll().then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/authors", function(req, res) {
    db.Authors.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Authors.delete({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.update("/api/authors", function(req, res) {
    db.Authors.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
