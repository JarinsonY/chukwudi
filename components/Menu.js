import styled from "styled-components"
import { TYPES } from "../actions/cartActions"
import CardProduct from "./CardProduct"

const DivMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3,.2fr);
    align-items: start;
    grid-gap: 5%;
`

const Menu = ({ products, dispatch }) => {

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    }

    return (
        <>
            <DivMenu>
                {
                    products.map((product) => (
                        <CardProduct
                            key={product.id}
                            data={product}
                            addToCart={addToCart}
                        />
                    ))
                }
            </DivMenu>
        </>
    )
}

export default Menu;
