import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styled from 'styled-components'
import Facebook from '../../components/Icons/Facebook'
import Github from '../../components/Icons/Github'
import Google from '../../components/Icons/Google'
import { signInFacebook, signInGithub, signInGoogle } from '../../firebase/client'
import useUser, { USER_STATES } from '../../hooks/useUser'

const Page = styled.div`
    font-family: 'Poppins', 'Roboto';
`
const Container = styled.div`
    background-color: #FED748;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 97.5vh;
`
const Main = styled.main`
    height: 100%;
    display: flex;
    padding: 2rem;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
    background-color: #FFF;
`
const Logo = styled.div`
    border-radius: 10px;
    padding: .6rem 2rem;
    background-color: #FED748;
    width: 80%;
`
const Title = styled.h1`
    margin-bottom: 0;
`
const Options = styled.div`
    padding: .2rem 2rem;
    border-radius: 10px;
    margin: 16px 0;
    color: white;
    width: 100%;
`
const Button = styled.button`
    color: ${props => props.color};
    margin-bottom: 0.8rem;
    background-color: ${props => props.bcolor};
    width: 80%;
    padding: 12px 16px;
    font-size: 18px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: inherit;
    font-weight: 600;
    border-radius: 10px;
    text-transform: uppercase;
    border: 0;
    &:hover {
        color: #FFF;
        cursor: pointer;
        background-color: #4E4E4E;
    }
`
const DataBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const LogoProvider = styled.span`
    margin-right: 8px;
`

const Login = () => {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        user && router.replace("/");
    }, [user, router]);

    const handleClickGoogle = () => {
        signInGoogle()
    }

    const handleClickFacebook = () => {
        signInFacebook()
    }

    const handleClickGitHub = () => {
        signInGithub()
    }
    return (
        <>
            <Head>
                <title>Chukwudi | Login</title>
                <meta name="description" content="Page created as part of a technical test of Imaginamos S.A.S" />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <Page>
                <Container>
                    <Main>
                        <Logo>
                            <Image src="/favicon.png" alt="Logo Company" width={100} height={100} />
                        </Logo>
                        <Title>CHUKWUDI</Title>
                        <p>Iniciar <strong>Sesion</strong></p>
                        {
                            user === USER_STATES.NOT_LOGGED &&
                            <Options>
                                <Button
                                    type="button"
                                    color="#fff"
                                    bcolor="#DA5C5C"
                                    onClick={handleClickGoogle}
                                >
                                    <DataBtn>
                                        <LogoProvider>
                                            <Google />
                                        </LogoProvider>
                                        | Google
                                    </DataBtn>
                                </Button>
                                <Button
                                    type="button"
                                    color="#fff"
                                    bcolor="#3b5998"
                                    onClick={handleClickFacebook}
                                >
                                    <DataBtn>
                                        <LogoProvider>
                                            <Facebook />
                                        </LogoProvider>
                                        | Facebook
                                    </DataBtn>
                                </Button>
                                <Button
                                    type="button"
                                    color="#fff"
                                    bcolor="#000"
                                    onClick={handleClickGitHub}
                                >
                                    <DataBtn>
                                        <LogoProvider>
                                            <Github />
                                        </LogoProvider>
                                        | GitHub
                                    </DataBtn>
                                </Button>
                            </Options>
                        }
                        {user === USER_STATES.NOT_KNOWN && <span>Loading...</span>}
                    </Main>
                </Container>
            </Page >
        </>
    )
}

export default Login