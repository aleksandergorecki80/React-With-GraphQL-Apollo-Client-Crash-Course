import { useParams } from "react-router";
import { useCar } from "../hooks/useCar";

const Car = () => {
  const { id } = useParams();
  const { data, loading, error } = useCar(id);

  if (error) return <>Something went wrong</>;
  if (loading) return <>loading</>;

  return (
    <>
      <h4>{data.recipe.title}</h4>
      <img src={data.recipe.thumnail.url} width="400px" />
    </>
  );
};

export default Car;
