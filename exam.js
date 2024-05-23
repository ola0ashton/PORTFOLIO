// scenario :
// You are building a simple task management application in JavaScript. You have an array of tasks, where each task is represented as an object with properties like id, title, description, and completed. Your task is to implement various functions to manipulate this array of tasks.

// Task:
// Write a JavaScript function called completeTask(taskId) that takes a task ID as a parameter and marks the corresponding task as completed by setting its completed property to true. If the task with the given ID is not found, the function should log an error message



let tasks = [
    { id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false
    },
    { id: 2,
      title: 'Task 2', 
      description: 'Description for Task 2',
      completed: false 
    },
    { id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      completed: false
    }
  ];
  
  
  function completeTask(taskId) {

    let task = tasks.find(task => task.id === taskId);
  
    
    if (task) {
      task.completed = true;
      console.log(`Task ${taskId} has been marked as completed.`);
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }
  

  completeTask(2);
  completeTask(4); 