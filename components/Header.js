import styled from "styled-components"
import Collapse from "./Icons/Collapse"
import Search from "./Icons/Search"

const HeaderApp = styled.header`
    align-items: center;
    display: grid;
    padding: 0 1rem;
    grid-template-columns: 10% 30% 60%;
    @media(max-width: 1180px) {
        grid-template-columns: 10% 60% 40%;
        text-align: center;
    }
    @media(max-width: 600px) {
        display: block;
        text-align: -webkit-center;
    }
`
const TitlePage = styled.h2`
    margin: 0;
`
const DivInputSearch = styled.div`
    align-items: center;
    background-color: #F9F8F9; 
    border-radius: 10px;
    display: flex;
    padding: 10px;
    width: 100%;
    @media(max-width: 1180px) {
        width: 70%;
    }
`
const InputSearch = styled.input`
    background-color: #F9F8F9;
    border: none;
    /* font-family: 'Poppins'; */
    margin-left: 15px;
`

const Header = () => {
    return (
        <HeaderApp>
            <Collapse />
            <TitlePage>Chukwudi</TitlePage>
            <DivInputSearch>
                <Search />
                <InputSearch type="search" name="Search" id="Search" placeholder="Search" />
            </DivInputSearch>
        </HeaderApp>
    )
}

export default Header;
