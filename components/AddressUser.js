import styled from "styled-components"
import Clock from "./Icons/Clock"

const DivAddressUser = styled.div`
    background-color: #5538A2;
    border-radius: 20px;
    color: #FFF;
    margin: auto;
    padding: 1rem 1rem;
    width: 70%;
    font-size: small;
`
const AddressDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const DeliveryDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Data = styled.p`
    align-items: center;
    display: flex;
    justify-content: center;
    svg {
        margin-right: 10px;
        background-color: #66489C;
        padding: 8px 12px;
        border-radius: 8px;
    }
`
const BtnEdit = styled.a`
    color: #FED748;
    text-decoration: none;
    transition: .7s ease all;
    &:hover{
        cursor: pointer;
        color: #A98F2F;
    }
`

const AddressUser = () => {
    return (
        <DivAddressUser>
            <AddressDiv>
                <Data>625 St Marks Ave</Data>
                <BtnEdit href="">Edit</BtnEdit>
            </AddressDiv>
            <DeliveryDiv>
                <Data><Clock fill="#FED748" with="20" height="20" stroke="#FED748" />35 min</Data>
                <BtnEdit href="">Choose time</BtnEdit>
            </DeliveryDiv>
        </DivAddressUser>
    )
}

export default AddressUser