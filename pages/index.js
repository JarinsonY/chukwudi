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
    grid-gap: 1.2rem;
    grid-template-columns: 70% 28%;
    grid-template-rows: 5% 95%;
    margin: 1rem 0;
    font-family: 'Poppins', 'Roboto', sans-serif;
    @media(max-width: 1180px) {
        padding: 1rem;
        display: grid;
        grid-gap: 0;
        grid-template-rows: 3% auto auto;
        grid-template-columns: 1fr;
    }
    @media(max-width: 600px) {
        grid-template-rows: 3% auto auto;
    }
`

const Main = styled.main`
    padding: 0 2rem;
    @media(max-width: 1180px) {
        grid-area: 3/1/3/1;
        grid-template-rows: repeat(4,max-content);
        padding: 2rem;
    }
    @media(max-width: 600px) {
        margin-top: 2rem;
    }
`

const AsideOrder = styled.div`
    background-color: #FDFDFB;
    grid-area: 1 / 2 / span 2;
    grid-gap: 3%;
    grid-template-rows: inherit;
    @media(max-width: 1180px) {
        margin-top: 2rem;
        grid-gap: 2%;
        grid-area: 2/1/2/1;
    }
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
