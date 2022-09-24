import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { TasksProvider } from './hooks/useTasks';



export function ToDoList() {

  return (
    <TasksProvider>
      <CreateTask />
      <TaskList/>
    </TasksProvider>
  )
}