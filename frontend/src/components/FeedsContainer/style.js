import styled from 'styled-components';

export const FeedSectionStyle = styled.section`
    margin: 10px 2% 0 10%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 14px;

    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        width: 0;
        height: 0,
    }
`

