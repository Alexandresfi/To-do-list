import { createContext, ReactNode, useContext, useState } from "react";

export interface StateListTask {
    toDo?: boolean
    done?: boolean
    forLater?: boolean
}

interface ShowStiuationListProps {
    children: ReactNode
}

interface ShowStiuationListProviderData {
    taskSituation: StateListTask,
    updateSituation: ( situation: StateListTask ) => void
    teste: string
}

const ShowListStuationContentext = createContext<ShowStiuationListProviderData>({} as ShowStiuationListProviderData)

export function ShowStiuationListProvider ( {children}:ShowStiuationListProps ) {

    const [taskSituation, setTaskSituation] = useState<StateListTask>({
        toDo: true,
        done: false,
        forLater: false
    })

    const updateSituation = ( situation:StateListTask ) => {
        setTaskSituation(situation)
        console.log(situation)
    }

    const teste = 'foi aqyu'

    return (
        <ShowListStuationContentext.Provider value={{taskSituation, updateSituation, teste }}>
            {children}
        </ShowListStuationContentext.Provider>
    )
}

export function useShowList () {
    const context = useContext(ShowListStuationContentext)

    return context
}