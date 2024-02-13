import { useMutation } from "@apollo/client";
import { REMOVE_FROM_CART } from "../utils/mutations";
import { GET_ONE_USER_CART } from "../utils/queries";

const CartItem = ({ item, userId }) => {
  const { _id, itemName, price, image } = item;

  const [removeFromCart, { error }] = useMutation(REMOVE_FROM_CART, {
    refetchQueries: [GET_ONE_USER_CART, "getUserCart"],
  });

  const handleRemoveFromCart = async () => {
    try {
      const { data } = await removeFromCart({
        variables: { id: userId, itemId: _id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex justify-between items-center p-3 border w-full bg-gray-200">
      <img className="size-14" src={image} />
      <div className="w-full pl-3">
        <h3>{itemName}</h3>
        <h4>${price}.00</h4>
      </div>
      <button onClick={handleRemoveFromCart}>
        <i className="fa-solid fa-trash text-xl text-red-500"></i>
      </button>
    </section>
  );
};

export default CartItem;
