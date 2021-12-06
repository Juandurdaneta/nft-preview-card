import styled from "styled-components";
import nft_image from "../images/image-equilibrium.jpg"

export const Wrapper = styled.div`
    width: 340px;
    height: 36rem;
    background-color: var(--ligthBlue);
    margin-top: 4.2rem;
    border-radius: 15px;    
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.45); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.45);
`;

export const Content = styled.div`
    padding: 20px;

    .header-image{
        width: 18.7rem;
        height: 18.7rem;
        border-radius: 12px;
        background-image: url(${props => props.nft});
        background-size:     cover;                      /* <------ */
        background-repeat:   no-repeat;
        background-position: center center;  

    }


    .header-image:hover{
        background-image: linear-gradient(to right, rgba(1, 255, 247, .6), rgba(1, 255, 247, .6)), url(${props => props.nft});
        cursor: pointer;
    }
   
   

    p{
        color: var(--gray); 
        line-height: 1.5;
    }

    hr{
        height: 1px;
        background-color: var(--gray);
        border: none;
    }

    .info{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 16px;
            font-weight: 600;
            display: inline;
            margin-left: 20px;
        }

        img{
            position: absolute;
            float: left;
            width: 12px;
        }
    }

    .days-left{
        img{
            width: 20px;
        }
    }

`