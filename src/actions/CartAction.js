import * as ActionTypes from "../constants/CartConstant"

export const addToCART = ( item_id ) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: item_id
        }
    }
}

export const removeFromCart = ( item_id ) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: item_id
        }
    }
}

export const adjustQty = ( item_id, qty ) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: item_id,
            qty: qty
        }
    }
}

export const loadCurrentItem = ( items ) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: items
    }
}