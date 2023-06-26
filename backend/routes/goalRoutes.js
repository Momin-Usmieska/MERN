const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController.js");

const { protect } = require("../middleware/authMiddleware.js");

// router.get("/", getGoals);
// router.post("/", setGoals);
// insted of above two lines can be done in one
router.route("/").get(protect, getGoals).post(protect, setGoals);

router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
