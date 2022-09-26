import { useTasks } from "../../hooks/useTasks";

import { ContainerTask, ItemList, List, Select } from "./styles";

import Done from "../../assets/done.png";
import NotDone from "../../assets/not-done.png";
import Delete from "../../assets/delete.png";

export function TaskList() {
  const { tasks, updateTask } = useTasks();

  const handleToggleCompletion = (id: string) => {
    const taskComplete = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    updateTask(taskComplete);
  };

  const deleteTask = (id: string) => {
    const filtedTasks = tasks.filter((task) => task.id !== id);
    updateTask(filtedTasks);
  };

  const handlechangeList = (value: string, id: string) => {
    const taskComplete = tasks.map((task) =>
      task.id === id ? { ...task, situation: value } : task
    );
    updateTask(taskComplete);
  };

  return (
    <>
      <List>
        {tasks?.map(
          (task) =>
            task.situation === "priority" && (
              <>
                <ItemList key={task?.id} done={task.done}>
                  <img
                    src={task.done ? Done : NotDone}
                    alt="done"
                    onClick={() => handleToggleCompletion(task.id)}
                  />

                  <ContainerTask> {task?.description} </ContainerTask>

                  <div>
                    {!task.done && (
                      <Select
                        name="situation"
                        onChange={(e) =>
                          handlechangeList(e.target.value, task.id)
                        }
                      >
                        <option value="to-do" selected>
                          {" "}
                          situação{" "}
                        </option>
                        <option value="for-later"> Para Depois </option>
                        <option value="priority"> Prioridade </option>
                      </Select>
                    )}
                    <img
                      src={Delete}
                      alt="delete"
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                </ItemList>
              </>
            )
        )}
      </List>
    </>
  );
}
