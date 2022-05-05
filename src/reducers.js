//import {CHANGE_SEARCH_FIELD} from './constants'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const getRobots = createAsyncThunk('roboSearch/getRobots', async (_, {rejectWithValue, dispatch}) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch(setRobots(data)))
})

const initialState = {
    searchField : '',  
    robots: []
}

export const searchRobotsSlice = createSlice({
    name: 'roboSearch',
    initialState: initialState,
    reducers: {
        searchRobots: (state, action) => {
            state.searchField = action.payload
            },
        setRobots: (state, action) => {
            state.robots = action.payload
        }
        },
    extraReducers: {
        [getRobots.fulfilled]: () => console.log('Robots fulfilled'),
        [getRobots.pending]: () => console.log('Robots pending'),
        [getRobots.rejected]: () => console.log('Robots rejected')
    }
})

export const {searchRobots, setRobots} = searchRobotsSlice.actions;
export default searchRobotsSlice.reducer;

// export const searchRobots = (state = initialState, action = {}) => {
//     switch (state.type) {
//         case CHANGE_SEARCH_FIELD:
//             return Object.assign({}, state, {searchField: action.payload})
//         default: 
//         return state;
//     }
// }