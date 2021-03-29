const INCREMENT ="increment"
const DECREMENT ="decrement"

const initialState={
    count:0
}



function Reducer(state=initialState,action){
    switch(action.type){
        case INCREMENT:
            return {count: state.count + 1}
        case DECREMENT:
            return {count: state.count - 1}
        default:
            return state
        }
    }
   
export default Reducer;

/*const initialState = {
    count: 0,
}

function CounterReducer (state = initialState, action){
    switch(action.type){
        case "INCREMENT_COUNT": {
            return {...state, ...action}
        }
        case "DECREMENT_COUNT": {
            return {...state, ...action}
        }
        default:
            return state
    }
} 

export default CounterReducer
*/