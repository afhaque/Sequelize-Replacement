var db = require("../models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.Author.findAll({ include: [db.Post] }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    db.Author.findOne({
      include: [db.Post],
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.put("/api/authors", function(req, res) {
    db.Author.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
