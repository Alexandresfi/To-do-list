import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { AppProvider } from './hooks';

export function ToDoList() {

  return (
    <AppProvider>
      <Header />
      <CreateTask />
      <TaskList/>
    </AppProvider>
  )
}