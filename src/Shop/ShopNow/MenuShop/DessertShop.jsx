// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const DessertShop = ({ dessert }) => {
  const { name, _id, recipe, image, price } = dessert;
  return (
    <motion.div
      className="bg-white grid  rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={name} className="w-full p-2 rounded-xl h-56 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <span className="text-lg font-bold text-yellow-600">${price}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{recipe}</p>
        <Link
          to={`/details/${_id}`}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Add to Cart
        </Link>
      </div>
    </motion.div>
  );
};

export default DessertShop;
