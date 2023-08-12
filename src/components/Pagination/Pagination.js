import React from "react";
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
// import './pagination.css'

const Paginate = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    font-weight: bold;
    gap: 3px;
   
    a {
    &:hover {
    text-decoration: underline ;
    text-decoration-line: 7px;
    }
  }

  a {
    &:active {
      text-decoration: underline    
}
  }

  a {
   border: none;
  }
`;


function Pagination(props) {
       if(props.countpage <= 1) {
            return null;
       }

      return (

            <Paginate
                  previousLabel={""}
                  nextLabel={""}
                  pageCount={props.countpage}
                  onPageChange={props.changePage}
                  // containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  // activeClassName={"paginationActive"}
                  disabledClassName={"paginationDisabled"}
                  containerClassName="pagination"
                  activeClassName="active"
                  pageClassName="page-item"
                  breakClassName="page-item"
                  pageLinkClassName="page-link"
                  breakLinkClassName="page-link"
            />


      );
}
export default Pagination;