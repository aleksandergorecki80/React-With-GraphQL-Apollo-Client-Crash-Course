import { useQuery, gql } from "@apollo/client";


const GET_CAR = gql`
  query Car($id: String!) {
    recipe(id: $id) {
      sys {
        id
      }
      title
      thumnail {
        url
      }
    }
  }
`;

export const useCar = (id) => {
    const  {data, loading, error} = useQuery(GET_CAR, {
      variables: {
        id
      }
    });

    console.log(data)

    return { data, loading, error };
}
