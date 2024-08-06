import React from 'react'

import { Add_Task, Delete_Task, Edit_Task, Toggle_Fevorite
    , Toggle_Todo } from './actions';


const intailState = {
    tasks: []
}

const TaskReducer = (state = intailState, action) => {

    if (action.type === Add_Task) {
        return {
            ...state, tasks: [...state.tasks, action.payload]
        }

    }
    else if (action.type === Delete_Task) {

        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload)
        }

    }
    else if (action.type === Edit_Task) {

        return {
            ...state,
            tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            )
        }

    }

    else if (action.type === Toggle_Fevorite) {


        return {
            ...state,
            tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, fevorite: !task.fevorite } : task
            )
        }

    }

    else if (action.type === Toggle_Todo) {


        return {
            ...state,
            tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task
            )
        }

    }
    else {

        return state;

    }




}

export default TaskReducer