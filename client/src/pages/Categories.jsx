import ItemCard from "../components/ItemCard";
import { useLocation } from "react-router-dom";
import { GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Category = () => {
    //gets catagory name
    const currentPage = useLocation().pathname;
    const title = currentPage.split("/").pop().trim();

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
 console.log(data.items);


  const filteredItems = data.items.filter((item) =>
    item.category.includes(item.category[0])
  );

  //TODO
  return ( 
  <div>
      <h2 className="text-3xl font-bold">{title} Categories</h2>
      <div>
        <ul>
            <ItemCard items={filteredItems} />
        </ul>
      </div>
  </div>
  
  )
};

export default Category;
