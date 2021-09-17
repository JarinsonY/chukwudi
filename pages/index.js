import Head from 'next/head'
import styled from 'styled-components'
import Aside from '../components/Aside'
import Header from '../components/Header'

const Container = styled.div`
    display: grid;
    grid-gap: 1.8rem;
    /* grid-template-columns: 70% 30%; */
    grid-template-rows: 5% 95%;
    padding: 1rem 0 1rem 3rem;
    font-family: 'Poppins', 'Roboto', sans-serif;
`
const AsideOrder = styled.div`
    background-color: #FDFDFB;
    grid-area: 1 / 2 / span 2;
    grid-gap: 3%;
    grid-template-rows: inherit;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Chukwudi | Home</title>
      </Head>
      <Container>
        <Header />
        <AsideOrder>
          <Aside />
        </AsideOrder>
      </Container>
    </>
  )
}
