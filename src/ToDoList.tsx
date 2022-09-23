import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';

export function ToDoList() {
  return (
    <>
      <CreateTask />
      <TaskList/>
    </>
  )
}