import Carousel from "../components/Carousel";
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

  const featureItemInfo = data.items.find((item) => item._id);

  const featuredItems = data.items.filter((item) =>
    item.category.includes(featureItemInfo.category[0])
  );

  return (
    <section>
      <h2>Home Page</h2>
      <h2>Featured Items</h2>
      <Carousel items={featuredItems} />
    </section>
  );
};

export default HomePage;
