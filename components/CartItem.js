import styled from "styled-components"
import Image from 'next/image'
import Cross from "./Icons/Cross"
import Minus from "./Icons/Minus"

const Product = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
    margin: 1rem 0;
`
const ImageProduct = styled(Image)`
    border-radius: 10px;
`
const NameProduct = styled.p`
    width: 30%;
    margin: 0;
    font-weight: 600;
`
const Amount = styled.div`
    display: flex;
    place-items: center;
    gap: 2rem;
`
const MinusIcon = styled(Minus)`
    transition: .2s ease all;
    border-radius: 100%;
    &:hover{
        background-color: #F2F2F2;
        cursor: pointer;
        color: #5538A2;
    }
`
const Quantity = styled.p`
    font-weight: 600;
`
const Total = styled.p`
    color: #9A9A9A;
`


const CartItem = ({ data }) => {

    const { id, name, price, image, quantity } = data;

    return (
        <Product key={id}>
            <ImageProduct src={image} alt={name} width={80} height={50} />
            <Quantity>{quantity}</Quantity>
            <Cross />
            <NameProduct>{name}</NameProduct>
            <Total name={id} accessKey={id}>${price * quantity}</Total>
            <MinusIcon />
        </Product>

    )
}

export default CartItem;
