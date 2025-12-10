import MenuItem from "./MenuItem";
import { IoReceiptSharp } from "react-icons/io5";
import { FaBookmark, FaShoppingBag } from "react-icons/fa";
const CustomerMenu = () => {
  return (
    <>
      <MenuItem icon={FaShoppingBag} label="My Orders" address="my-orders" />
      <MenuItem icon={IoReceiptSharp} label="Invoices" address="invoices" />
      <MenuItem
        icon={FaBookmark}
        label=" My Wishlist"
        address="my-wishlist"
      />
    </>
  );
};

export default CustomerMenu;
