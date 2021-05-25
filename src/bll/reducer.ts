const initState = {}

export const reducer = (state: InitialStateLoading = initState, action: ActionType): InitialStateLoading => {
    switch (action.type) {
        default:
            return state
    }
}
//type
export type InitialStateLoading = typeof initState
type ActionType = any
