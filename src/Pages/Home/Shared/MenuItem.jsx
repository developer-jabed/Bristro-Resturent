// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white p-4 gap-3 flex justify-between  rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300"
    >
      <img
      style={{borderRadius:'0px 200px 200px 200px'}}
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full "
      />
      <div className="p-4 space-y-2 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{recipe}</p>
      </div>
        <p className="text-lg font-bold  text-green-600"> ${price}</p>
    </motion.div>
  );
};

export default MenuItem;
