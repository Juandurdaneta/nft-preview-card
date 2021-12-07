import React from "react";

// styles
import { Wrapper, Content } from "./Card.styles";

// images
import nft_image from "../images/image-equilibrium.jpg"
import eth from "../images/icon-ethereum.svg"
import clock from "../images/icon-clock.svg"
import view_image from "../images/icon-view.svg"

const Card = () => (
    <Wrapper>
     <Content nft={nft_image}>

        {/* Header of the card, contains image */}
        <div className="header-image">
            <img src={view_image} id='viewIcon' alt='view' />
        </div>

        {/* Title of the card  */}
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm...</p>

        {/* More info on the current NFT  */}
        <div className='info'>
            <div>
                <img src={eth} alt='ethereum symbol'/>
                <p style={{color: 'cyan'}}  >0.041 ETH</p>
            </div>

            <div className='days-left'>
                <img src={clock} alt='clock '/>
                <p>3 days left</p>
            </div>
        </div>

        <hr />

     </Content>
    </Wrapper>
)

export default Card;