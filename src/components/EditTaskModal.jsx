import { useState } from 'react';

const EditTaskModal = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEdit = () => setIsEditing(!isEditing);

    const handleSave = () => {
        updateTask(editedTask);
        setIsEditing(false);
    };

    return (
        <div className="card">
            {isEditing ? (
                <div className="grid gap-2">
                    <input
                        type="text"
                        value={editedTask.title}
                        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                        className="input-field"
                    />
                    <textarea
                        value={editedTask.description}
                        onChange={(e) =>
                            setEditedTask({ ...editedTask, description: e.target.value })
                        }
                        className="input-field "
                    />
                    <select
                        className="input-field"
                        value={editedTask.status}
                        onChange={(e) =>
                            setEditedTask({ ...editedTask, status: e.target.value })
                        }
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <button onClick={handleSave} className="btn btn-secondary">
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <table className='gap-5'>
                        <thead className='gap-5'>
                            <th>title</th>
                            <th>description</th>
                            <th>Due date</th>
                            <th>status</th>
                        </thead>
                        <tbody>
                             
                                <td>{task.title} </td>
                            <td>{task.description} </td>
                            <td>{task.dueDate}</td>
                            <td>{task.status}</td>
                            <td><div className="flex gap-2 mt-2">
                <button onClick={handleEdit} className="btn btn-secondary">
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div></td>
                        </tbody>
                    </table>
                </div>
            )}
            
        </div>
    );
};

export default EditTaskModal;
