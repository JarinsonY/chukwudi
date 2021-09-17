import { TYPES } from "../actions/cartActions";
import Products from '../pages/api/products.json'

export const cartInitialState = {
    products: Products,
    cart: [],
};

export const cartReducer = (state, action) => {

    switch (action.type) {

        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                    
                }
        }

        case TYPES.REMOVE_ONE_CART: {
            let itemMinus = state.cart.find(item => item.id === action.payload)
            return itemMinus.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                    
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                    
                }
        }

        case TYPES.CLEAR_CART: return cartInitialState

        default:
            return state;
    }

}