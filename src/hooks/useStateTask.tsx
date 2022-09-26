import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface StateListTask {
    toDo?: boolean
    done?: boolean
    forLater?: boolean
}

interface ShowStiuationListProvider {
    children: ReactNode
}

interface ShowSituationData {
    taskSituation : StateListTask,
    updateSituationList: (situation: StateListTask) => void
}

const ShowListStuationContentxt = createContext<ShowSituationData>({} as ShowSituationData)

export function ShowStiuationListProvider ( {children}:ShowStiuationListProvider ) {

    const [taskSituation, setTaskSituation] = useState<StateListTask>({
        toDo: true,
        done: false,
        forLater: false
    })

    const updateSituationList = (situation:StateListTask) => {
        setTaskSituation(situation)
    }

    return <ShowListStuationContentxt.Provider value={{taskSituation, updateSituationList}}>
        {children}
    </ShowListStuationContentxt.Provider>
}

export function useShowList () {
    const context = useContext(ShowListStuationContentxt)

    return context
}