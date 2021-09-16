import styled from "styled-components"
import Collapse from "./Icons/Collapse"
import Search from "./Icons/Search"

const HeaderApp = styled.header`
    align-items: center;
    display: grid;
    grid-template-columns: 10% 30% 60%;
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
    width: 80%;
`
const InputSearch = styled.input`
    background-color: #F9F8F9;
    border: none;
    margin-left: 15px;
    outline: none;
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
