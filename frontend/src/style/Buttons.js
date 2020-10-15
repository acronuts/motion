import styled from 'styled-components'

export const PostBtn = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border: none;
    outline: none;
    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.25);
    }
`

export const SubmitBtn = styled.input`
    width: 280px;
    height: 60px;
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border-radius: 30px;
    border: none;
    color: white;
    outline: none;
    margin-top: auto;
`

export const ClearBtn = styled.button`
    width: 120px;
    height: 40px;
    border: solid 1px #d6d6d6;
    background-color: #ffffff;
    border-radius: 30px;
    font-size: 10px;
    text-align: center;
    /* letter-spacing: 1px; */
    text-transform: uppercase;
    outline: none;
`