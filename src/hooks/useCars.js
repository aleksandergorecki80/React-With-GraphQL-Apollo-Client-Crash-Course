import { useQuery, gql } from "@apollo/client";

const GET_CARS = gql`
  query Cars {
    recipeCollection {
      items {
        sys {
          id
        }
        title
        ingredients
      }
    }
  }
`;

export const useCars = () => {
  const { data, loading, error } = useQuery(GET_CARS);

  return { data, loading, error };
};
