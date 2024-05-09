const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHadler");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

/** */
// router.post("/register", (request, response) => {
//     response.json({ message: "Register the user" });
// });
// router.post("/login", (request, response) => {
//     response.json({ message: "Login user" });
// });
// router.get("/current", (request, response) => {
//     response.json({ message: "Current user information" });
// });

module.exports = router;
