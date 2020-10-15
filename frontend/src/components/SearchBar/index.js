import React from 'react'
import { SearchBarStyle, SearchInput, Liked, Friends, Follow } from './style'

const SearchBar = () => {
    return (
        <SearchBarStyle>
            <SearchInput type='search' placeholder='Search posts...' />
            <Liked>Liked</Liked>
            <Friends>Friends</Friends>
            <Follow>Follow</Follow>
        </SearchBarStyle>
    )
}

export default SearchBar