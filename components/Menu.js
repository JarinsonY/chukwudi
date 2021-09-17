import { useEffect, useState } from "react"
import styled from "styled-components"
import { getMenu } from "../services"
import CardProduct from "./CardProduct"

const DivMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3,.2fr);
    align-items: start;
    grid-gap: 5%;
`

const Menu = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getMenu()
            .then(products => setProducts(products))
    }, [])

    return (
        <>
            <DivMenu>
                {
                    products.map((product) => (
                        <CardProduct
                            key={product.id}
                            data={product}
                        />
                    ))
                }
            </DivMenu>
        </>
    )
}

export default Menu;
