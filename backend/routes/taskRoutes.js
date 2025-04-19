const { createTask, getAllTask, deleteTask, updateTask, updateTaskStatus } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

router.use(authMiddleware)
router.post("/",createTask);
router.get("/",getAllTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);
router.patch("/:id",updateTaskStatus);
module.exports = router;