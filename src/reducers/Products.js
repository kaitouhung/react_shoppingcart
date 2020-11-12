import * as Types from './../constants/ActionTypes'
let initialState = [
];
const products = (state = initialState, action) => {
    let index = -1;
    let id = action.id;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCT:
            index = state.findIndex(val => val.id === id);
            state.splice(index, 1)
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        case Types.UPDATE_PRODUCT:
            index = state.findIndex(val => val.id === id);
            state[index] = action.product
            return [...state]
        default: return [...state];
    }
}

export default products