import { FaBookMedical, FaShoppingCart } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
const LibrarianMenu = () => {
  return (
    <>
      <MenuItem icon={FaBookMedical} label="Add Book" address="add-book" />
      <MenuItem icon={MdHomeWork} label="My Books" address="my-books" />
      <MenuItem icon={FaShoppingCart} label=" Orders" address="orders" />
    </>
  );
};

export default LibrarianMenu;
