import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface Items {
    id: string
    description: string | null
    done: boolean
    situation: string
}

interface TaskProviderProps {
    children: ReactNode
}

interface TasksContextData {
    tasks: Items[]
    createTask: (task: Items) => void
}

const TaskContext = createContext<TasksContextData>({} as TasksContextData)

export function TasksProvider ( {children}:TaskProviderProps ) {
    const [tasks, setTasks] = useState<Items[]>([])

    const createTask = ( task:Items ) => {
        setTasks([...tasks, task])
    }

    const localCopy = async () => {
      await  localStorage.setItem('todoList:myToDo', JSON.stringify(tasks))
    }
    
    const getTasks = async () => {
        const tasksData = await localStorage.getItem('todoList:myToDo')
        tasksData && setTasks(JSON.parse(tasksData))
    }

    useEffect(()=>{
        getTasks()
    },[])

    useEffect(()=>{
        tasks.length > 0 && localCopy()
    },[tasks])

    return (
        <TaskContext.Provider value={{tasks, createTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks () {
    const context = useContext(TaskContext)

    return context
}