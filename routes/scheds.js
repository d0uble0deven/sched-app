var express = require("express");
var router = express.Router();
var schedsCtrl = require("../controllers/scheds");

router.get("/new", isLoggedIn, schedsCtrl.new);
router.post("/index", isLoggedIn, schedsCtrl.create);
router.get("/:id", isLoggedIn, schedsCtrl.show);
router.put("/:id", isLoggedIn, schedsCtrl.update);
router.delete("/:id", isLoggedIn, schedsCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;