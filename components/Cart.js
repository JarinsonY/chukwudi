import styled from "styled-components"
import Trash from "./Icons/Trash"
import CartItem from "./CartItem"
import { TYPES } from "../actions/cartActions"

const DivCart = styled.div`
    
`
const DivItems = styled.div`
    margin: 0 2.5rem;
    @media(max-width: 1300px) {
        margin: 0;
    }
`
const TrashIcon = styled(Trash)`
    transition: .2s ease all;
    &:hover{
        cursor: pointer;
        color: red;
    }
    `
const DivTrash = styled.div`
    margin-top: 2rem;
    text-align: center;
`
const Total = styled.p`
    display: none;
`
const DivTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 10%;
    padding-bottom: 2rem;
    border-bottom: 2px solid #E4E0E0;
    font-size: x-large;
    @media(max-width: 1180px) {
        padding-bottom: 0;
        margin-bottom: 1rem;
    }
`
const TotalTitle = styled.p`
`
const TotalCart = styled.p`
    margin-right: 1rem;
    font-weight: 700;
`

const Cart = ({ cart, dispatch }) => {

    const delFromCart = (id) => {
        dispatch({ type: TYPES.REMOVE_ONE_CART, payload: id })
    }

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }

    let totalAmount = 0;

    return (
        <DivCart>
            <DivItems>
                {
                    cart.map((item, index) => (
                        <>
                            <CartItem key={index} data={item} delFromCart={delFromCart} />
                            <Total>{totalAmount += (item.price * item.quantity)}</Total>
                        </>
                    ))
                }
            </DivItems>
            {cart.length > 0 && <DivTrash><TrashIcon onClick={() => clearCart()} /></DivTrash>}
            <DivTotal>
                <TotalTitle>Total:</TotalTitle>
                <TotalCart>${totalAmount.toFixed(2)}</TotalCart>
            </DivTotal>
        </DivCart >
    )
}

export default Cart
