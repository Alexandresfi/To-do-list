import { useState } from "react";

import { Container, Input, Button } from "./styles";

import { v4 as uuid} from "uuid"
import { useTasks } from "../../hooks/useTasks";

export interface Items {
    id: string
    description: string | null
    done: boolean
    situation: string
}

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
            alert('task muito grande, ou você não adicionou nenhuma task')
        }
    }

    return(
        <Container>
            <Input 
            placeholder="Digite sua task"
            onChange={(event)=> handleChange(event.target.value)} 
            value={description} />
            <Button onClick={createtask} >+</Button>
        </Container>
    )
}