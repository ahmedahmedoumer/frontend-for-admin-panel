import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import axios from 'axios';
import { useEffect, useState } from "react";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function Pagination(props) {
  const {pageSize,setCurrentPage}=props;
  const [pageData,setPageData]=useState(1);
  const { items } = usePagination({
    count: pageSize,
  });



  const fetchData=(page)=>{
    setCurrentPage(page);
    setPageData(page);
  }
  const handlePageType=(type)=>{
    if(type==='previous'){
      var pageNumber=pageData;
      if(pageNumber!=1){
           pageNumber--;
      }
      else{
        pageNumber=pageNumber;
      }
      
      fetchData(pageNumber);
    }
    else{
      var pageNumber=pageData;
      if(pageNumber!=pageSize){
           pageNumber++;
      }
      else{
        pageNumber=pageNumber;
      }
      
      fetchData(pageNumber);
    }
  }

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          // console.log(items);
          let children = null;
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  width: 32,
                  height: 32,
                  color: "#4C4C4C",
                  background: "E6E6E6",
                  border: "none",
                  borderRadius: "50%",
                  marginRight: "6px",
                  marginLeft: "6px",
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
                onClick={() => fetchData(page)}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                style={{
                  marginLeft: "12px",
                  marginRight: "12px",
                  border: 0,
                  fontSize: "18px",
                  background: "transparent",
                }}
                type="button"
                {...item}
                onClick={()=>handlePageType(type)}
              >
                {type}
              </button>
            );
          }

          return (
            <li style={{ display: "flex", alignItems: "center" }} key={index}>
              {children}
            </li>
          );
        })}
      </List>
    </nav>
  );
}
