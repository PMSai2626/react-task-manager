
import Filters from './components/Filters';
import { useState } from 'react';
import AddTask from './components/AddTask';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import './index.css';


const App = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

const filterdTasks = tasks.filter((task) => 
filterStatus === 'All' || task.status === filterStatus)

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));


};
const updateTask = (updatedTask) => {
  setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask: task)))
}


  return (
    <div className='main-container'>
      <h1 className='heading'>Task Tracker</h1>
      <Filters filterStatus = {filterStatus}  setFilterStatus={setFilterStatus} />
      <AddTask addTask = {addTask} />
      <TaskList tasks={filterdTasks} deleteTask={deleteTask} updateTask={updateTask}  />
      

      
    </div>
  )
}

export default App
