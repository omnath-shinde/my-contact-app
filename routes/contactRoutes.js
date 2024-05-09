const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHadler.js");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.route("/").get(getContacts);
// router.route("/").post(createContact);

// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;

/* */
// router.route("/").get((request, response) => {
//     response.status(200).json({ message: "Get all contacts" });
// });
// router.route("/").post((request, response) => {
//     response.status(200).json({ message: "Create a Contact" });
// });
// router.route("/:id").get((request, response) => {
//     response.status(200).json({ message: `Get a Contact for ${request.params.id}` });
// });
// router.route("/:id").put((request, response) => {
//     response.status(200).json({ message: `Update a Contact for ${request.params.id}` });
// });
// router.route("/:id").delete((request, response) => {
//     response.status(200).json({ message: `Delete a Contact for ${request.params.id}` });
// });
