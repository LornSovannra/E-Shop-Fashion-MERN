/* import axios from "axios"
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstant"

export const listProducts = async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })

    try {
        const { data } = await axios.get("../data.js")

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: error.message })
    }
} */