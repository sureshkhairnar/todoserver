const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTask = new Task({ title, description, status });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTask = async (req, res) => {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: "Cannot find task" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.task = task;
  next();
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.deleteOne({ _id: taskId });
    if (deletedTask.deletedCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const deleteAllTasks = async (req, res) => {
//   try {
//     const deletedAllTasks = await Task.deleteMany();
//     if (deletedAllTasks.deletedCount === 0) {
//       return res.status(404).json({ message: "Tasks not found" });
//     }
//     res.json({ message: "All Tasks deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting task:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  //   deleteAllTasks,
  getTask,
  getAllTasks,
};
