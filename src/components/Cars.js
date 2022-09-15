import React from "react";
import { Link } from "react-router-dom";
import { useCars } from "../hooks/useCars";
import Car from "./Car";

const Cars = () => {
  const { data, loading, error } = useCars();

  if (error) return <>Something went wrong</>;
  if (loading) return <>loading</>;

  return (
    <>
      <ul>
        {data.recipeCollection.items.map((item) => {
          return (
            <div key={item.sys.id}>
              <Link to={`/${item.sys.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Cars;
<>Cars</>;
