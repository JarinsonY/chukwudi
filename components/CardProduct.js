import styled from "styled-components";
import CartIcon from "./Icons/CartIcon";
import Star from "./Icons/Star";
import Image from 'next/image'

const DivCard = styled.div`
    box-shadow:  
        5px 5px 17px #e7e7e8,
        -5px -5px 17px #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
    place-self: center;
    justify-self: center;
    justify-content: space-between;
    border-radius: 20px;
`
const DivImg = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
`
const ImageCard = styled(Image)`
    border-radius: 20px;
`
const DivDuration = styled.div`
    background-color: #F9F8F9;
    border-radius: 0px 10px 0px 20px;
    padding: 10px;
    position: absolute;
    font-weight: 500;
    bottom: 6px;
    font-size: 13px;
`
const NameProduct = styled.p`
    margin: 0;
    padding: .5rem 1rem;
    /* max-width: 250px; */
`
const Rating = styled.div`
    align-items: center;
    color: #9A9A9A;
    display: flex;
    flex-direction: row;
    font-size: 13px;
`
const Score = styled.button`
    align-items: center;
    background-color: #FEFEFF;
    border: none;
    cursor: pointer;
    display: flex;
    margin-right: 10px;
    font-weight: 600;
    svg {
        margin-right: 7px;
    }
`
const BtnAddCart = styled.button`
    background-color: #FFD644;
    border-radius: 0px 0px 20px 20px;
    border: none;
    cursor: pointer;
    transition: .7s;
    width: 100%;
    &:hover{
        background-color: #FFD64494;
        transition: .7s;
    }
`

const CardProduct = ({ data }) => {

    const { id, name, qualification, time, price, image } = data

    return (
        <DivCard>
            <DivImg>
                <ImageCard src={image} alt={name} width={300} height={170} />
                <DivDuration>{time}</DivDuration>
            </DivImg>
            <NameProduct>{name}</NameProduct>
            <Rating>
                <Score><Star />4.5</Score>
                <p>$ {price}</p>
            </Rating>
            <BtnAddCart><CartIcon /></BtnAddCart>
        </DivCard>
    )
}

export default CardProduct;
