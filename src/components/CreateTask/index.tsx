import { useState } from "react";

import { Container, Input, Button } from "./styles";

import { v4 as uuid} from "uuid"

interface Items {
    id: string
    description: string | null
    done: boolean
    situation: string
}

export function CreateTask () {

    const [task, setTask] = useState<Items[]>([])
    const [description, setDescription] = useState<string>()

    const handleChange = (value:string) => {
        setDescription(value)
    }

    const createtask = () => {
        if(description) {
            const item:Items = {
                id: uuid(),
                description: description ? description : null,
                done: false,
                situation: "todo"
            }
    
            setTask([...task, item])
    
            setDescription('')
            console.log(task)
        } else {
            alert('por favor adiciona uma descrição a sua task')
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