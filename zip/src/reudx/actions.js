//actions 

export const Add_Task = "Add_Task";
export const Delete_Task = "Delete_Task";
export const Edit_Task = "Edit_Task";
export const Toggle_Fevorite = "Toggle_Fevorite" 
export const Toggle_Todo="Toggle_Todo"



export const addTask = (task) => ({
    type: 'Add_Task',
    payload: task
})


export const deleteTask = (task) => ({
    type: 'Delete_Task',
    payload: task
})


export const toggleFevorite = (id) => ({
    type: 'Toggle_Fevorite',
    payload: id
})


export const toggleTodo = (id) => ({
    type: 'Toggle_Todo',
    payload: id
})