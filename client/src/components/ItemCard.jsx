import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  //TODO
  return (
    <Link to={`/items/${item._id}`}>
      <section className="p-2 flex flex-col items-center 2xl:w-52 2xl:h-72">
        <img className="2xl:size-40" src={item.image} />
        <h3 className="font-semibold 2xl:text-xl">{item.itemName}</h3>
        <h3 className="mt-auto font-medium 2xl:text-2xl">${item.price}</h3>
      </section>
    </Link>
  );
};

export default ItemCard;
