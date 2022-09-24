import { useTasks } from "../../hooks/useTasks";

import { List } from "./styles";

import Done from "../../assets/done.png";
import NotDone from "../../assets/not-done.png";
import Delete from "../../assets/delete.png";

export function TaskList () {
    const { tasks, updateTask } = useTasks()

    const handleToggleCompletion = (id:string) => {
        const taskComplete = tasks.map(task => (
            task.id === id ? {...task, done: !task.done} : task
        ))

        updateTask(taskComplete)
    }
    return (
        <>
        {tasks?.map(task => (
            <List key={task?.id}>
                <li>
                    
                    <img src={task.done ? Done : NotDone} alt="done" onClick={ ()=> handleToggleCompletion(task.id) } />
                    

                    <span> {task?.description} </span>

                    <img src={Delete} alt="delete" />
                </li>
            </List>
        ))}
        
        </>
    )
}