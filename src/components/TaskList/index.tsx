import { useTasks } from "../../hooks/useTasks";
import { List } from "./styles";

export function TaskList () {
    const {tasks} = useTasks()
    return (
        <>
        {tasks?.map(item => (
            <List key={item?.id}>
                <li>
                    {item?.description}
                </li>
            </List>
        ))}
        
        </>
    )
}