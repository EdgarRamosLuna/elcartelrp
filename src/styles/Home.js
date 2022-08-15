import styled from "styled-components";

export const Home = styled.div`
cursor: url(/assets/img/cursor.cur), auto;
`;

export const HomeE = styled.div`

    @font-face {
        font-family: 'DZ';
        src:url(/assets/fonts/dz.ttf);
        /* other formats include: 'woff2', 'truetype, 'opentype',
                                    'embedded-opentype', and 'svg' */
    }
    h1, h2,h3,h4,h5,h6{
        font-family: 'DZ';
    }
    cursor: url(/assets/img/cursor21.cur), auto;
    height:100%;
    @media(max-width:720px){
        overflow-y: scroll;
    }
    .video-container{
        width: 100%;
        position: fixed;
        height: 100vh;
        top:0;
        &:before{
            content: '';
            height: 100%;
            background: #000;
            width: 100%;
            position: absolute;
            z-index: 12;
            left: 0;
            opacity: 0.3;
        }
    }
    
`;
export const WelcomeS = styled.div`

    display: flex;
    z-index: 12;
    position: relative;
    text-align: center;
    height: 89%;
    align-items: center;
    justify-content: center;
    
    .content-home {
        z-index: 9;
        display: flex;
        justify-content: center;
        margin: 60px 0;
        color: #fff;
        align-items: center;
        position: relative;
      
        width: calc(100% - 333px);
        @media(max-width:720px){
            width: calc(100%);
        }
        
    }
`;
export const Button = styled.div`
   position:absolute;
   width: auto;
   right: 55px;
   bottom: 39px;
   height: 40px;
   font-size: 0.8rem;
   z-index: 1;
   
   color: green;
   .btnScroll {
        position: fixed;
        width: 29px;
        cursor: none;
        transition: all ease-in 0.5s;
        
        img {
            width: 100%;
            transition: all ease-in 0.3s;
            transform:rotate(180deg); 
            &:hover{
                transition: all ease-in 0.4s;
                transform:rotate(0deg) ;
            }
        }
    }
`