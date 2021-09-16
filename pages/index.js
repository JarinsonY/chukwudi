import Head from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
    display: grid;
    grid-gap: 1.8rem;
    /* grid-template-columns: 70% 30%; */
    grid-template-rows: 5% 95%;
    padding: 1rem 0 1rem 3rem;
    font-family: 'Poppins', 'Roboto', sans-serif;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Chukwudi | Home</title>
      </Head>
      <Container>
        <Header />
      </Container>
    </>
  )
}
