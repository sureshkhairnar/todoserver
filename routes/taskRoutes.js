const express = require("express");
const router = express.Router();
const { taskValidationRules, validate } = require("../middlewares/validator");
const TaskController = require("../controllers/taskController");

// GET all tasks
router.get("/", TaskController.getAllTasks);

// GET one task
router.get("/:id", TaskController.getTask);

// POST create task
router.post("/", taskValidationRules(), validate, TaskController.createTask);

// PUT update task
router.put("/:id", taskValidationRules(), validate, TaskController.updateTask);

// DELETE task
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
