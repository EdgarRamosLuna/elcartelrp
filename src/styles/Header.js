import styled from 'styled-components';

export const Header = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: auto;
    height: 80px;
    position: relative;
    z-index: 10;
    @media(max-width:680px){
        height: auto;
    }
    .logo {
        width: auto;
        position: relative;
        top: 60px;
        left: -30px;
        z-index: 3;
        flex-wrap:wrap;
        cursor: url(/assets/img/cursor.cur), auto;
        
        img{
            width: 140px;
            &:hover{
                filter: drop-shadow(0 0 30px #05ff5b);
                transition: 0.2s ease-in;
                scale:1.1;
                transition: 0.3s all ease-in-out;
               /* -webkit-animation:spin 4s linear infinite;
                -moz-animation:spin 4s linear infinite;
                animation:spin 4s linear infinite;*/
            }
        }
    }
    .social {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 90px;
        position: relative;
        flex-wrap:wrap;
        @media(max-width:680px){
            width:90%;
            gap: unset;
        }
    }
    .social-icons {
        display: flex;
        color: rgb(247, 255, 0);
        a{
            
        }
        @media(max-width:680px){
            margin:15px 0;
            width: 20%;
            justify-content: center;
        }
    }
    .fa-brands.fa-twitch {
        color: rgb(247, 255, 0);
        &:hover{
            color: #765aff;
            transition: 0.2s ease-in;
            cursor: url(/assets/img/cursor.cur), auto;
        }
    }
    .fa-brands.fa-instagram {
        color: rgb(247, 255, 0);
        &:hover{
            color: #ff00bf;
            transition: 0.2s ease-in;
            cursor: url(/assets/img/cursor.cur), auto;
        }
    }
    .fa-brands.fa-youtube {
        color: rgb(247, 255, 0);
        &:hover{
            color: red;
            transition: 0.2s ease-in;
            cursor: url(/assets/img/cursor.cur), auto;
        }
    }
    .fa-brands.fa-twitter {
        color: rgb(247, 255, 0);
        &:hover{
            color: #00dbff;
            transition: 0.1s ease-in;
            cursor: url(/assets/img/cursor.cur), auto;
        }
    }
    .social-icons i {
        font-size: 32px;
        /*filter: drop-shadow(0 0 14px #7bffda);*/
    }
    @-moz-keyframes spin { 
        100% { -moz-transform: rotate(360deg); } 
    }
    @-webkit-keyframes spin { 
        100% { -webkit-transform: rotate(360deg); } 
    }
    @keyframes spin { 
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }
    .content{

        &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background:#000;
            opacity: 0.3;
            left: 0;
            z-index: 6;
        }
        @media(max-width:680px) {
            overflow-y: scroll;
            &:before{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background:#000;
                opacity: 0.3;
                left: 0;
                z-index: 6;
            }
        }
    }
   
`;

export const HeaderE = styled.div`
    @font-face {
        font-family: 'DZ';
        src:url(/assets/fonts/dz.ttf);
        /* other formats include: 'woff2', 'truetype, 'opentype',
                                    'embedded-opentype', and 'svg' */
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9;
    font-family: 'DZ';
    width: 333px;
    background: #000000b3;
    position: fixed;
    top: 0;
    height: 100%;
    justify-content: start;
    z-index: 100;
    @media(max-width:720px){
        width: 100%;
        height: auto;
        position: relative;
    }
    .menu-container {
        width: auto;
        display: flex;
        
        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            flex-direction: column;
            text-align: left;
            @media(max-width:720px){
                text-align: center;
            }
            li {
                margin: 25px 20px;
                padding: 0;
                a{
                    color: #68ff00;
                    font-size: 27px;
                    text-decoration:none;
                    transition:all 0.2s;
                    cursor: url(/assets/img/cursor2.cur), auto;
                    &:hover{
                        color:#fff;
                       
                    }
                }
                .active{
                    color:#fff;
                    
                }
            }
            
        }
    }
    .logo img {
        width: 70%;
        cursor: url(/assets/img/cursor2.cur), auto;
        transition:all 0.2s;
        &:hover{
            scale:0.9;
            filter: drop-shadow(0 0 7px #fff);
        }
    }
    .logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            @media(max-width:720px){
                width: 30%;
                display: flex;
            }
            
        }
    }
    .btn-open {
        margin-right: 15px;
        font-size: 3em;
        color: #08ff00;
        display:none;
        @media(max-width:720px){
            display:block;
        }
    }
    .web-menu{
        @media(max-width:720px){
            display:none !important;
        }
    }
    .opacity-full{
        opacity: 1 !important;
    }
    .mobile-menu{
        display:none !important;
        opacity:0;
        @media(max-width:720px){
            display:flex !important;
        }
    }
`;