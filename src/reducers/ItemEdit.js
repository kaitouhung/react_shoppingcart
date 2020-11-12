import * as Types from './../constants/ActionTypes'
let initialState = {};
const itemEditing = (state = initialState, action) => {
    console.log("Đây là acion itemEdit")
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            console.log("action là: ", action.product)
            return action.product;
        default: return state;
    }
}

export default itemEditing