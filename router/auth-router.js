const express = require ("express")
const router = express.Router()
const authcontrollers = require("../controllers/auth-controller")
const authMiddleware = require('../middlewares/auth-middleware')



// const signupSchema = require("../validators/auth-validator")
// const validate = require("../middlewares/validate-middleware")

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome route");
// })

// router.route("/").get((req, res) => {
//     res.status(200).send("Welcome route");
// })

// router.route("/register").get((req, res) => {
//     res.status(200).send("Welcome route");
// })


router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

// router.route("/register").post( validate(signupSchema) , authcontrollers.register);

module.exports = router;