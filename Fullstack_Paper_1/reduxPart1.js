// 1. Can you provide a brief summary of what is happening in this function code?
// This is a function called countReducer
// It takes two parameters - state (with a default value of initialState) and action
// the function checks if the action type is 'increment'
// if so it returns a new state with an updated value + 1

function countReducer(state = initialState, action){

    if (action.type === 'increment') {
        return {
            value:state.value + 1
        }
    }

    // 2. Add one action that tells the reducer to reduce the state value by 1
    if (action.type === 'reduction') {
        return {
            value:state.value - 1
        }
    }

    // 3. Add one action that tells the reducer to reset the state
    if (action.type === 'reset') {
        return {
            value:state.value = initialState
        }
    }

    return state

};