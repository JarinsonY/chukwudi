import styled from "styled-components"
import Image from 'next/image'
import Link from "next/link"
import ProfileImage from '../assets/images/headerimage.png'
import User from "./Icons/User"
import useUser from "../hooks/useUser"

const HeaderAside = styled.header`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
    align-self: center;
    @media(min-width: 1180px) {
        margin: 1rem;
        grid-template-columns: 10% 60% 40%;
        text-align: center;
    }
`
const ImageUser = styled(Image)`
    border-radius: 10px;
`
const UserName = styled.h2`
    text-transform: capitalize;
`
const BtnLogin = styled.a`
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    color: #000;
    cursor: pointer;
    border: 2px solid #FED748;
    display: flex;
    justify-content: center;
    padding: 10px;
    text-decoration: none;
    font-weight: 500;
    transition: .7s;
    width: 40%;
    margin: auto 1.5rem;
    &:hover{
        background-color: #FED748;
        border: 2px solid transparent;
        color: #000;
        transition: .7s;
    }
`
const QuantityProducts = styled.a`
    background-color: #FED748;
    border-radius: 10px;
    margin-left: 30px;
    padding: 10px 18px;
    font-weight: 500;
`

const AsideHeader = ({ cart }) => {

    const user = useUser();

    return (
        <>
            <HeaderAside>
                {
                    user
                        ?
                        <>
                            <ImageUser src={user.avatar ? user.avatar : ProfileImage} alt='Test' width={45} height={45} />
                            <UserName>{user.displayName}</UserName>
                        </>
                        :
                        <>
                            <Link href="/login"><BtnLogin>Login</BtnLogin></Link>
                            <User />
                        </>
                }
                <QuantityProducts>{cart.length}</QuantityProducts>
            </HeaderAside>
        </>
    )
}

export default AsideHeader;
