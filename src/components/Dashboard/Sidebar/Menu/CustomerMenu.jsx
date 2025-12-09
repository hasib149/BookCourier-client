import MenuItem from "./MenuItem";
import { IoReceiptSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
const CustomerMenu = () => {
  return (
    <>
      <MenuItem icon={FaShoppingBag } label="My Orders" address="my-orders" />
      <MenuItem icon={IoReceiptSharp} label="Invoices" address="invoices" />
    </>
  );
};

export default CustomerMenu;
