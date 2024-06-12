
const initialState = {value: 0};

function countReducer(state = initialState, action){

    if (action.type === 'increment') {
        return {
            value: state.value + action.payload
        }
    }
    return state

};

// 1. A change of code was made on line 174 (figure 4), can you briefly explain what that would do?

// 

// 2. Let’s say we don’t want to set the state locally anymore and want to use dispatch.
// How would you ensure that an “increment” action that also contains the result of the
// studentCount is dispatched on button click? According to your answer in part 2.2b
// what would need to be changed?

//


// Which code do you think is best suited to ensure that the “increment” action updates
// the state with the correct total number of students who are present. Is it Figure 4? Or
// Figure 5? Explain the code difference and your reasoning

// 