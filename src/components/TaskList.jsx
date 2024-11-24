import EditTaskModal from "./EditTaskModal";

const TaskList = ({ tasks = [], deleteTask, updateTask }) => {
    return (
        <div className="grid gap-4">
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <EditTaskModal
                        key={task.id || index}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))
            ) : (
                <p className="text-center">No tasks found</p>
            )}
        </div>
    );
};

export default TaskList;
