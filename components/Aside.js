import styled from "styled-components"
import AddressUser from "./AddressUser";
import AsideHeader from "./AsideHeader";
import Cart from "./Cart";
import Checkout from "./Checkout";

const Title = styled.h2`
    font-weight: 600;
    font-size: 33px;
    line-height: 2.4rem;
    width: 50%;
    @media(max-width: 1180px) {
        width: 100%;
    }
` 
const DivTitle = styled.div`
    margin: 0 10% 0 15%;
    @media(max-width: 1180px) {
        margin: 0 10%;
    }
`


const Aside = ({ dataCart, dispatch }) => {
    return (
        <>
            <AsideHeader cart={dataCart} />
            <DivTitle>
                <Title>My  😎 Order</Title>
            </DivTitle>
            <AddressUser />
            <Cart cart={dataCart} dispatch={dispatch} />
            <Checkout />
        </>
    )
}

export default Aside;
