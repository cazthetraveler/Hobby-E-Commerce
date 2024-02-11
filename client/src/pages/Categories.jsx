import ItemCard from "../components/ItemCard";
import { useLocation } from "react-router-dom";
import { GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Category = () => {
  //gets catagory name
  const currentPage = useLocation().pathname;
  const title = currentPage.split("/").pop().trim();

  //gets catagory to lowercase
  const lowerCat = title.toLowerCase();

  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.items) {
    return <p>No featured items available.</p>;
  }
  //filters data for catagory
  const filteredItems = data.items.filter(
    (item) => item.category[0] == lowerCat
  );

  //TODO
  return (
    <div className="m-8">
      <h2 className="mb-6 text-4xl text-center font-bold">
        {title} Categories
      </h2>
      <div className="flex flex-wrap justify-evenly">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
