import styled from "styled-components"
import Image from 'next/image'
import Link from "next/link"
import ProfileImage from '../assets/images/headerimage.png'
import { useState } from "react"
import User from "./Icons/User"

const HeaderAside = styled.header`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
    align-self: center;
`
const ImageUser = styled(Image)`
    border-radius: 20px;
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

const AsideHeader = () => {

    const [user, setUser] = useState(false)

    return (
        <>
            <HeaderAside>
                {
                    user
                        ?
                        <>
                            {/* <ImageUser src={user.avatar} alt={user.username} width={45} height={45} />
                            <UserName>{user.username}</UserName> */}
                            <ImageUser src={ProfileImage} alt='Test' width={45} height={45} />
                            <UserName>{User}</UserName>
                        </>
                        :
                        <>
                            <Link href="/login"><BtnLogin>Login</BtnLogin></Link>
                            <User />
                        </>
                }
                {/* <QuantityProducts>{props.count.length}</QuantityProducts> */}
                <QuantityProducts>{0}</QuantityProducts>
            </HeaderAside>
        </>
    )
}

export default AsideHeader;
