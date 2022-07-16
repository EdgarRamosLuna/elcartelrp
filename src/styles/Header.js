import styled from 'styled-components';

export const Header = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1666px;
    margin: auto;
    height: 80px;
    .logo {
        width: auto;
        position: relative;
        top: 60px;
        left: -30px;
        z-index: 3;
        cursor: url(assets/img/cursor.cur), auto;
       
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
        width: 30%;
        display: flex;
        justify-content: center;
        gap: 90px;
        position: relative;
        margin-right: 20%;
        margin-left: 12%;
        
    }
    .social-icons {
        display: flex;
        color: rgb(247, 255, 0);
        a{
            
        }
    }
    .fa-brands.fa-twitch {
        color: rgb(247, 255, 0);
        &:hover{
            color: #765aff;
            transition: 0.2s ease-in;
            cursor: url(assets/img/cursor.cur), auto;
        }
    }
    .fa-brands.fa-instagram {
        color: rgb(247, 255, 0);
        &:hover{
            color: #ff00bf;
            transition: 0.2s ease-in;
            cursor: url(assets/img/cursor.cur), auto;
        }
    }
    .fa-brands.fa-youtube {
        color: rgb(247, 255, 0);
        &:hover{
            color: red;
            transition: 0.2s ease-in;
            cursor: url(assets/img/cursor.cur), auto;
        }
    }
    .fa-brands.fa-twitter {
        color: rgb(247, 255, 0);
        &:hover{
            color: #00dbff;
            transition: 0.1s ease-in;
            cursor: url(assets/img/cursor.cur), auto;
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
    
`;