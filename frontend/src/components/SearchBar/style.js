import styled from 'styled-components';
import search_icon from '../../assets/svgs/search_icon.svg'

export const SearchBarStyle = styled.div`
    height: 80px;
    width: 100%;
    padding: 0 150px;
    border-bottom: solid 1px #EFEFF0;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
`

export const SearchInput = styled.input`
    background-image: url(${search_icon});
    background-repeat: no-repeat;
    background-color: #F8F8F9;
    width: 180px;
    height: 25px;
    border: none;
    background-position: left;
    padding-left: 40px;
    font-size: 16px;
    outline: none;
`

export const Liked = styled.div`
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    :hover {
        border-bottom: solid 2px black;
    }
`
export const Friends = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 40px;
    :hover {
        border-bottom: solid 2px black;
    }
`

export const Follow = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 40px;
    :hover {
        border-bottom: solid 2px black;
    }
`

