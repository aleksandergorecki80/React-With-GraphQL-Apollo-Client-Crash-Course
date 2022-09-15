import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const SEARCH_FOR_CAR = gql`
  query GetCarName($title: String!) {
    recipeCollection(where: { title_contains: $title }, order: [title_DESC]) {
      items {
        title
        sys {
          id
        }
      }
    }
  }
`;

const Search = () => {
  const [title, setTitle] = useState("");

  const [searchForCars, { data, loading, error, called }] = useLazyQuery(
    SEARCH_FOR_CAR,
    {
      variables: {
        title,
      },
    }
  );

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSearch = () => {
    searchForCars();
    console.log(data);
  };

  return (
    <div>
      <input type="text" onChange={(e) => onChangeHandler(e)} />
      <button onClick={onSearch}>Search</button>
      {error && <div>Something went wrong</div>}
      {loading && <div>Loading...</div>}

      {data &&
        data.recipeCollection.items.map((item) => {
          return (
            <h4 key={item.sys.id}>
              <Link to={`/${item.sys.id}`}>{item.title}</Link>
            </h4>
          );
        })}
    </div>
  );
};

export default Search;
