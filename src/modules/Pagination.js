import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function Pagination() {
  const { items } = usePagination({
    count: 7,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
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
