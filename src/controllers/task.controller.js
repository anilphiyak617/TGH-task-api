import { createTaskService, deleteTaskService, getAllTasksService, getTaskByIdService, toggleTaskAsCancelledService, toggleTaskAsCompleteService } from '../services/task.service.js';

const TaskController = {

  getAllTasks: async (req, res) => {
    try {
      const tasks = await getAllTasksService();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
  },

  getTaskById: async (req, res) => {
    const taskId = req.params.id;

    try {
      const task = await getTaskByIdService(taskId);
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve task' });
    }
  },

  createTask: async (req, res) => {
    const newTask = req.body;
    console.log(newTask)
    try {
      const createdTask = await createTaskService(newTask);
      res.status(201).json(createdTask);
    } catch (error) {
        // console.log(error)
      res.status(500).json({ error: 'Failed to create task'});
    }
  },



toggleTaskAsComplete: async (req, res) => {
    
    const taskId = req.params.id;

    try {
      
      const updatedTask = await toggleTaskAsCompleteService(taskId);
      
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }

    } catch (error) {
        
    console.log(error);
      res.status(500).json({ error: 'Failed to mark task as complete' });
    }
  },



toggleTaskAsCancelled: async (req, res) => {
    const taskId = req.params.id;

    try {
      const updatedTask = await toggleTaskAsCancelledService(taskId);
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to mark task as cancelled' });
    }
  },

  deleteTask: async (req, res) => {
    const taskId = req.params.id;

    try {
      const deletedTask = await deleteTaskService(taskId);
      if (deletedTask) {
        res.json({ message: 'Task deleted successfully' });
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  },
};

export default TaskController;
