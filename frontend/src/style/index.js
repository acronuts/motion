import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export const LikeBoxItems = styled.div`
    font-size: 14px;
    background-color: #f2f2f2;
    border-radius: 18px;
    text-align: center;
    padding: 8px 16px;
    margin: 0 8px 16px 0;
`
