const router = require("express").Router();
const authCtrl = require("../controllers/authCtrl");
const userCtrl = require("../controllers/userCtrl");
const authAdmin = require("../middleware/auth")

router.post("/register", authCtrl.register);

router.post("/login", authCtrl.login);

router.post("/logout", authCtrl.logout);

router.post("/refresh_token", authCtrl.generateAccessToken);

router.get("/users", authAdmin, userCtrl.users)

module.exports = router;