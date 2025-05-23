const express = require('express');
const router = express.Router();
const {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.get('/tasks', getAllTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;