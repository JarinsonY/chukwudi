import Head from 'next/head'
import { useReducer } from 'react'
import styled from 'styled-components'
import Aside from '../components/Aside'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'

const Container = styled.div`
    display: grid;
    grid-gap: 1.8rem;
    /* grid-template-columns: 70% 30%; */
    grid-template-rows: 5% 95%;
    padding: 1rem 0 1rem 3rem;
    font-family: 'Poppins', 'Roboto', sans-serif;
`

const Main = styled.main`
`

const AsideOrder = styled.div`
    background-color: #FDFDFB;
    grid-area: 1 / 2 / span 2;
    grid-gap: 3%;
    grid-template-rows: inherit;
`

export default function Home() {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const { products, cart } = state

  return (
    <>
      <Head>
        <title>Chukwudi | Home</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Banner />
          <Categories />
          <Menu products={products} dispatch={dispatch} />
        </Main>
        <AsideOrder>
          <Aside dataCart={cart} dispatch={dispatch} />
        </AsideOrder>
      </Container>
    </>
  )
}
