import { useShowList } from "../../hooks/useStateTask";
import { ButtonToggleShowTask, ContainerHeader } from "./styles";

export function Header() {
  const { taskSituation, updateSituation } = useShowList();
  return (
    <ContainerHeader>
      <h1> Sua lista de tarefas </h1>
      <div>
        <ButtonToggleShowTask
          toDo={taskSituation.toDo}
          onClick={() =>
            updateSituation({
              toDo: true,
              done: false,
              forLater: false,
            })
          }
        >
          A fazer
        </ButtonToggleShowTask>

        <ButtonToggleShowTask
          done={taskSituation.done}
          onClick={() =>
            updateSituation({
              toDo: false,
              done: true,
              forLater: false,
            })
          }
        >
          Feitas
        </ButtonToggleShowTask>

        <ButtonToggleShowTask
          forLater={taskSituation.forLater}
          onClick={() =>
            updateSituation({
              toDo: false,
              done: false,
              forLater: true,
            })
          }
        >
          Para Depois
        </ButtonToggleShowTask>
      </div>
    </ContainerHeader>
  );
}
