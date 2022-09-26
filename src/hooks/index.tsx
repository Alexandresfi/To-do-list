import { ReactNode } from "react";
import { ShowStiuationListProvider } from "./useStateTask";

import { TasksProvider } from "./useTasks";

interface ProviderData {
    children: ReactNode
}

export function AppProvider ( {children}:ProviderData ) {
    return (
        <TasksProvider>
            <ShowStiuationListProvider>
                {children}
            </ShowStiuationListProvider>
        </TasksProvider>
    )
}