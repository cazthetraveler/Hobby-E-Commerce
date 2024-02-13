import Carousel from "../components/Carousel";
import ItemCard from "../components/ItemCard";
import { GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const HomePage = () => {
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

  const featuredItems = data.items.filter((item) =>
    item.category.includes("featured")
  );

  return (
    <section>
      <h2 className="my-6 text-4xl text-center font-bold">Featured Items</h2>
      <Carousel items={featuredItems} />
      <div className="m-8">
        <div className="flex flex-wrap justify-evenly">
          {data.items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
