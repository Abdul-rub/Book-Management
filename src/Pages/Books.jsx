import React from 'react'
import { BookList } from '../Components/BookList'
import { FilterComp } from '../Components/FilterComp'
import styled from "styled-components"

export const Books = () => {
  return (
    <div>
        <h3>Book Page</h3>
        <BookWrapper>
            <FilterCompWrapper>
        <FilterComp/>
        </FilterCompWrapper>
        <BookListWrapper>
        <BookList/> 
        </BookListWrapper>
        </BookWrapper>
    </div>
  )
}

const BookWrapper = styled.div`
display:flex;
`
const FilterCompWrapper= styled.div`
width:300px;
`
const BookListWrapper=styled.div`
width:100%;
border:1px solid red;
`
