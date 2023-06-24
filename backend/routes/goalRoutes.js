const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController.js");

// router.get("/", getGoals);
// router.post("/", setGoals);
// insted of above two lines can be done in one
router.route("/").get(getGoals).post(setGoals);

router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
