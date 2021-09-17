import { useState } from "react"
import styled from "styled-components"
import ArrowRight from "./Icons/ArrowRight"

const DivCheckout = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 0 10%;
`
const DivPersons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 30%;
`
const TitlePersons = styled.h3`
    margin: 0;
`
const TextCount = styled.h3`
    margin: 0px 10px 0px 10px;
`
const DivAmount = styled.div`
    align-items: center;
    background-color: #C8C8C8;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`
const BtnCount = styled.button`
    align-items: center;
    background-color: #C8C8C8;
    border-radius: 10px;
    border: 1px solid transparent;
    display: flex;
    font-size: 20px;
    height: 10%;
    padding: 10px;
`
const BtnCheckout = styled.button`
    align-items: center;
    background-color: #FED748;
    border-radius: 10px 0px 0px 10px;
    border: none;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 60%;
    svg {
        margin-left: 10px;
    }
`


const Checkout = () => {

    const [count, setCount] = useState(1)

    return (
        <DivCheckout>
            <DivPersons>
                <TitlePersons>Persons</TitlePersons>
                <DivAmount>
                    {
                        count === 1
                            ?
                            <>
                                <TextCount>{count}</TextCount>
                                <BtnCount onClick={() => setCount(count + 1)}>+</BtnCount>
                            </>
                            :
                            <>
                                <BtnCount onClick={() => setCount(count - 1)}>-</BtnCount>
                                <TextCount>{count}</TextCount>
                                <BtnCount onClick={() => setCount(count + 1)}>+</BtnCount>
                            </>
                    }
                </DivAmount>
            </DivPersons>
            <BtnCheckout><h3>Checkout</h3><ArrowRight fill="#000" /></BtnCheckout>
        </DivCheckout>
    )
}

export default Checkout;
