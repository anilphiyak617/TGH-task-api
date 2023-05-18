const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: Number,
      min: 1,
      max: 9,
      default: 1,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    cancelled: {
      type: Boolean,
      default: false,
    },
  });
  
  const Task= new model('Task',TaskSchema)
  export default Task;