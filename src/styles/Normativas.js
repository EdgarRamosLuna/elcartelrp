import styled from "styled-components";

export const Normativas = styled.div`
    background: #00000091;;
    max-width: 1333px;
    position: relative;
    margin-left: auto;
    height: 100%;
    overflow-y: scroll;
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
export const NormativasLE = styled.div`
    background: #000000e3;
    max-width: calc(100% - 333px);
    position: relative;
    margin-left: auto;
    height: 100%;
    overflow-y: scroll;
    .main-content{
        color: #fff;
        font-size: 22px;
        padding: 33px 0;
        height: 100%;
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
export const AccordionD = styled.div`
    width:90%;
    margin:0 auto;
    .nor-items {
        display: flex;
    }
    .nor-item {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        width:100%;
        cursor: pointer;
    }
    .nor-item-data {
        display: none;
        margin-top: 25px;
        transition:all ease-in 2s;
        color:${props => props.dataColor};
        width:90%;
        margin:20px auto;
        p{
            text-align:left;
            white-space: pre-line;
            width:100%;
        }
    }
    .nor-btn {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        cursor: url(assets/img/cursor.cur), auto;
        i{
            color:${props => props.dataColor};
            
        }
    }
    .nor-btn-txt{
        color:${props => props.dataColor};
        align-items: center;
        gap: 10px;
        display: flex;
        cursor: pointer;
    }
    .normal{
        transition: all 0.1s;
    }
    .rotate {
        transform: rotate(90deg);
        transition: all 0.1s;
    }
`;