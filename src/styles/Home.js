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
    .content {
        z-index: 9;
        display: flex;
        justify-content: center;
        margin: 60px 0;
        color: #fff;
        height: 50vh;
        align-items: center;
        max-width: calc(100% - 333px);
        position: relative;
        margin-left: auto;
        
    }
`;