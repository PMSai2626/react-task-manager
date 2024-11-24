import { useState } from "react"
import '../index.css'

const AddTask = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('')
    const [status, setStatus] = useState('Pending')


    const handleSubmit = (e) => {
            e.preventDefault();
            const newTask = {
                id:Date.now(),
                title,
                description,
                dueDate,
                status,
            };
            addTask(newTask);
            setTitle('')
            setDescription('');
            setDueDate('')
            setStatus('Pending');
            }


  return (
    <div>
      <form className='mb-6' onSubmit={handleSubmit}>
            <div className="form_container">
                <input type="text" placeholder="Title"
                 value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                   required className="input_filed"/>
                   <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} 
                   required className="input_filed" >

                   </textarea>

                   <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} 
                    required className="input_filed"
                   />
                   <select value={status} onChange={(e) => setStatus(e.target.value)}
                    required className="input_filed">
                        <option value='Pending'>Pending</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Completed'>Completed</option>

                   </select>
                   <button type="submit" className="btn btn-primary">Add Task</button>

            </div>

      </form>
    </div>
  )
}

export default AddTask
