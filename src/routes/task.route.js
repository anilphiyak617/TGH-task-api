import express from 'express';
import TaskController from '../controllers/task.controller.js';

const router = express.Router();

// Get a list of all tasks
router.get('', TaskController.getAllTasks);

// Get a task by ID
router.get('/:id', TaskController.getTaskById);

// Create a new task
router.post('', TaskController.createTask);

// Mark a task as completed
router.put('/:id/complete', TaskController.toggleTaskAsComplete);

// Mark a task as cancelled
router.put('/:id/cancel', TaskController.toggleTaskAsCancelled);

// Delete a task
router.delete('/:id/delete', TaskController.deleteTask);

export default router;
