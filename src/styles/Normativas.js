import styled from "styled-components";

export const Normativas = styled.div`
    background: #00000091;;
    max-width: 1333px;
    margin-left: auto;
    margin-right: auto;
    .main-content{
        margin-top: 80px;
        color: #fff;
        font-size: 22px;
        padding: 33px 0;
    }
    .content-nor {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 0 120px;
    }
    .normativa-info{
        p{
            white-space:pre-line;
            padding: 0 30px;
        }
    }
    .accordion__button{
        background:none;
        color:#fff;
        display:flex;
        align-items: center;
        padding:0;
        &::before{
            filter: drop-shadow(0 0 7px #f7ff00);
        }
    }
    .accordion{
        border:none;
    }
    .nor-btn-txt{
        text-transform: capitalize;
    }
    .txt-y{
        color:#f7ff00;
    }
    .txt-r{
        color: #f2120c;
    }
    .txt-b{
        color: #1054f5;
    }
  /*filter: drop-shadow(1px 0 11px #f7ff00);*/
`;