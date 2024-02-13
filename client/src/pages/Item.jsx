import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ONE_ITEM, GET_ITEMS } from "../utils/queries";
import { ADD_TO_CART } from "../utils/mutations";
import Carousel from "../components/Carousel";

const Item = () => {
  const { id } = useParams();

  const {
    loading: loading1,
    error: error1,
    data: data1,
  } = useQuery(GET_ONE_ITEM, {
    variables: { itemId: id },
  });

  const { loading: loading2, error: error2, data: data2 } = useQuery(GET_ITEMS);

  const [addToCart, { error }] = useMutation(ADD_TO_CART);

  if (loading1 || loading2) {
    return <p>Loading...</p>;
  }

  if (error1 || error2) {
    return <p>Error: {error1 ? error1.message : error2.message}</p>;
  }

  if (!data1 || !data1.item) {
    return <p>No item available.</p>;
  }

  if (!data2 || !data2.items) {
    return <p>No items available.</p>;
  }

  const { itemName, itemDescription, category, image } = data1.item;

  const relatedItems = data2.items.filter((item) =>
    item.category.includes(category[0])
  );

  const handleAddToCart = async () => {
    try {
      console.log(data1.item);
      console.log(id);
      const { data } = await addToCart({ variables: { id } });
      console.log(data);
    } catch (err) {
      console.error(err);
      console.error(error);
    }
  };

  return (
    <section
      id="item-overview"
      className="flex flex-col items-center p-5 md:px-9"
    >
      <section
        id="item-info"
        className="border-b-2 md:pb-7 lg:px-12 w-full 2xl:w-2/3 flex flex-col md:flex-row lg:justify-center items-center lg:items-start"
      >
        <div className="mb-5 md:mb-0 md:w-1/2 flex justify-center">
          <img
            className="size-72 lg:size-96 2xl:size-3/4"
            src={image}
            alt="Item"
          />
        </div>
        <div className="flex flex-col items-left w-full md:w-1/2 p-5 md:p-0">
          <h2 className="text-3xl 2xl:text-4xl font-medium mb-5">{itemName}</h2>
          <p className="text-lg xl:text-xl indent-5">{itemDescription}</p>
        </div>
      </section>

      <section
        id="add-to-cart"
        className="border-b-2 p-5 md:p-7 lg:px-12 w-full 2xl:w-2/3 flex justify-center items-center text-xl 2xl:text-2xl"
      >
        <label className="mr-2">Quantity:</label>
        <select className="border border-black rounded">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddToCart}
          className="bg-emerald-500 hover:bg-emerald-700 duration-200 rounded-lg text-white w-1/2 xl:w-1/3 py-1 ml-8 xl:ml-48"
        >
          Add to Cart
        </button>
      </section>

      <section
        id="related-items"
        className="border-b-2 p-5 md:p-7 w-full 2xl:w-2/3"
      >
        <h2 className="text-3xl lg:text-4xl font-medium mb-3 lg:mb-8 text-center">
          Related Items
        </h2>
        <Carousel items={relatedItems} />
      </section>
    </section>
  );
};

export default Item;
