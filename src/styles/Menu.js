import styled from "styled-components";

export const Menu = styled.div`
    display: flex;
    max-width: 1180px;
    margin: auto;
    width: 100%;
    justify-content: center;
    position:relative;
    align-items: center;
    flex-direction: column;
    .logo {
        position: relative;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        img {
            height: 135px;
        }
    }
    a{
        width: auto;
        display: flex;
        justify-content: center;
        margin: 0 20px;
        text-decoration: none;
        color: #f7ff00;
        font-weight: bold;
        font-size: 29px;
        
        font-family: 'Indie Flower', sans-serif;
        &:hover{
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
            cursor: url(assets/img/cursor.cur), auto;
            scale:1.1;
            transition: 0.2s all;
            filter: drop-shadow(0 0 7px #f7ff00);
            color: #05ff5b;
        }
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
    .item-container {
        width: 90%;
        margin: auto;
    }
    .menu-w {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;