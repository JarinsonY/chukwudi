import styled from "styled-components"
import Image from 'next/image'
import HamburguerColor from "./Icons/HamburguerColor"
import Clock from "./Icons/Clock"
import { useEffect, useState } from "react"
import ArrowHead from "./Icons/Arrowhead"
import { getCategories } from "../services"

const DivCategories = styled.div`
    margin: 3rem 0;
`
const HeadCategories = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
/* const TitleBanner = styled.h2`
    align-items: center;
    color: #FE652B;
    display: flex;
    text-decoration: none;
` */
const DivDelivery = styled.div`
    align-content: center;
    background-color: #FE652B;
    border-radius: 50px;
    color: #FFF;
    display: flex;
    flex-direction: row;
    height: 10%;
    justify-content: center;
    padding: 12px 18px;
    /* width: 20%; */
`
const LabelDelivery = styled.label`
    align-items: center;
    display: flex;
    font-size: 12px;
    justify-content: center;
    svg {
        margin-right: 7px;
    }
`
const SelectDelivery = styled.select`
    background-color: #FE652B;
    border: none;
    color: #FFF;
    font-weight: 700;
    font-size: 12px;
`
const DivListCategories = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const ListCategories = styled.ol`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    list-style: none;
    padding: 0;
    @media(max-width: 1180px) {
        display: grid;
        grid-template-columns: repeat(4,1fr);/* 
        grid-template-rows: repeat(2,180px); */
    }
`
const A = styled.a`
    align-items: center;
    background-color: #FEFEFF;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 0px #efefef;
    color: #000;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 500;
    /* height: 100px; */
    padding: 5px 8px 50px 8px;
    text-decoration: none;
    transition: .7s;
    margin: .7rem;
    /* width: 85px; */
    &:hover {
        background-color: #FED741;
        transition: .7s;
    }
`
const ItemButton = styled.button`
    background-color: #FEFEFF;
    border-radius: 50%;
    border: 1px solid #DEDDDD;
    height: 60px;
    margin-bottom: 12px;
    /* padding: 20px; */
    width: 60px;
`
const Category = styled.li`
    
`
const Arrow = styled.button`
    align-items: center;
    border-radius: 100%;
    border: none;
    display: flex;
    height: 10%;
    padding: 15px;
    transition: .7s;
    &:hover {
        background-color: rgb(199, 199, 199);    
        transition: .7s;
    }
`

const Categories = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategories().then(category => setCategory(category))
        console.log(category)
    }, [])

    return (
        <DivCategories>
            <HeadCategories>
                <h1>Restaurants <HamburguerColor /></h1>
                <DivDelivery>
                    <LabelDelivery><Clock fill="#FFF" with="15" height="15" stroke="#FFF" />Delivery: </LabelDelivery>
                    <SelectDelivery>
                        <option defaultValue>Now</option>
                        <option value="15">15 min</option>
                        <option value="25">25 min</option>
                        <option value="35">35 min</option>
                    </SelectDelivery>
                </DivDelivery>
            </HeadCategories>
            <DivListCategories>
                <ListCategories>
                    {
                        category.map(({ id, icon, name }) =>
                            <li key={id}>
                                <A>
                                    <ItemButton>
                                        <Image src={icon} alt={name} width={30} height={30} />
                                    </ItemButton>
                                    {name}
                                </A>
                            </li>
                        )
                    }
                </ListCategories>
                <Arrow><ArrowHead /></Arrow>
            </DivListCategories>
        </DivCategories>
    )
}

export default Categories;
