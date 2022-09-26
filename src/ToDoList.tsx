import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TasksProvider } from './hooks/useTasks';



export function ToDoList() {

  return (
    <TasksProvider>
      <Header />
      <CreateTask />
      <TaskList/>
    </TasksProvider>
  )
}