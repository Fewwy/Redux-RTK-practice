//DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 10
}

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        incremented(state) {
            //the immer library allows us to write it like that
            //without any mutation
            state.value++;
        },
        //we adding a PayloadAction type of number because
        //we'll dispatch the action with a payload of a number
        //amountAdded(X)
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
        decrement(state) {
            state.value--;
        }
    }
})

//createSlice automatically create an action for each reducer function
export const { incremented, amountAdded, decrement } = counterSlice.actions;
export default counterSlice.reducer;
