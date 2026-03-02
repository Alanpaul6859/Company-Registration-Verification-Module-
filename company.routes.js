const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const c = require("../controllers/company.controller");

router.post("/register", auth, c.registerCompany);
router.get("/profile", auth, c.getProfile);

module.exports = router;
