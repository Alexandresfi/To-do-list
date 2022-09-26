import { ButtonToggleShowTask, ContainerHeader } from "./styles";

export function Header () {
    return(
        <ContainerHeader>
            <h1> Sua lista de tarefas </h1>
            <div>
                <ButtonToggleShowTask>
                    A fazer
                </ButtonToggleShowTask>

                <ButtonToggleShowTask>
                    Feitas
                </ButtonToggleShowTask>

                <ButtonToggleShowTask>
                    Para Depois
                </ButtonToggleShowTask>
            </div>
        </ContainerHeader>       
    )
}