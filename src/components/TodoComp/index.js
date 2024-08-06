import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Modal, TabPane } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleFevorite, toggleTodo } from '../../reudx/actions';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ModelBox from '../ModelBox';

import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import './index.css'
const TodoList = () => {
    const [text, setText] = useState('');
    const [showModel, setShowModal] = useState(false)
    const tasks = useSelector((store) => store.tasks);
    const [editText, setEditText] = useState('')
    const [editId, setEditId] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('todos'));
        if (storedData) {
            storedData.forEach(todo => {
                dispatch(addTask({

                    id: todo.id,
                    text: todo.text,
                    completed: todo.completed,
                    fevorite: todo.fevorite
                }))
            })
        }



    }, [dispatch])

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(tasks))
    }, [tasks])

    function addTaskHandler() {
        if (text) {
            console.log("enter!!")
            dispatch(addTask({ id: Date.now(), text, completed: false, fevorite: false }))
            setText('')
        }

    }

    function deleteTaskHandler(id) {


        if (id) {
            dispatch(deleteTask(id))

        }

    }



    const toggleFevoriteHandler = (id) => {
        if (id) {
            dispatch(toggleFevorite(id))

        }
    }

    const handleKeyPress = (e) => {

        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const handleEditTask = (todo) => {
        setEditId(todo.text);
        setEditId(todo.id);
        setShowModal(true)
    }
    const handleUpdateTask = () => {

        if (editText) {
            dispatch({
                type: 'Edit_Task',
                payload: {
                    id: editId,
                    text: editText
                }
            });

            setShowModal(false);
            setEditId(null);
            setEditText('')
        }
    }

    return (

        <>
            <div className='container'>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} value={text} placeholder='Enter task' onChange={(e) => setText(e.target.value)} onKeyPress={handleKeyPress} />
                </Form.Group>

                <Button  onClick={addTaskHandler} className='AddToTaskButton'>Add Task</Button>

                <ListGroup>
                    {tasks.filter(todo => !todo.completed).map((todo) => {

                        return <ListGroup.Item key={todo.id} className='mb-2' >

                            <div className='listitemsSection' >


                                <div className='checkBoxSec'>

                                    <Form.Check type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />

                                    <b> {todo.text}</b>


                                </div>


                                <div className='custome-button-groups'>


                                    <Button onClick={() => handleEditTask(todo)} ><FaEdit /></Button>
                                    <Button onClick={() => deleteTaskHandler(todo.id)} ><MdOutlineDeleteOutline /></Button>

                                    <Button onClick={() => toggleFevoriteHandler(todo.id)} >{todo.fevorite ? <MdOutlineStar />
                                        : <MdOutlineStarBorder />
                                    }</Button>



                                </div>





                            </div>


                        </ListGroup.Item>
                    })}


                </ListGroup>




                <h1>Completed</h1>

                <ListGroup>


                    {tasks.filter(todo => todo.completed).map((todo) => {

                        return <ListGroup.Item key={todo.id} className='mb-2' >

                            <div className='listitemsSection' >


                                <div className='checkBoxSec'>

                                    <Form.Check type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />

                                    <b> {todo.text}</b>


                                </div>


                                <div className='custome-button-groups'>


                                    <Button onClick={() => handleEditTask(todo)} ><FaEdit /></Button>
                                    <Button onClick={() => deleteTaskHandler(todo.id)} ><MdOutlineDeleteOutline /></Button>

                                    <Button onClick={() => toggleFevoriteHandler(todo.id)} >{todo.fevorite ? <MdOutlineStar />
                                        : <MdOutlineStarBorder />
                                    }</Button>



                                </div>





                            </div>


                        </ListGroup.Item>
                    })}


                </ListGroup>

               
          <ModelBox  showModel={showModel} setShowModal={setShowModal} editText={editText} setEditText={setEditText} handleUpdateTask={handleUpdateTask}  />
            </div>




        </>






    )
}

export default TodoList