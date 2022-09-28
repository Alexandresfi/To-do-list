import { useState } from "react";

import { Container, Input, Button } from "./styles";

import { v4 as uuid} from "uuid"
import { Items, useTasks } from "../../hooks/useTasks";

export function CreateTask () {

    const { createTask } = useTasks()
    const [description, setDescription] = useState<string>()

    const handleChange = (value:string) => {
        setDescription(value)
    }

    const createtask = () => {
        if(description && description.length < 81) {
            const item:Items = {
                id: uuid(),
                description: description ? description : null,
                done: false,
                situation: "to-do"
            }


    
            createTask(item)
            setDescription('')
        } else {
            alert('tarefa muito grande, ou você não descreveu nenhuma tarefa')
        }
    }

    return(
        <Container>
            <Input 
            placeholder="Digite sua tarefa"
            onChange={(event)=> handleChange(event.target.value)} 
            value={description} />
            <Button onClick={createtask} >+</Button>
        </Container>
    )
}