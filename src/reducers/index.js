import { combineReducers } from 'redux'
import products from './Products'
import itemEditing from './ItemEdit'

const appReducers = combineReducers({
    products: products,
    itemEditing: itemEditing

})

export default appReducers