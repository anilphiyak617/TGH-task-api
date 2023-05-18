import Task from "../models/Task.js"
// import User from "../models/User";


// returns an Array of task document object
export const getAllTasksService = async ()=>{
    // finding all taska i.e documents
    const tasks=await Task.find({}).sort({priority:1});
    if(!tasks) {
        throw new Error('Task not found');
      }
  
    return tasks
}


// returns task document object
export const getTaskByIdService=async (taskId)=>{
    console.log(taskId)
    const curTask= await Task.findById(taskId).exec();
    if(!curTask) {
        throw new Error('Task not found');
      }
  
    return curTask;
}

// returns task document object
export const createTaskService= async(newTask)=>{
    console.log("createTaskService called")
    const task= new Task(newTask);
    await task.save()
    return task
}

// returna a task document object
export const toggleTaskAsCompleteService =async (taskId)=>{
    
        const task = await Task.findById(taskId);        
        if(!task) {
          throw new Error('Task not found');
        }
    
        task.completed = !task.completed;
        await task.save();
        return task;
}

// returna a task document object
export const toggleTaskAsCancelledService =async (taskId)=>{

    const task=await Task.findById(taskId);
    if(!task){
        throw new Error('Task not found')
    }

    task.cancelled = !task.cancelled;
    await task.save();
    return task;
    
}

// retunrns a task document object
export const deleteTaskService = async (taskId)=>{

    const task=await Task.findById(taskId)
    const res = await Task.deleteOne({_id:taskId}) 
    return task;
}