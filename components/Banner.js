import styled from "styled-components"
import Image from 'next/image'
import Confetti from '../assets/images/d.png'
import BannerImage from '../assets/images/headerimage.png'
import ArrowRight from "./Icons/ArrowRight"

const DivBanner = styled.div`
    align-items: center;
    background-color: #FEF6EB;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    `
const BannerInfo = styled.div`
    width: 60%;
    `
const TitleBanner = styled.h2`
    align-items: center;
    font-weight: 600;
    color: #FE652B;
    display: flex;
    text-decoration: none;
`
const DescriptionBanner = styled.p`
    color: #9A9189;
`
const LinkBanner = styled.a`
    align-items: center;
    color: #FE652B;
    display: flex;
    float: right;
    text-decoration: none;
`

const Banner = () => {
    return (
        <DivBanner>
            <Image src={BannerImage} alt="Banner Image" width={250} height={250} />
            <BannerInfo>
                <TitleBanner>
                    $0 delivery for 30 days!
                    <Image src={Confetti} alt="Party" width={30} height={30} />
                </TitleBanner>
                <DescriptionBanner>
                    $0 delivery free for orders over $10 for 30 days
                </DescriptionBanner>
                <LinkBanner href="">
                    Learn More <ArrowRight fill="#FE652B" />
                </LinkBanner>
            </BannerInfo>
        </DivBanner>
    )
}

export default Banner;
